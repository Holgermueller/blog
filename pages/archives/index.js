import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Link from "next/link";
import Date from "@/components/date";

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
      <h2 className="section-header">Archives</h2>
      <p className="sub-header">Check out some of my older posts</p>

      <section>
        <ul>
          {allPostsData.map((post) => (
            <div key={post.id} className="list-card">
              <li>
                <Link
                  href={{
                    pathname: "blog/[id]",
                    query: {
                      id: post.id,
                    },
                  }}
                >
                  <h3>{post.title}</h3>
                </Link>
                <br />
                <Date dateString={post.date} />

                <p>{post.preview}</p>
              </li>
            </div>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
}
