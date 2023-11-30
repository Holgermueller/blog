import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

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
      <h2 className="section-header">This is the Archives page</h2>

      <section></section>
      <Footer />
    </div>
  );
}
