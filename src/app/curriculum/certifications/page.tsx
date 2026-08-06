import Image from 'next/image'
import styles from './certification.module.css'

type Certificate = {
  title: string
  intro: string
  pdfHref?: string
  previewImg: string
  issuer: string
  duration?: number | string 
  releaseDate?: string
  certLink?: string
}

const certificateData: Certificate[] = [
  {
    title: 'Microsoft Excel Professional Certificate',
    intro: 'Master Excel and Copilot to analyze, automate, and visualize data through advanced techniques, including VBA, dashboards, and data transformation workflows.',
    pdfHref: '/public/download/excel/Excel_and_copilot_complete.pdf',
    previewImg: '/media/skills/yannzys-excel-logo.png',
    issuer: 'Microsoft',
    releaseDate: '04/07/2026',
    duration: '~ 80h',
  },
  {
    title: 'Google Data Analytics',
    intro: 'Develop core data analysis skills—cleaning, analyzing, and visualizing data—using tools like spreadsheets, SQL, R, and Tableau to deliver actionable insights.',
    pdfHref: '/public/download/data_analytics/Data_Analytics_complete.pdf',
    previewImg: '/media/skills/Google_Logo_2.webp',
    issuer: 'Johns Hopkins University',
    releaseDate: '30/06/2026',
    duration: '~ 150h'
  },  
  {
    title: 'CompetenceBadge: Programmazione (3-4-5-6)',
    intro: 'Pianificare e sviluppare una sequenza di istruzioni comprensibili per un sistema informatico per risolvere un dato problema o per eseguire un compito specifico.',
    previewImg: '/media/skills/Badge_lv_6.png',
    pdfHref: '/download/regione/PROGRAMMAZIONE - Avanzato 6.pdf',
    issuer: 'A.E.C.A. - Bologna',
    releaseDate: '21/10/2025',
  },
  {
    title: 'Liquid Storefronts for Theme Developers',
    intro: 'Understand the principles and best practices to optimize a Shopify theme using Liquid, in order to deliver exceptional user experiences for Shopify merchants and their customers.',
    previewImg: '/download/e-commerce/liquid-storefronts-for-theme-developers-verified-sk.png',
    issuer: 'Shopify',
    certLink: 'https://www.credly.com/badges/c6e15a5a-7dd3-4c3d-b335-8d4b00176143/public_url',
    releaseDate: '30/09/2024',
  }
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
        />
      </div>

      <div className={styles.certContent}>
        <div>
          <h3 className={styles.certTitle}>{c.title}</h3>
          <p className={styles.certIntro}>{c.intro}</p>
        </div>
      <div className={styles.certInfo}>
        <ul className={styles.certInfoList}>
          <li className={styles.certInfoItem}>Emesso da: {c.issuer}</li>
          {c.releaseDate && (<li className={styles.certInfoItem}>Data: {c.releaseDate}</li>)} 
          {c.duration && ( <li className={styles.certInfoItem}>{c.duration} ore </li>  )}
        </ul>
      </div>
        <div className={styles.certBtns}>
        {c.pdfHref && (
          <a
            href={c.pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certBtn}
          >
            Download 
          </a>
          )}
          {c.certLink && (
            <a
              href={c.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certBtn}
            >
              View online
            </a>
          )}
        </div>
      </div>
    </article>
  )
  

  return (
    <main className={styles.certificationPage}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Certifications</h1>
        <p className={styles.pageSubtitle}>
          Here is a list of my certifications, showcasing my commitment to continuous learning and professional development. Each certification represents a milestone in my journey to enhance my skills and knowledge in various domains.
        </p>
      </header>

      <section className={styles.certGrid}>
        <div className={styles.certColumn}>
          {certificateData.map(renderCert)}
        </div>
      </section>
    </main>
  )
}