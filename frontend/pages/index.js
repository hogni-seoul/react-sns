import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { shallowEqual, useSelector } from "react-redux";

// components
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

function Home() {
  const { isLoggedIn } = useSelector((state) => state.user, shallowEqual);
  const { mainPosts } = useSelector((state) => state.post, shallowEqual);

  return (
    <>
      <Head>
        <title>React SNS</title>
      </Head>
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AppLayout>
    </>
  );
}
export default Home;
