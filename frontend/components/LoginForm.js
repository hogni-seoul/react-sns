import React, { useCallback } from "react";
import Link from "next/link";
import useInput from "../hooks/useInput";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";

// components
import { Form, Input, Button } from "antd";

// styles
import styled from "styled-components";

function LoginForm() {
  const dispatch = useDispatch();
  const { isLogginIn } = useSelector((state) => state.user, shallowEqual);

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={isLogginIn}>
          로그인
        </Button>
        <Link href="signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
}

export default LoginForm;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;
