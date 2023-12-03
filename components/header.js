import { FaInstagram } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaEtsy } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <header>
      <div className="header-socials">
        <Link href="https://www.instagram.com/holgermmueller/" target="_blank">
          <FaInstagram />
        </Link>

        <Link href="https://www.behance.net/holgermueller1" target="_blank">
          <FaBehance />
        </Link>

        <Link href="https://ko-fi.com/holgermuellerart" target="_blank">
          <FaCoffee />
        </Link>

        <Link
          href="https://www.etsy.com/shop/HolgerMuellerArt?ref=simple-shop-header-name&listing_id=1449453579"
          target="_blank"
        >
          <FaEtsy />
        </Link>

        <Link href="https://www.teepublic.com/user/hmshirts" target="_blank">
          <FaTshirt />
        </Link>

        <Link
          href="https://www.tumblr.com/blog/holgermuellerartist"
          target="_blank"
        >
          <FaTumblr />
        </Link>

        <Link href="https://www.deviantart.com/holgermueller" target="_blank">
          <FaDeviantart />
        </Link>
      </div>
      <h1>My Blog</h1>
    </header>
  );
}
