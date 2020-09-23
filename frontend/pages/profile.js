import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

// components
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

function Profile() {
  const followerList = [
    { nickname: "hogni" },
    { nickname: "tuna" },
    { nickname: "kim" },
  ];
  const followingList = [
    { nickname: "hogni" },
    { nickname: "tuna" },
    { nickname: "kim" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | React SNS</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
}

export default Profile;
