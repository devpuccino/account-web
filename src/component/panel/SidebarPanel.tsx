import { AccountBookOutlined } from "@ant-design/icons"
import { Col, Menu, Row } from "antd"
import Sider from "antd/es/layout/Sider"
import { ItemType } from "antd/es/menu/interface"
import Link from "next/link"
import styled from "styled-components"

const LogoPanel = styled.div`
    height: 64px;
    padding: 5px 5px 5px 20px;
    line-height: 64px;
    text-transform: uppercase;
    
`
interface SidebarPanelProperties {
    sideBarCollapsed: boolean
    bgThemeColor: string
}
const SidebarPanel = ({ sideBarCollapsed, bgThemeColor }: SidebarPanelProperties) => {
    const menuItems: ItemType[] = [
        { key: "1", icon: <AccountBookOutlined />, label: <Link href="/wallet">Wallet</Link> }
    ]
    return  <Sider breakpoint="xs"
        trigger={null}
        collapsed={sideBarCollapsed}
        collapsible={true}
        style={{ background: bgThemeColor }}>
        <LogoPanel>
            account web
        </LogoPanel>
        <Menu
            items={menuItems}
        />
    </Sider>
}
export default SidebarPanel
