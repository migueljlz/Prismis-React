import { RichText } from "prismic-reactjs";

const PostBody = ({ content }) => {
  if (content) {
    const blogContent = content.map((slice, index) => {
      // Text Slice
      if (slice.type === "text") {
        return <RichText key={index} render={slice.primary.text} />;
      } else if (slice.type === "quote") {
        return (
          <div
            key={index}
            className="leading-tight text-right my-10 font-serif md:ml-20 ml-10"
          >
            <blockquote className="text-gray-500 text-2xl">
              ❝{slice.primary?.quote[0]?.text}❞
            </blockquote>
            <small className="block my-4 text-gray-500">
              ‐ {slice.primary?.name_of_the_author[0]?.text}
            </small>
            <div className="border-b-2 border-indigo-300 w-1/4 ml-auto"></div>
          </div>
        );
      }
      return null;
    });

    return <div>{blogContent}</div>;
  }
  return null;
};

export default PostBody;
