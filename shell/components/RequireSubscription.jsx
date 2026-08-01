import { useAuth } from '../auth/AuthContext';
import { useI18n } from '../i18n/I18nContext';

const COPY = {
  tr: {
    eyebrow: 'Pro özellik',
    title: 'Bu aracı kullanmak için Pro plana geç',
    body: 'itdocsy\'deki tüm araçlar Pro üyelere açıktır. Aylık 5$\'dan başlayan planla bu ve diğer 47 aracın tamamına sınırsız erişim kazanırsın.',
    cta: 'Pro\'ya geç — $5/ay',
  },
  en: {
    eyebrow: 'Pro feature',
    title: 'Upgrade to Pro to use this tool',
    body: "Every tool on itdocsy is available to Pro subscribers. Plans start at $5/month for unlimited access to this and all 47 other tools.",
    cta: 'Upgrade to Pro — $5/mo',
  },
};

// Wraps a tool's interactive component. Renders the tool only if the
// visitor has an active subscription; otherwise shows an upgrade prompt
// in its place. Surrounding marketing content (HowItWorks, trust bar, etc.)
// is left outside this wrapper so it stays visible to everyone.
export default function RequireSubscription({ children }) {
  const { isSubscribed } = useAuth();
  const { lang } = useI18n();
  const c = COPY[lang] || COPY.en;

  if (isSubscribed) return children;

  return (
    <section className="wrap" style={{ padding: '72px 28px', textAlign: 'center' }}>
      <div
        style={{
          maxWidth: 520,
          margin: '0 auto',
          padding: '48px 36px',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--line)',
          background: 'var(--surface)',
          boxShadow: 'var(--shadow)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 0.4,
            textTransform: 'uppercase',
            color: 'var(--signal)',
            background: 'rgba(79,110,247,0.10)',
            padding: '4px 10px',
            borderRadius: 999,
            marginBottom: 16,
          }}
        >
          {c.eyebrow}
        </span>
        <h2 style={{ fontSize: 24, color: 'var(--ink)', marginBottom: 12 }}>{c.title}</h2>
        <p style={{ color: 'var(--text-2)', fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
          {c.body}
        </p>
        <a
          href="/#pricing"
          className="btn btn-signal"
          style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 28px' }}
        >
          {c.cta}
        </a>
      </div>
    </section>
  );
}
