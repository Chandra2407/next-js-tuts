import { comments } from "../data"

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params
    const comment = comments.find((comment) => comment?.id === parseInt(id))
    return Response.json(comment, { status: 200, headers: { 'Content-Type': 'application/json' } })
}

export async function PATCH(request: Request, {params}: {params: {id:string}}){
    const { id } = params
    const body = await request.json()
    const name = body?.name
    const comment = body?.comment
    const index = comments.findIndex((comment) => comment?.id === parseInt(id))
    if(index === -1) {
        return Response.json({ message: "Comment not found" }, { status: 404 })
    }
    comments[index].name = name
    comments[index].comment = comment
    return Response.json(comments[index], { status: 200 })
}

export async function DELETE(request: Request, {params}: {params: {id:string}}){
   const { id } = params
   const index = comments.findIndex((comment) => comment?.id === parseInt(id))
   if(index === -1) {
       return Response.json({ message: "Comment not found" }, { status: 404 })
   }
   const deletedComment = comments[index]
   comments.splice(index, 1)
   return Response.json(deletedComment, { status: 200, headers: { 'Content-Type': 'application/json' } })
}