import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Header } from "antd/es/layout/layout"
import styled from "styled-components"
const HeaderContainer = styled(Header)`
    padding: 0;
`
const CollapseButton = styled(Button)`
    font-size: 16px;
    width: 64px;
    height: 64px;
`
interface HeaderPanelProperties {
    sideBarCollapsed: boolean
    setSidebarCollapsed: Function
    bgThemeColor: string
}
const HeaderPanel = ({ sideBarCollapsed, setSidebarCollapsed, bgThemeColor }: HeaderPanelProperties) => {
    const doOnCollapseClick = ()=>{
        setSidebarCollapsed(!sideBarCollapsed)
    }
    const displayCollapseIcon = ()=>{
        if(sideBarCollapsed){
            return <MenuUnfoldOutlined />
        }else{
            return <MenuFoldOutlined />
        }
    }
    return <HeaderContainer style={{ background: bgThemeColor }}>
        <CollapseButton type="text" icon={displayCollapseIcon()} onClick={doOnCollapseClick} />
    </HeaderContainer>
}
export default HeaderPanel