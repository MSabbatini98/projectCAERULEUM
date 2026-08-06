import styles from "./SourceLayout.module.css";

type FileBlock = {
  label: string;
  fileName: string;
  content: string;
};

export default function SourceLayout({
  title,
  subtitle,
  files,
}: {
  title: string;
  subtitle: string;
  files: FileBlock[];
}) {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subtitle}>{subtitle}</h3>

      {files.map(({ label, fileName, content }) => (
        <section key={fileName} className={styles.section}>
          <h2 className={styles.fileName}>{fileName}</h2>
          <h3 className={styles.label}>{label}</h3>

          <pre className={styles.codeBlock}>
            <code>{content}</code>
          </pre>
        </section>
      ))}
    </main>
  );
}