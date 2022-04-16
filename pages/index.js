import HeroWelcome from "../components/HeroWelcome";
import Services from "../components/Services";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import { getAllPostsForHome } from "../lib/prismic-api";
import MainLayout from "../components/MainLayout";

export default function IndexPage({ homePosts }) {
  return (
    <MainLayout>
      <HeroWelcome />
      <Services />
      <Features />
      <Steps />
      <Contact />
      <Blog posts={homePosts} />
    </MainLayout>
  );
}

export async function getStaticProps() {
  const homePosts = await getAllPostsForHome();
  return {
    props: { homePosts },
    revalidate: 15
  };
}
