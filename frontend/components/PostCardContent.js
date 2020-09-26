import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

function PostCardContent({ postData }) {
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((text, index) => {
        if (text.match(/(#[^\s#]+)/g)) {
          return (
            <Link key={index} href={`/hashtag/${text.slice(1)}`}>
              <a>{text}</a>
            </Link>
          );
        }
        return text;
      })}
    </div>
  );
}

export default PostCardContent;
