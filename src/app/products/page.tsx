import Link from "next/link"

export default function ProductsPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Products</h1>
      <p>This is the products page.</p>
      <ul>
        <li><Link href="/products/1">Product 1</Link></li>
        <li><Link href="/products/2">Product 2</Link></li>
        <li><Link href="/products/3" replace>Product 3</Link></li>
      </ul>
    </div>
  );
}