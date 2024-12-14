"use client"
import StyledComponentsRegistry from "@/lib/registry"
import { notosan } from "./fonts"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { Button, Layout, theme } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Header } from "antd/es/layout/layout"
import { useState } from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import HeaderPanel from "@/component/panel/HeaderPanel"
import SidebarPanel from "@/component/panel/SidebarPanel"
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [sideBarCollapsed, setSidebarCollapsed] = useState<boolean>(false)

    return (
        <html lang="en" className={notosan.className}>
            <body>
                <AntdRegistry>
                    <StyledComponentsRegistry>
                        <Layout>
                           <SidebarPanel sideBarCollapsed={sideBarCollapsed} bgThemeColor={colorBgContainer}/>
                            <Layout>
                                <HeaderPanel
                                    sideBarCollapsed={sideBarCollapsed}
                                    setSidebarCollapsed={setSidebarCollapsed}
                                    bgThemeColor={colorBgContainer} />
                                <Content style={{margin:"24px 16px 16px 16px"}}>
                                    <div style={{ background: colorBgContainer, padding: '24px', minHeight: '500px', borderRadius: borderRadiusLG }}>
                                        {children}
                                    </div>
                                </Content>
                            </Layout>
                        </Layout>
                    </StyledComponentsRegistry>
                </AntdRegistry>
            </body>
        </html>
    )
}