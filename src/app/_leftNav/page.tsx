import React from "react";
import Link from "next/link";

export default function LeftNav() {
  return (
    <nav className="order-first flex pl-2 sm:w-32">
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
