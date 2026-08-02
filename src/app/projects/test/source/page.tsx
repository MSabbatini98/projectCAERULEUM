import SourcePageLayout from "@/components/SourcePageLayout";

export default function TestSourcePage() {
  return (
    <SourcePageLayout
      title="Test source files"
      description="This is a second example page using the shared source layout."
    >
      <section>
        <p>This is where you can place code snippets or references for another project.</p>
      </section>
    </SourcePageLayout>
  );
}
