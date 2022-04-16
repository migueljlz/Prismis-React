import { getPost, getAllPostsSlugs } from "../../lib/prismic-api";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import MainLayout from "../../components/MainLayout";
import PostBody from "../../components/PostBody";

const Post = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <MainLayout>
        <div className="max-w-2xl mx-auto px-6">
          <h1 className="md:text-6xl text-4xl font-black text-center mb-4 leading-none">
            {post.title[0].text}
          </h1>
          <div className="my-6 pb-48 relative">
            <img
              className="w-full h-full object-cover absolute"
              src={post.coverimage.url}
              alt={post.coverimage.alt}
            ></img>
          </div>
          <h2 className="md:text-2xl text-xl text-gray-600 italic text-center mb-16">
            {post.excerpt}
          </h2>
          <div className="text-xl">
            <PostBody content={post.body} />
          </div>
        </div>
      </MainLayout>
    );
  }
};

export async function getStaticProps({ params }) {
  const data = await getPost(params.uid);
  return {
    props: { post: data?.post ?? null }
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsSlugs();

  return {
    fallback: true,
    paths: allPosts.map(({ node }) => `/posts/${node._meta.uid}`)
  };
}

export default Post;
