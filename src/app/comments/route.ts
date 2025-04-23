import { NextRequest } from "next/server";
import { comments } from "./data";
import { headers } from "next/headers";


export async function GET(request: NextRequest) {
    const { searchParams } = request?.nextUrl
    const query = searchParams.get('query')

    const filteredComments = query ? comments.filter((comment) => comment?.name?.toLowerCase()?.includes(query?.toLowerCase()) || comment?.comment?.toLowerCase()?.includes(query?.toLowerCase())) : comments
    let headerList = await headers()
    console.log(headerList?.get("test"),"test")
    return Response.json(filteredComments)
}

export async function POST(request: Request) {
  let data = await request.json()
  let newComment = {
    id: comments.length + 1,
    name: data?.name,
    comment: data?.comment
  }
  comments.push(newComment)
  return Response.json(comments, {status: 201, headers: {'Content-Type': 'application/json'}})
}