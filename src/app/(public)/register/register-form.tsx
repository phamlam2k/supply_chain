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
import { register } from "@/apiRequests/auth";
import { useRouter } from "next/navigation";
import { RegisterBodyType } from "@/types/auth";

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const onFinish: FormProps<RegisterBodyType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    try {
      const result = await register(values);
      console.log(result);
    } catch (error) {
      console.log(error);
    }

    router.push("/home");
  };

  const onFinishFailed: FormProps<RegisterBodyType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="basic"
        style={{ width: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<RegisterBodyType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<RegisterBodyType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<RegisterBodyType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Typography.Link href="/login">Back to Login</Typography.Link>
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

export default RegisterForm;
