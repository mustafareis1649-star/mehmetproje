import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../shell/auth/AuthContext';
import { useI18n } from '../shell/i18n/I18nContext';

const COPY = {
  tr: {
    signInTitle: 'Giriş yap',
    signUpTitle: 'Hesap oluştur',
    email: 'E-posta',
    password: 'Şifre',
    signInBtn: 'Giriş yap',
    signUpBtn: 'Hesap oluştur',
    switchToSignUp: 'Hesabın yok mu? Kayıt ol',
    switchToSignIn: 'Zaten hesabın var mı? Giriş yap',
    magicLink: 'Şifresiz, e-posta ile giriş linki gönder',
    magicSent: 'Giriş linki e-postana gönderildi, gelen kutunu kontrol et.',
    signUpSent: 'Hesabını onaylamak için e-postana gönderdiğimiz linke tıkla.',
    signedInAs: 'Giriş yapıldı:',
    subActive: 'Aktif Pro/Team aboneliğin var.',
    subNone: 'Henüz aktif bir aboneliğin yok.',
    goPricing: 'Planları gör',
    signOut: 'Çıkış yap',
  },
  en: {
    signInTitle: 'Sign in',
    signUpTitle: 'Create account',
    email: 'Email',
    password: 'Password',
    signInBtn: 'Sign in',
    signUpBtn: 'Create account',
    switchToSignUp: "Don't have an account? Sign up",
    switchToSignIn: 'Already have an account? Sign in',
    magicLink: 'Send a passwordless sign-in link instead',
    magicSent: 'Check your inbox for the sign-in link.',
    signUpSent: 'Check your inbox to confirm your account.',
    signedInAs: 'Signed in as:',
    subActive: 'You have an active Pro/Team subscription.',
    subNone: "You don't have an active subscription yet.",
    goPricing: 'See plans',
    signOut: 'Sign out',
  },
};

export default function AccountPage() {
  const { lang } = useI18n();
  const c = COPY[lang] || COPY.en;
  const { user, isSubscribed, signUpWithEmail, signInWithEmail, signInWithMagicLink, signOut } =
    useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setBusy(true);
    const { error } = mode === 'signup'
      ? await signUpWithEmail(email, password)
      : await signInWithEmail(email, password);
    setBusy(false);
    if (error) {
      setError(error.message);
    } else if (mode === 'signup') {
      setMessage(c.signUpSent);
    }
  }

  async function handleMagicLink() {
    setError(null);
    setMessage(null);
    setBusy(true);
    const { error } = await signInWithMagicLink(email);
    setBusy(false);
    if (error) setError(error.message);
    else setMessage(c.magicSent);
  }

  const boxStyle = {
    maxWidth: 420,
    margin: '0 auto',
    padding: '40px 36px',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--line)',
    background: 'var(--surface)',
    boxShadow: 'var(--shadow)',
  };

  if (user) {
    return (
      <div className="wrap" style={{ padding: '72px 28px', textAlign: 'center' }}>
        <div style={boxStyle}>
          <p style={{ color: 'var(--text-2)', marginBottom: 4 }}>{c.signedInAs}</p>
          <p style={{ color: 'var(--ink)', fontWeight: 600, marginBottom: 20 }}>{user.email}</p>
          <p style={{ color: isSubscribed ? 'var(--signal)' : 'var(--text-3)', marginBottom: 24 }}>
            {isSubscribed ? c.subActive : c.subNone}
          </p>
          {!isSubscribed && (
            <a href="/#pricing" className="btn btn-signal" style={{ textDecoration: 'none', marginRight: 12 }}>
              {c.goPricing}
            </a>
          )}
          <button className="btn btn-ghost" onClick={() => signOut()}>
            {c.signOut}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap" style={{ padding: '72px 28px', textAlign: 'center' }}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: 22, color: 'var(--ink)', marginBottom: 24 }}>
          {mode === 'signup' ? c.signUpTitle : c.signInTitle}
        </h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="email"
            required
            placeholder={c.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid var(--line-strong)' }}
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder={c.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid var(--line-strong)' }}
          />
          <button className="btn btn-signal" type="submit" disabled={busy}>
            {mode === 'signup' ? c.signUpBtn : c.signInBtn}
          </button>
        </form>

        <button
          onClick={handleMagicLink}
          disabled={busy || !email}
          style={{
            marginTop: 14,
            background: 'none',
            border: 'none',
            color: 'var(--signal)',
            fontSize: 13,
            cursor: 'pointer',
          }}
        >
          {c.magicLink}
        </button>

        {error && <p style={{ color: '#D64545', marginTop: 16, fontSize: 14 }}>{error}</p>}
        {message && <p style={{ color: 'var(--signal)', marginTop: 16, fontSize: 14 }}>{message}</p>}

        <button
          onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
          style={{
            marginTop: 20,
            background: 'none',
            border: 'none',
            color: 'var(--text-3)',
            fontSize: 13,
            cursor: 'pointer',
            display: 'block',
            width: '100%',
          }}
        >
          {mode === 'signup' ? c.switchToSignIn : c.switchToSignUp}
        </button>
      </div>
    </div>
  );
}
