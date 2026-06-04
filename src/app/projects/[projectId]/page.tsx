import Test from "./test";
import Pasta from "./pasta";

type Params = Promise<{ projectId: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { projectId } = await params;

  switch (projectId) {
    case "test":
      return <Test />;
    case "pasta":
      return <Pasta />;
    default:
      return <div>Project "{projectId}" not found</div>;
  }
}