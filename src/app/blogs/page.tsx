import { resolve } from "path"

export default async function Blogs(){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("delayed")
        }, 5000)
    })
    return (
        <div>
            <h1>Blogs</h1>
            <p>Welcome to the blogs page!</p>
        </div>
    )
}