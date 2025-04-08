export default async function Product({params} : {params: Promise<{productid: string}>}) {
    // The params object is a promise, so we need to await it
    const product = await params;
    const productid = product.productid;
  return (
    <div>
      <h1>Product {productid}</h1>
      <p>This is the product page for product {productid}.</p>
    </div>
  );
}