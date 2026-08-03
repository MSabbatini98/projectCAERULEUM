import Image from 'next/image'
import styles from './certification.module.css'

type Certificate = {
  id: string
  title: string
  intro: string
  pdfHref: string
  previewImg: string
}

const certificateData: Certificate[] = [
  {
    id: 'Excel + Copilot',
    title: 'Certificate in Excel + Copilot',
    intro: 'Introduction to Excel and Copilot.',
    pdfHref: '/certs/excel-copilot.pdf',
    previewImg: '/images/previews/excel-copilot.png',
  },
  {
    id: 'Data Analysis with R',
    title: 'Data Analysis with R',
    intro: 'Introduction to data analysis using R.',
    pdfHref: '/certs/data-analysis-r.pdf',
    previewImg: '/images/previews/data-analysis-r.png',
  },
  {
    id: 'Shopify E-commerce Development',
    title: 'Shopify E-commerce Development',
    intro: 'Building e-commerce sites with Shopify.',
    pdfHref: '/certs/shopify-ecommerce.pdf',
    previewImg: '/images/previews/shopify-ecommerce.png',
  },
  {
    id: 'b2',
    title: 'Accessibility Essentials',
    intro: 'Making web interfaces accessible to everyone.',
    pdfHref: '/certs/accessibility-essentials.pdf',
    previewImg: '/images/previews/a11y.png',
  },
]
export default function CertificationPage() {
  const renderCard = (c: Certificate) => (
    <article key={c.id} className={styles.certCard}>
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

        <div className={styles.cardActions}>
          <a
            href={c.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardButton}
          >
            Open certificate
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
          {certificateData.map(renderCard)}
        </div>
      </section>
    </main>
  )
}