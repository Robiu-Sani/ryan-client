"use client";

import CategoryProduct from "@/app/component/Category/CategoryProduct";

const page = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/product/${slug}`,
    {
      cache: "no-store",
    }
  );

  const products = await res.json();
  console.log("products is searching", products);

  if (!res.ok) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>We couldn`t find the product you`re looking for.</p>
      </div>
    );
  }

  return (
    <div>
      <CategoryProduct slug={slug} products={products} />
    </div>
  );
};

export default page;
