'use client'

import React, { useState } from 'react'
import {
  Layout,
  Menu,
  Button,
  ConfigProvider,
  Avatar,
  Dropdown,
  MenuProps,
  theme,
  Card,
  Flex,
  Space
} from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const { Header, Sider, Content } = Layout

type IProps = {
  children: React.ReactNode
}

const PrivateLayout: React.FC<IProps> = ({ children }: IProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  const router = useRouter()

  const items: MenuProps['items'] = [
    {
      label: 'Profile',
      key: '0'
    },
    {
      type: 'divider'
    },
    {
      label: 'Log out',
      key: '3',
      onClick: () => {
        router.push('/login')
      }
    }
  ]

  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          // somethings here
        },
        //switch dark/default theme
        algorithm: theme.defaultAlgorithm,
        components: {
          Button: {
            // somethings here
          }
        }
      }}
    >
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken) => {
            console.log(broken)
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
          theme='light'
        >
          <Flex
            gap='middle'
            vertical
            justify='space-between'
            style={{ height: '100%' }}
          >
            <div>
              <Image width={200} height={64} src='/amazon.jpg' alt='logo' />
              <div>
                <Menu
                  style={{
                    paddingTop: 16,
                    flexShrink: 0
                  }}
                  // theme="dark"
                  mode='inline'
                  defaultSelectedKeys={['1']}
                  items={[
                    {
                      key: '1',
                      icon: <div />,
                      label: <Link href={'/home'}>Home</Link>
                    },
                    {
                      key: '2',
                      icon: <div />,
                      label: <Link href={'/blog'}>Blog</Link>
                    }
                  ]}
                />
              </div>
            </div>

            <Card size='small'>
              <Flex align='center' justify='space-between' gap='small'>
                <Space>
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<div />}
                  />

                  <div>User 1</div>
                </Space>
                <Dropdown menu={{ items }} trigger={['click']}>
                  <div />
                </Dropdown>
              </Flex>
            </Card>
          </Flex>
        </Sider>

        <Layout>
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              background: colorBgContainer,
              padding: 0
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: 1,
                padding: 16
              }}
            >
              <h3>Appota Chatbot</h3>

              <Button type='primary'>Tạo bot</Button>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              height: '100%',
              overflowY: 'auto',
              //   background: colorBgContainer,
              borderRadius: borderRadiusLG
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default PrivateLayout
