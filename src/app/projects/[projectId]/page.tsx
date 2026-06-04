export default function ProjectPage({
    params,
  }: {
    params: { projectId: string };
  }) {
    return <h1>Project: {params.projectId}</h1>;
  }