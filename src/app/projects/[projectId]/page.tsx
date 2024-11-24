type Params = Promise<{ projectId: string[] }>
export default async function ProjectDetail ({ params }: { params: Params }) {
    const { projectId } = await params;

    return <h1>Details about project {projectId}</h1>
}