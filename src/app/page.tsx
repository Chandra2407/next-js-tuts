import Link from "next/link"


export default function page() {
  return (
    <>
      <h1>Welcome home</h1>
      <Link href="/docs">docs</Link>
      <Link href="/products">products</Link>
    </>
  )
}
