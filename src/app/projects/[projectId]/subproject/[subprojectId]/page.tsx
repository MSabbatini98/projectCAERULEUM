export default function ReviewDetail({
    params,
}: {
    params: {
        projectId : string;
        subprojectId : string;
    };
}) {
    return <h1>Subproject {params.subprojectId} for project  {params.projectId} </h1>
}