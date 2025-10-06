import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="pageSuccess-container">
      <h2 className="text-large">Thank you for your purchase 🎉</h2>
      <img
        className="full-cart-img"
        src="/low_res/fullCart.png"
        alt="full-cart"
      />
      <Link href={"/"}>
        <button id="full-cart-button">Continue &rarr;</button>
      </Link>
    </div>
  );
}
