import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

const SideBarWrap = styled.div`
  flex-direction: column;
  display: flex;
  height: 100%;
`

const LogoWrap = styled.div`
  height: 60px;
  padding-left: 24px;
  line-height: 60px;
  font-size: 18px;
  font-weight: 700;
  background-color: #ececec;
`

const NavWrap = styled.div`
  flex-grow: 1;
`

const LogoutWrap = styled.div`
  height: 60px;
  line-height: 60px;
  background-color: #ececec;
  display: flex;
`

const LogoutText = styled.div`
  flex-basis: 60px;
  background-color: #ff8100;
  color: white;
  text-align: center;
  cursor: pointer;
`

const UserName = styled.div`
  padding-left: 10px;
  text-align: center;
  line-height: 60px;
  background-color: #ececec;
  flex-grow: 1;
`

class SideBar extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     selectedKeys: [this.props.history.location.pathname]
  //   }
  // }

  logout = () => {
    window.localStorage.removeItem('secret')
    this.props.history.push('/')
  }
  handleClick = e => {
    console.log(e.key)
    this.props.history.push(e.key)
    this.props.updateSelectedKeys([e.key])
  }
  render() {
    return (
      <SideBarWrap>
        <LogoWrap>后台管理</LogoWrap>
        <NavWrap>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            selectedKeys={this.props.selectedKeys}
            defaultOpenKeys={['orders', 'dishes']}
            mode="inline"
          >
            <SubMenu
              key="orders"
              title={
                <span>
                  <Icon type="file" />
                  <span>订单</span>
                </span>
              }
            >
              <Menu.Item key="/dashboard/orders">未发货</Menu.Item>
              <Menu.Item key="/dashboard/orders/completed">已发货</Menu.Item>
            </SubMenu>
            <SubMenu
              key="dishes"
              title={
                <span>
                  <Icon type="heart" />
                  <span>甜点</span>
                </span>
              }
            >
              <Menu.Item key="/dashboard/dishes">所有</Menu.Item>
              <Menu.Item key="/dashboard/dishes/new">新建</Menu.Item>
            </SubMenu>
          </Menu>
        </NavWrap>
        <LogoutWrap>
          <LogoutText onClick={this.logout}>登出</LogoutText>
          <UserName>Admin</UserName>
        </LogoutWrap>
      </SideBarWrap>
    )
  }
}

export default withRouter(SideBar)
