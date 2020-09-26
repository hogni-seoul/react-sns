import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

// components
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { Menu, Input, Row, Col } from "antd";

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function AppLayout({ children }) {
  const { isLoggedIn } = useSelector((state) => state.user, shallowEqual);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Witter</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
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
