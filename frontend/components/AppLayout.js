import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

// components
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { Menu, Input, Row, Col } from "antd";

// styles
import styled from "styled-components";

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function AppLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://hogni.tistory.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            빠른손김참치
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default AppLayout;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
