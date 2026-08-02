import { promises as fs } from "fs";
import path from "path";

type SourceFile = {
  label: string;
  fileName: string;
  content: string;
};

async function readSourceFile(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "projects",
    "basicCalculator",
    fileName
  );

  return fs.readFile(filePath, "utf8");
}

export default async function BasicCalculatorSourcePage() {
  const sourceFiles: SourceFile[] = [
    { label: "TypeScript", fileName: "basic-calculator.tsx", content: "" },
    { label: "CSS", fileName: "basic-calculator.css", content: "" },
    { label: "JavaScript", fileName: "CalcButtons.js", content: "" },
  ];

  const resolvedFiles = await Promise.all(
    sourceFiles.map(async (file) => ({
      ...file,
      content: await readSourceFile(file.fileName),
    }))
  );

  return (
    <main className="mainContent" style={{ maxWidth: "1100px", margin: "0 auto", paddingBottom: "3rem" }}>
      <h1 style={{ marginBottom: "0.75rem" }}>basicCalculator source files</h1>
      <p style={{ marginBottom: "2rem" }}>
        This page shows the source code used by the calculator example.
      </p>

      {resolvedFiles.map(({ label, fileName, content }) => (
        <section key={fileName} style={{ marginBottom: "2rem" }}>
          <h2 style={{ marginBottom: "0.5rem" }}>{fileName}</h2>
          <p style={{ marginBottom: "0.5rem", color: "#6b7280" }}>{label}</p>
          <pre
            style={{
              background: "#111827",
              color: "#f9fafb",
              padding: "1rem",
              borderRadius: "0.75rem",
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            <code>{content}</code>
          </pre>
        </section>
      ))}
    </main>
  );
}
