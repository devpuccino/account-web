"use client"
import React from 'react';
import { notosan } from "./fonts"
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Col, Layout, Menu, Row, theme } from "antd"
import "./globals.css"
import { Content, Footer, Header } from "antd/es/layout/layout"
import type Entity from '@ant-design/cssinjs/es/Cache';
import { createCache } from '@ant-design/cssinjs';
import StyledComponentsRegistry from '@/lib/registry';
import Sider from 'antd/es/layout/Sider';
import { FolderOutlined, HomeOutlined, WalletOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const cache = React.useMemo<Entity>(() => createCache(), []);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const siderStyle: React.CSSProperties = {
        height: '100vh',
        position: 'sticky',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
    };
    const items = [
        {
            key: "menu--home",
            icon: <HomeOutlined />,
            label: <Link href="/">Home</Link>
        },
        {
            key: "menu--wallet",
            icon: <WalletOutlined />,
            label: <Link href="/wallet">Wallets</Link>,
        },
        {
            key: "menu--category",
            icon: <FolderOutlined />,
            label: <Link href="/category">Categories</Link>
        }
    ]
    return (
        <html lang="en" className={notosan.className}>
            <body>
                <AntdRegistry>
                    <StyledComponentsRegistry>
                        <Layout>
                            <Sider breakpoint="lg" collapsedWidth="0" style={siderStyle}>
                                <Menu mode="inline" inlineCollapsed={false} theme='dark' items={items} />
                            </Sider>
                            <Layout>
                                <Header style={{
                                    height: "64px", background: colorBgContainer, position: 'sticky',
                                    top: 0,
                                    zIndex: 1,
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>Header</Header>
                                <Content style={{
                                    margin: '24px 16px 0', minHeight: "calc(100vh - (64px + 64px + 24px))", background: colorBgContainer,
                                    borderRadius: borderRadiusLG, overflow: 'initial'
                                }}>
                                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer,borderRadius: borderRadiusLG}}
                                    >
                                        {children}
                                    </div>
                                </Content>
                                <Footer style={{ textAlign: 'center', height: "64px" }}>
                                    Account Web ©{new Date().getFullYear()} Created by DevPuccino
                                </Footer>
                            </Layout>
                        </Layout>
                    </StyledComponentsRegistry>
                </AntdRegistry>
            </body>
        </html>
    );
}