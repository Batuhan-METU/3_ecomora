"use client";

import { useProducts } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const router = useRouter();
  const { cart, handleProduct } = useProducts();

  async function createCheckout() {
    try {
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      const lineItems = Object.keys(cart).map((item, itemIndex) => {
        return {
          price: item,
          quantity: cart[item].quantity,
        };
      });

      const response = await fetch(baseURL + "/api/checkout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        router.push(data.url);
      }
    } catch (err) {
      console.log("Error creating checkout", err.message);
    }
  }

  return (
    <section className="cart-section">
      <div className="cart-noItem">
        <h2>Your Cart</h2>
        {Object.keys(cart).length === 0 && (
          <div className="cart-noItem-info">
            <p>You have no items in your cart ‼</p>
            <img
              className="img-cart"
              src="/low_res/emptyCart.png"
              alt="empty-cart"
            />
          </div>
        )}
      </div>

      <div className="cart-container">
        {Object.keys(cart).map((item, itemIndex) => {
          const itemData = cart[item];
          const itemQuantity = itemData?.quantity;

          const imgName =
            itemData.name === "Medieval Dragon Month Planner"
              ? "planner"
              : itemData.name.replaceAll(" ", "_");
          const imgUrl = "low_res/" + imgName + ".jpeg";

          return (
            <div key={itemIndex} className="cart-item">
              <img src={imgUrl} alt={imgName + "-im"} />
              <div className="cart-item-info">
                <h3>{itemData.name}</h3>
                <p>
                  {itemData.description.slice(0, 100)}
                  {itemData.description.length > 100 ? "..." : ""}
                </p>
                <h4>${itemData.prices[0].unit_amount / 100}</h4>
                <div className="quantity-container">
                  <p>
                    <strong>Quantity</strong>
                  </p>
                  <input
                    type="number"
                    value={itemQuantity}
                    placeholder="0"
                    onChange={(e) => {
                      const newValue = e.target.value;

                      handleProduct(
                        itemData.default_price,
                        newValue,
                        itemData,
                        true
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout-container">
        <Link href={"/"}>
          <button className="shopping-stickers">
            &larr; Continue Shopping
          </button>
        </Link>
        <button className="shopping-stickers" onClick={createCheckout}>
          Checkout &rarr;
        </button>
      </div>
    </section>
  );
}
