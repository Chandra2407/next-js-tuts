import { notFound, redirect } from "next/navigation"

export default async function Review({ params }: { params: Promise<{ productid: string, reviewid: string }> }) {
    const { productid, reviewid } = await params
    if(parseInt(reviewid) > 500){
        redirect(`/products/${productid}/reviews`)
    }
    return (
        <div>
            <h1>Review {reviewid} of {productid}</h1>
        </div>
    )

}