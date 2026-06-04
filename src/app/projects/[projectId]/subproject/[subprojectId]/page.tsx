export default function SubprojectPage({
    params,
  }: {
    params: { projectId: string; subprojectId: string };
  }) {
    return (
      <div>
        <h1>{params.projectId}</h1>
        <h2>{params.subprojectId}</h2>
      </div>
    );
  }