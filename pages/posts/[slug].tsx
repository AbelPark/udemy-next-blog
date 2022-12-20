import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

export default function PostDetailPage(props: any) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </>
  );
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs: any = postFilenames.map((filename: any) =>
    filename.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug: any) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, // 마크다운이 업데이트 될 때마다 최신 데이터 가져옴(10분)
  };
}
