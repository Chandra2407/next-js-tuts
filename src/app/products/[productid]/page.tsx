import { Metadata } from "next";

type Props = {
  params: { productid: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const productid = params.productid;
  return {
    title: `Product ${productid}`,
    description: `This is the product page for product ${productid}.`,
  };
};

export default function Product({ params }: Props) {
  const productid = params.productid;
  return (
    <div>
      <h1>Product {productid}</h1>
      <p>This is the product page for product {productid}.</p>
    </div>
  );
}