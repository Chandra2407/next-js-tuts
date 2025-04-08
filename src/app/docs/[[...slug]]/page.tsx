export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
    const {slug} = await params
    console.log(slug)
    if(slug?.length == 3){
        return <h1>viewing concept {slug[2]} of {slug[0]} {slug[1]}</h1>
    }
    if(slug?.length == 2){
        return <h1>viewing {slug[0]} {slug[1]}</h1>
    }
    if(slug?.length == 1){
        return <h1>viewing {slug[0]}</h1>
    }
    return <h1>Docs Homepage</h1>
}