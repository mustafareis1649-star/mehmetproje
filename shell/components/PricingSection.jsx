import { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { PRICES, formatPrice } from '../../config/pricing';

export default function PricingSection() {
  const { t } = useI18n();
  const [period, setPeriod] = useState('monthly');

  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <h2>{t('pricing_title')}</h2>
          <p>{t('pricing_lead')}</p>
        </div>

        <div className="toggle" id="billingToggle">
          <button className={period === 'monthly' ? 'active' : ''} onClick={() => setPeriod('monthly')}>
            {t('toggle_monthly')}
          </button>
          <button className={period === 'yearly' ? 'active' : ''} onClick={() => setPeriod('yearly')}>
            <span>{t('toggle_yearly')}</span>
            <span className="save-badge">{t('toggle_save')}</span>
          </button>
        </div>

        <div className="plans">
          <div className="plan">
            <h3>{t('plan_free_name')}</h3>
            <p className="desc">{t('plan_free_desc')}</p>
            <div className="price">$0</div>
            <p className="period-note">{t('plan_free_period')}</p>
            <ul>
              <li>{t('plan_free_f1')}</li>
              <li>{t('plan_free_f2')}</li>
              <li>{t('plan_free_f3')}</li>
              <li>{t('plan_free_f4')}</li>
            </ul>
            <button className="btn btn-ghost">{t('plan_free_cta')}</button>
          </div>

          <div className="plan featured">
            <span className="badge">{t('plan_pro_badge')}</span>
            <h3>{t('plan_pro_name')}</h3>
            <p className="desc">{t('plan_pro_desc')}</p>
            <div className="price">
              {formatPrice(period === 'yearly' ? PRICES.pro.yearly : PRICES.pro.monthly)}
              <span>/mo</span>
            </div>
            <p className="period-note">
              {period === 'yearly' ? t('plan_pro_note_yearly') : t('plan_pro_note_monthly')}
            </p>
            <ul>
              <li>{t('plan_pro_f1')}</li>
              <li>{t('plan_pro_f2')}</li>
              <li>{t('plan_pro_f3')}</li>
              <li>{t('plan_pro_f4')}</li>
              <li>{t('plan_pro_f5')}</li>
            </ul>
            <button className="btn btn-signal">{t('plan_pro_cta')}</button>
          </div>

          <div className="plan">
            <h3>{t('plan_team_name')}</h3>
            <p className="desc">{t('plan_team_desc')}</p>
            <div className="price">
              {formatPrice(period === 'yearly' ? PRICES.team.yearly : PRICES.team.monthly)}
              <span>/mo</span>
            </div>
            <p className="period-note">
              {period === 'yearly' ? t('plan_team_note_yearly') : t('plan_team_note_monthly')}
            </p>
            <ul>
              <li>{t('plan_team_f1')}</li>
              <li>{t('plan_team_f2')}</li>
              <li>{t('plan_team_f3')}</li>
              <li>{t('plan_team_f4')}</li>
            </ul>
            <button
              className="btn btn-ghost"
              style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              {t('plan_team_cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
