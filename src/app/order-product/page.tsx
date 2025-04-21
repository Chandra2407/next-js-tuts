"use client";

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
    const router = useRouter();
    const handleClick = () => {
        // Simulate an order placement
        console.log("Order placed successfully!");
        router.push("/"); // Redirect to the success page
    }
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}