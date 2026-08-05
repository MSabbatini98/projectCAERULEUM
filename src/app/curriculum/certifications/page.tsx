import Image from 'next/image'
import styles from './certification.module.css'

type Certificate = {
  title: string
  intro: string
  pdfHref: string
  previewImg: string
  issuer: string
  duration: number | string 
  releaseDate?: string
}

const certificateData: Certificate[] = [
  {
    title: 'Microsoft Excel Professional Certificate',
    intro: 'Master Excel and Copilot to analyze, automate, and visualize data through advanced techniques, including VBA, dashboards, and data transformation workflows.',
    pdfHref: '/public/download/Excel_and_copilot_complete.pdf',
    previewImg: '/images/previews/excel-copilot.png',
    issuer: 'Microsoft',
    releaseDate: '04/07/2026',
    duration: '~80',
  },
  {
    title: 'Google Data Analytics',
    intro: 'Develop core data analysis skills—cleaning, analyzing, and visualizing data—using tools like spreadsheets, SQL, R, and Tableau to deliver actionable insights.',
    pdfHref: '/certs/data-analysis-r.pdf',
    previewImg: '/images/previews/data-analysis-r.png',
    issuer: 'Johns Hopkins University',
    duration: 200
  },
  {
    title: 'Shopify E-commerce Development',
    intro: 'Building e-commerce sites with Shopify.',
    pdfHref: '/certs/shopify-ecommerce.pdf',
    previewImg: '/images/previews/shopify-ecommerce.png',
    issuer: 'Shopify',
    duration: 150
  },
  {
    title: 'Accessibility Essentials',
    intro: 'Making web interfaces accessible to everyone.',
    pdfHref: '/certs/accessibility-essentials.pdf',
    previewImg: '/images/previews/a11y.png',
    issuer: 'W3C',
    releaseDate: '01/01/2024',
    duration: 200
  },
]
export default function CertificationPage() {
  const renderCert = (c: Certificate) => (
    <article key={c.title} className={styles.certCard}>
      <div className={styles.certImg}>
        <Image
          src={c.previewImg}
          alt={`${c.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 144px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={styles.cardContent}>
        <div>
          <h3 className={styles.cardTitle}>{c.title}</h3>
          <p className={styles.cardIntro}>{c.intro}</p>
        </div>
      <div className={styles.certInfo}>
        <ul className={styles.certInfoList}>
          <li className={styles.certInfoItem}>Emesso da {c.issuer}</li>
          <li className={styles.certInfoItem}>Data di rilascio: {c.releaseDate || 'Data non disponibile'}</li>
          <li className={styles.certInfoItem}>{c.duration} ore</li>
        </ul>
      </div>
        <div >
          <a
            href={c.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardButton}
          >
            Download 
          </a>
        </div>
      </div>
    </article>
  )

  return (
    <main className={`${styles.certificationPage} mainContent`}>
      <header className="page-header">
        <h1 className="page-title">Certifications</h1>
        <p className="page-subtitle">
          Uploaded certificates (PDF) with image previews.
        </p>
      </header>

      <section className="grid">
        <div className="column">
          {certificateData.map(renderCert)}
        </div>
      </section>
    </main>
  )
}