import Test from "./test";
import Pasta from "./pasta";

export default async function ProjectPage({ params }: any) {
  const { projectId } = await params;

  // Conditionally render based on projectId
  switch (projectId) {
    case "test":
      return <Test />;

    case "pasta":
      return <Pasta />;
      
    default:
      return <div>Project "{projectId}" not found</div>;
  }
}