import { useI18n } from '../shell/i18n/I18nContext';
import LegalPage from './LegalPage';

const CONTENT = {
  tr: {
    title: 'Kullanım Şartları',
    updated: 'Son güncelleme: Ağustos 2026',
    body: (
      <div className="legal-body">
        <h2>1. Hizmet</h2>
        <p>
          itdocsy, PDF ve görsel dosyalarınız üzerinde birleştirme, sıkıştırma, dönüştürme,
          imzalama gibi işlemler yapmanızı sağlayan bir araç setidir. Araçların büyük
          çoğunluğu tarayıcınızda çalışır; dosyalarınız işlem için sunucularımıza yüklenmez.
        </p>

        <h2>2. Ücretli planlar ve satıcı kaydı (Merchant of Record)</h2>
        <p>
          Sitedeki araçları görüntüleyip inceleyebilirsiniz, ancak bir dosyayı işlemek
          (birleştirme, dönüştürme, imzalama vb.) için Pro veya Team gibi ücretli bir
          plana abone olmanız gerekir. Ücretli planlar aylık veya yıllık abonelik
          şeklinde sunulur (örn. Pro plan aylık 5$).
        </p>
        <p>
          Ödemeleriniz itdocsy tarafından değil, satıcı kaydı (Merchant of Record) olarak
          hareket eden <strong>Paddle.com Market Limited</strong> tarafından tahsil edilir.
          Bu, faturanızın, banka ekstrenizdeki tahsilat kaydının ve ödeme sırasında
          uygulanan KDV/vergi hesaplamasının Paddle üzerinden yapıldığı anlamına gelir.
          Paddle bu satışlarda hukuki satıcı sıfatıyla hareket eder; itdocsy ise size
          sunulan araçların ve hizmetin sağlayıcısıdır.
        </p>

        <h2>3. Cayma hakkı ve iade</h2>
        <p>
          Satın alma işleminizle ilgili cayma hakkı ve iade süreçleri, Paddle'ın satıcı
          kaydı sıfatıyla uyguladığı{' '}
          <a href="https://www.paddle.com/legal/refund-policy" target="_blank" rel="noreferrer">
            güncel İade Politikası
          </a>{' '}
          kapsamında yürütülür. Genel hatlarıyla:
        </p>
        <ul>
          <li>
            Bulunduğunuz ülkeye göre değişmekle birlikte, dijital hizmetler için genellikle
            <strong> işlem tarihinden itibaren 14 gün içinde</strong> iade talebinde
            bulunabilirsiniz.
          </li>
          <li>
            Satın alma sırasında hizmetin derhal başlatılmasını ve cayma hakkınızdan
            vazgeçtiğinizi açıkça onayladıysanız (Paddle checkout'undaki onay kutusu ile),
            bu istisna geçerli olabilir.
          </li>
          <li>
            İade talepleri Paddle tarafından değerlendirilir; 14 gün içinde talepte
            bulunulması otomatik/garanti bir iade anlamına gelmez.
          </li>
        </ul>
        <p>
          Bir iade veya faturayla ilgili sorun yaşarsanız, önce{' '}
          <a href="mailto:itdocsy@gmail.com">itdocsy@gmail.com</a> üzerinden bize
          ulaşabilir ya da doğrudan Paddle'ın alıcı destek kanalları üzerinden talepte
          bulunabilirsiniz. Bu, yasal cayma ve tüketici koruma haklarınızı ortadan
          kaldırmaz.
        </p>
        <p>
          Abonelikler için: bir dönemin ücretine iade alınamaması ile aboneliği iptal etmek
          farklı şeylerdir. <strong>Bir sonraki yenilemeyi istediğiniz zaman iptal
          edebilirsiniz</strong>; iptal, mevcut ödenmiş dönemin sonunda geçerli olur.
        </p>

        <h2>4. Kabul edilebilir kullanım</h2>
        <p>
          Hizmeti yasa dışı içerik üretmek, başkalarının haklarını ihlal etmek veya kötüye
          kullanmak amacıyla kullanamazsınız.
        </p>

        <h2>5. Sorumluluğun sınırlandırılması</h2>
        <p>
          Araçlar "olduğu gibi" sunulur. İşlenen dosyaların doğruluğu, bütünlüğü veya
          belirli bir amaca uygunluğu konusunda yasaların izin verdiği ölçüde garanti
          verilmez.
        </p>

        <h2>6. İletişim</h2>
        <p>
          Sorularınız için <a href="mailto:itdocsy@gmail.com">itdocsy@gmail.com</a> üzerinden
          bize ulaşabilirsiniz.
        </p>
      </div>
    ),
  },
  en: {
    title: 'Terms of Use',
    updated: 'Last updated: August 2026',
    body: (
      <div className="legal-body">
        <h2>1. The service</h2>
        <p>
          itdocsy is a set of tools for working with PDF and image files — merging,
          compressing, converting, signing, and more. Most tools run in your browser;
          your files are not uploaded to our servers for processing.
        </p>

        <h2>2. Paid plans and our Merchant of Record</h2>
        <p>
          You can browse and preview the tools on the site, but processing a file
          (merging, converting, signing, etc.) requires an active paid plan (Pro or
          Team). Paid plans are billed monthly or yearly (e.g. Pro at $5/month).
        </p>
        <p>
          Payments are collected not by itdocsy directly, but by{' '}
          <strong>Paddle.com Market Ltd</strong>, acting as our Merchant of Record. Your
          receipt, the charge on your statement, and applicable VAT/sales tax are all
          handled through Paddle, which is the legal seller for these transactions.
          itdocsy remains the provider of the tools and service you're using.
        </p>

        <h2>3. Right of withdrawal and refunds</h2>
        <p>
          Withdrawal rights and refunds for your purchase are handled under{' '}
          <a href="https://www.paddle.com/legal/refund-policy" target="_blank" rel="noreferrer">
            Paddle's current Refund Policy
          </a>{' '}
          as Merchant of Record. In general:
        </p>
        <ul>
          <li>
            Depending on your country, you typically have <strong>14 days from your
            transaction date</strong> to request a refund for digital services.
          </li>
          <li>
            If you expressly confirmed at checkout that the service should start
            immediately and that you waive your withdrawal right, that exception may
            apply.
          </li>
          <li>
            Refund requests are reviewed by Paddle; submitting one within the window
            doesn't guarantee approval.
          </li>
        </ul>
        <p>
          For billing or refund issues, contact us at{' '}
          <a href="mailto:itdocsy@gmail.com">itdocsy@gmail.com</a> or reach Paddle's buyer
          support directly. This doesn't affect your statutory consumer rights.
        </p>
        <p>
          For subscriptions: not getting a refund for a period already paid is different
          from cancelling. You can <strong>cancel future renewals at any time</strong>;
          cancellation takes effect at the end of the current billing period.
        </p>

        <h2>4. Acceptable use</h2>
        <p>
          You may not use the service to create unlawful content, infringe others' rights,
          or otherwise abuse the platform.
        </p>

        <h2>5. Limitation of liability</h2>
        <p>
          Tools are provided "as is." To the extent permitted by law, we make no warranty
          as to the accuracy, integrity, or fitness for a particular purpose of processed
          files.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions? Reach us at <a href="mailto:itdocsy@gmail.com">itdocsy@gmail.com</a>.
        </p>
      </div>
    ),
  },
};

export default function TermsOfUsePage() {
  const { lang } = useI18n();
  const c = CONTENT[lang] || CONTENT.en;
  return (
    <LegalPage title={c.title} updated={c.updated}>
      {c.body}
    </LegalPage>
  );
}
