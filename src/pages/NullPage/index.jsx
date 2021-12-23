import React, { Component } from 'react'
import './index.scss'
import nullImg from '../../assets/images/暂无内容02.png'
export default class Nullpage extends Component {
  render() {
    return (
      <div className="page">
        <div className="text">
          <img src={nullImg} alt="" />
          <h1>当前页面正在构建中，敬请期待!</h1>
        </div>
      </div>
    )
  }
}
