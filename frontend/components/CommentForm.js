import React, { useCallback } from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

// components
import { Form, Input, Button } from "antd";

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

function CommentForm({ post }) {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  });

  return (
    <Form onFinish={onSubmitComment}>
      <Input.TextArea
        style={{ position: "relative", margin: 0 }}
        value={commentText}
        onChange={onChangeCommentText}
        rows={4}
      />
      <Button style={{ float: "right" }} type="primary" htmlType="submit">
        삐약
      </Button>
    </Form>
  );
}

export default CommentForm;
