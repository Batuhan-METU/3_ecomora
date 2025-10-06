"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error(props) {
  const { error, reset } = props;

  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="page404-container">
      <h3>Something went wrong :(</h3>
      <div>
        <button
          style={{ backgroundColor: "firebrick", color: "white" }}
          onClick={reset}
        >
          Reset
        </button>
        <Link href={"/"}>
          <button style={{ backgroundColor: "firebrick", color: "white" }}>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
