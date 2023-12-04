import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import Date from "@/components/date";
import Image from "next/image";
import ArchivesPic from "../../public/images/archives.jpg";

import { getSortedPostsData } from "@/lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Archives({ allPostsData }) {
  return (
    <div>
      <Header />
      <Nav />
      <section>
        <div className="archives-header">
          {/* Image by Pixabay via Pexels */}
          <Image
            src={ArchivesPic}
            alt="phones-on-table"
            placeholder="blur"
            style={{
              width: "100%",
              height: "50%",
            }}
          />
          <h2 className="section-header hero-header">Archives</h2>
        </div>
      </section>

      <section>
        <p className="sub-header">Check out some of my older posts</p>

        <ul>
          {allPostsData.map((post) => (
            <div key={post.id} className="list-card">
              <Link
                href={{
                  pathname: "blog/[id]",
                  query: {
                    id: post.id,
                  },
                }}
              >
                <li>
                  <h3>{post.title}</h3>

                  <br />
                  <Date dateString={post.date} />

                  <p>{post.preview}</p>
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}
