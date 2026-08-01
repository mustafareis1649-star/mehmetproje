import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

// Real auth, backed by Supabase.
//
// - user: the signed-in Supabase user, or null.
// - isSubscribed: read from the `subscriptions` table (see supabase/schema.sql).
//   TODO(paddle): once Paddle webhooks are wired up (a Supabase Edge Function
//   or your own backend receiving subscription.created/updated/canceled),
//   that's what writes rows into `subscriptions`. This context only *reads*
//   that table — it never sets subscription status itself.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setIsSubscribed(false);
      return;
    }
    let cancelled = false;
    supabase
      .from('subscriptions')
      .select('status')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .maybeSingle()
      .then(({ data }) => {
        if (!cancelled) setIsSubscribed(!!data);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  async function signUpWithEmail(email, password) {
    const { error } = await supabase.auth.signUp({ email, password });
    return { error };
  }

  async function signInWithEmail(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  }

  async function signInWithMagicLink(email) {
    const { error } = await supabase.auth.signInWithOtp({ email });
    return { error };
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  const value = {
    user,
    loading,
    isSubscribed,
    signUpWithEmail,
    signInWithEmail,
    signInWithMagicLink,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
