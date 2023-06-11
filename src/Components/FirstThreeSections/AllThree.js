import React, { Component } from 'react'
import FirstThree from './FirstThree'
 class AllThree extends Component {
  render() {
    return (
      <div>    <section class="alert-section top-50">
      <div class="container">
        <div class="alert-title">
          We’re open for you.
        </div>
        <div class="alert-text">
          Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br/>
          For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>.
        </div>
      </div>
    </section>
              <FirstThree 
                  className1="first-hightlight-wrapper"
                  className2="container"
                new="new-alert"
                new1="New"
                title="title-wraper bold black"
                title1="iPad Pro"
                learn_order="links-wrapper"
            learnMore='Learn More'
              learnMoreUrl="/learn"
              order="order"
            orderUrl="/order"
            ipadpro ="ipod-caption row"
            availableClass="ol-sm-12 col-md-6 text-md-right"
            availableText1="iPad Pro available starting 3.25"
            availableDiv="col-sm-12 col-md-6 text-md-left"
            availableText2="Magic Keyboard coming in May"
            />
              <FirstThree
                  className1="second-hightlight-wrapper"
                  className2="container"
                new="new-alert"
                new1="New"
                title="title-wraper bold black"
                description="description-wrapper black"
            title1="MacBook Air"
            descriptionspeed="Twice the speed. Twice the storage."
            grey='price-wrapper grey'
            price='From $999.'
            learn_order="links-wrapper"
            learnMore='Learn More'
              learnMoreUrl="/learn"
              order="Buy"  orderUrl="/order"
            />
              <FirstThree
                  className1="third-hightlight-wrapper"
                  className2="container"
                title="title-wraper bold"
            title1="iPhone 11 Pro "
            description="description-wrapper"
            grey="price-wrapper"
            price="From $24.95/mo. or $599 with tradein."
            ipadpro="ipod-caption row"
            learn_order="links-wrapper"
            learnMore='Learn More'
              learnMoreUrl="/learn"
              order="Buy"
            orderUrl="/order"
        />
      </div>
    )
  }
}

export default AllThree