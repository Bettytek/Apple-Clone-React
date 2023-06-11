import React, { Component } from 'react'

export class HeaderLinks extends Component {
  render() {
    return (
          <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.Url} >{this.props.LName }</a></li>
    )
  }
}

export default HeaderLinks