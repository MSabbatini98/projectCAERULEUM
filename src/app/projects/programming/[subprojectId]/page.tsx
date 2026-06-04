import BasicCalculator from "./basic-calculator";

export default async function SubprojectPage({ params }: any) {
  const { subprojectId } = await params;

  // Conditionally render based on subprojectId
  switch (subprojectId) {
    case "basic-calculator":
      return <BasicCalculator />;
    default:
      return <div>Subproject "{subprojectId}" not found</div>;
  }
}
