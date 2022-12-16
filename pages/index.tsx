import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

export default function HomePage() {
  const DUMMY_POSTS = [
    {
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs.jpg",
      excerpt: "NextJS is a the React framework for production",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs.jpg",
      excerpt: "NextJS is a the React framework for production",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs2",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs.jpg",
      excerpt: "NextJS is a the React framework for production",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs3",
    },
    {
      title: "Getting Started with NextJS",
      image: "getting-started-with-nextjs.jpg",
      excerpt: "NextJS is a the React framework for production",
      date: "2022-02-10",
      slug: "getting-started-with-nextjs4",
    },
  ];

  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
