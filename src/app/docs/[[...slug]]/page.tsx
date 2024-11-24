type Params = Promise<{ slug: string[] }>
export default async function Docs({ params }: { params: Params }) {
    const { slug } = await params;
        if (slug?.length >= 3) {
            return (
                <h1>This is WAAAY tooo deep. Quit please
                </h1>
            );
        } else if  (slug?.length === 2) {
            return (
                <h1>This is getting very deep <br />
                    Viewing docs for {slug[0]}, inside {slug[1]}
                </h1>   
            );
        } else if (slug?.length === 1){
            return (
                <h1>
                    Viewing docs for {slug[0]}, you COULD go deeper you know ? 
                </h1>
            )
        } else {
            return <h1>Questa è la pagina della documentazione - 1° Livello</h1>
        }
}
