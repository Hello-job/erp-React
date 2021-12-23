import React, { Component } from 'react'
import { InlineLoading } from 'zent';
export default class Loading extends Component {
  render() {
    return (
      <div>
        <InlineLoading
          loading
          icon="circle"
          iconText="加载中"
          textPosition="right"
        />
      </div>
    )
  }
}
