import Link from "next/link";

const Blog = ({ posts }) => (
  <section id="blog" className="text-gray-700 body-font bg-accent">
    <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-accent tracking-widest font-medium title-font mb-1 uppercase">
          Blog
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white uppercase font-black">
          ¿Buscas Ayuda Rápida?
        </h1>
      </div>
      <div className="flex flex-wrap -m-4">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post._meta.uid} className="p-4 md:w-1/3">
              <Link href={`/posts/${post._meta.uid}`}>
                <a>
                  <article className="h-full border-2 border-gray-200 rounded-lg overflow-hidden bg-white shadow-lg">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={post.coverimage.url}
                      alt={post.coverimage.alt}
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.title[0].text}
                      </h1>
                      <p className="leading-relaxed mb-3">{post.excerpt}</p>
                    </div>
                  </article>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default Blog;
