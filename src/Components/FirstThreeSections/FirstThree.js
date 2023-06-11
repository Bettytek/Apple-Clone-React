import React, { Component } from 'react'

export default class FirstThree extends Component {
  render() {
    return (
      <div>
 <section className={this.props.className1}>
      <div className={this.props.className2}>
    
          <div className={this.props.new}>
          {this.props.new1}
			</div>
      <div className={this.props.title}> {this.props.title1}
            </div> 
            <div className={this.props.description}>
      {this.props.descriptionspeed}
    </div>
        <div className={this.props.grey}>
        {this.props.price}
        </div>
      <div className={this.props.learn_order}>
				<ul>
           <li><a href={this.props.learnMoreUrl}>{this.props.learnMore}
              </a></li>
              <li><a href={this.props.orderUrl}>{this.props.order}
              </a></li>
            </ul> 
            </div>
            <div className={this.props.ipadpro}>
              
              <div className={this.props.availableClass}>{this.props.availableText1}</div>
              
              <div className={this.props.availableDiv}>{this.props.availableText2}
            </div>
            </div>
      
        </div>
      </section>
      

      </div>
    )
  }
}
