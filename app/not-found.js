import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page404-container">
      <h2>Page not found :(</h2>
      <p className="text-large">404</p>

      <Link href={"/"}>
        <button style={{ backgroundColor: "firebrick", color: "white" }}>
          Home
        </button>
      </Link>
    </div>
  );
}
