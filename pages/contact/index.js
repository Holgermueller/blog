import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaDeviantart } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaEtsy } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import ConnectPic from "../../public/images/connect.jpg";

export default function Contact() {
  return (
    <div>
      <Header />
      <Nav />

      <section>
        <div className="connect-header">
          {/* Image by Alex Andrews via Pexels*/}
          <Image
            src={ConnectPic}
            alt="phones-on-table"
            placeholder="blur"
            style={{
              width: "100%",
              height: "50%",
            }}
          />
          <h2 className="section-header hero-header">Contact</h2>
        </div>
      </section>

      <section>
        <h3 className="sub-header">
          You can connect with me on these socials:
        </h3>
        <div className="link-container">
          <Link
            href="https://www.instagram.com/holgermmueller/"
            target="_blank"
          >
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

        <div className="mail-section">
          <h3 className="sub-header">Or you can shoot me a quick email:</h3>
          <div className="mail-container">
            <Link target="_blank" href="mailto:9jholger@gmail.com">
              <MdEmail />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
