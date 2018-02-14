import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import styled from 'styled-components'
import Settings from '../../Settings/Settings'

const FormItem = Form.Item

const StyledButton = styled(Button)`
  width: 100%;
`

class NormalLoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (
          values.userName !== Settings.user.userName ||
          values.password !== Settings.user.userName
        ) {
          return message.error('用户名或密码错误！')
        }
        this.props.onLogin()
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <StyledButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </StyledButton>
        </FormItem>
      </Form>
    )
  }
}

const LoginForm = Form.create()(NormalLoginForm)

export default LoginForm
