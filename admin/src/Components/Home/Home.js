import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import styled from 'styled-components'
import Settings from '../../Settings/Settings'

const FormWrap = styled.div`
  border: 1px solid rgb(242, 242, 242);
  width: 350px;
  padding: 30px;
  margin: 10px auto;
`

const SystemIntro = styled.p`
  width: 350px;
  padding: 8px;
  font-size: 20px;
  text-align: center;
  margin: 80px auto 0 auto;
`

class Home extends Component {
  login = () => {
    const secret = Settings.user.secret
    window.localStorage.setItem('secret', secret)
    this.props.history.push('/dashboard/dishes')
  }

  render() {
    return (
      <div className="home">
        <SystemIntro>二狗甜品店后台管理系统</SystemIntro>
        <FormWrap>
          <LoginForm onLogin={this.login} />
        </FormWrap>
      </div>
    )
  }
}

export default Home
