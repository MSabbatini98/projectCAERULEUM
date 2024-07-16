export default function ProjectDetail ({
    params,
}: {
    params: {projectId : string};
}) {
    return <h1>Details about project {params.projectId}</h1>
}