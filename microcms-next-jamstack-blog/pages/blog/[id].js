import { client } from "libs/client";

export async function getStaticProps(context) {
  const id = context.params.id;
  const blog = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const blog = await client.get({ endpoint: "blog" });
  const paths = blog.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: blog.body,
        }}
      />
    </main>
  );
}
