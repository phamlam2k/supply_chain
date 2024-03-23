"use client";
import React from "react";
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  Space,
  Typography,
} from "antd";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Form
        name="basic"
        style={{ width: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Typography.Link href="/register">Register Now</Typography.Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
