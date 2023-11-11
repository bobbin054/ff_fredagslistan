import Link from "next/link";
import React from "react";

export default function LeftNav() {
  return (
    <nav className="order-first sm:w-32 flex pl-2">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/extra"}>Extra</Link>
        </li>
      </ul>
    </nav>
  );
}
