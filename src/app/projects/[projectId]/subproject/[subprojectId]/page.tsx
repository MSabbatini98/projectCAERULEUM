type Params = Promise<{ projectId: string[], subprojectId: string[] }>
export default async function ReviewDetail ({ params }: { params: Params }) {
    const { projectId, subprojectId } = await params;

    return <h1>Subproject {subprojectId} for project  {projectId} </h1>
}