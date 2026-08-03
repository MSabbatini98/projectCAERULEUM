import { promises as fs } from "fs";
import path from "path";
import SourceLayout from "@/components/source/SourceLayout";

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
    <SourceLayout
      title="basicCalculator source files"
      subtitle="This page shows the source code used by the calculator example."
      files={resolvedFiles}
    />
  );
}