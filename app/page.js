import ImageBanner from "@/components/ImageBanner";
import Products from "@/components/Products";

export async function getProducts() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseURL) {
    console.error("NEXT_PUBLIC_BASE_URL is not set");
    return [];
  }

  const response = await fetch(baseURL + "/api/products");

  if (!response.ok) {
    console.error("API fetch failed:", await response.text());
    return [];
  }

  const products = await response.json();
  return products;
}

export default async function Home(props) {
  const products = await getProducts();

  let planner = null;
  let stickers = [];

  for (let product of products) {
    if (product.name === "Medieval Dragon Month Planner") {
      planner = product;
      continue;
    }

    stickers.push(product);
  }

  return (
    <>
      <ImageBanner />
      <section>
        <Products planner={planner} stickers={stickers} />
      </section>
    </>
  );
}
