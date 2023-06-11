import React, { Component } from 'react'
import AllThree from '../FirstThreeSections/AllThree';

 class FooterProps extends Component {
  render() {
    return (
      <li className="">
        <a className="" href={this.props.linkUrl}>
          {this.props.linkName}
        </a>
      </li>
    );
  }
}
export default FooterProps;