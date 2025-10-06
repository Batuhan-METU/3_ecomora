"use client";

import { useProducts } from "@/context/ProductContext";
import Link from "next/link";

export default function Cart() {
  const { cart } = useProducts();
  const numProducts = Object.keys(cart).reduce((acc, curr, currIndex) => {
    const numProduct = cart[curr].quantity;
    const sum = acc + parseInt(numProduct);
    return sum;
  }, 0);

  return (
    <div>
      <Link className="unstyled-button" href={"/cart"}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <i className="fa-solid fa-cart-plus fa-2x"></i>
          {numProducts > 0 && (
            <span className="cart-num">{numProducts}</span>
          )}{" "}
        </div>
      </Link>
    </div>
  );
}
