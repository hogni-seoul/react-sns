import React, { useState, useCallback, useRef } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { addPost } from "../reducers/post";

// components
import { Form, Input, Button } from "antd";

function PostForm() {
  const { imagePaths } = useSelector((state) => state.post, shallowEqual);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const imageInput = useRef();

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  });
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  });

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="무슨 생각을 하고 계시나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((path) => (
          <div key={path} style={{ display: "inline-block" }}>
            <img src={path} alt={path} style={{ width: "200px" }} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
}

export default PostForm;
