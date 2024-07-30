export default function Docs({
    params,
    } : {
        params : {
            slug : string[];
        };
    }) {
        if (params.slug?.length >= 3) {
            return (
                <h1>This is WAAAY tooo deep. Quit please
                </h1>   
            );
        } else if  (params.slug?.length === 2) {
            return (
                <h1>This is getting very deep <br />
                    Viewing docs for {params.slug[0]}, inside {params.slug[1]}
                </h1>   
            );
        } else if (params.slug?.length === 1){
            return (
                <h1>
                    Viewing docs for {params.slug[0]}, you COULD go deeper you know ? 
                </h1>
            )
        } else {
            return <h1>This is the documentation page, first level baby</h1>
        }
}