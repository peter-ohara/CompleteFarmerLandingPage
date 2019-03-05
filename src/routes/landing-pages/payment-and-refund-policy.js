import React, { Component, Fragment } from "react";
import {
  Container, Row
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionNewsletter from "Components/LandingPage/SectionNewsletter";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import {landingPageMobileMenuToggle,landingPageMobileMenuClose} from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen} = landingPage;
  return { isMobileMenuOpen };
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMobileMenuToggle(){
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu(){
    this.props.landingPageMobileMenuClose()
    return true;
  }

  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
  }

  onMenuClick(ref, event) {
    event.preventDefault();
    let scroller;
    if (ref !== "home") {
      scroller = scrollToComponent(this[ref], { align: 'top', offset: 60 });
      scroller.on('end', () => {
        this.headroom.unpin();
        this.props.landingPageMobileMenuClose();
      });
    } else {
      scrollToComponent(this[ref], { align: 'top'});
    }
  }

  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen?"landing-page show-mobile-menu":"landing-page"}>
          <MenuMultipageMobile  onUnmountingMenu={()=>this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
              <MenuMultipage onMobileMenuToggle={()=>this.onMobileMenuToggle()}></MenuMultipage>
            </Headroom>

            <div className="content-container" ref={(x) => { this.home = x; }}>
              <div className="section home subpage">
                <Container>
                  <SubHero title={messages["lp.payment-and-refund-policy.title"]} detail={messages["lp.payment-and-refund-policy.detail"]} >
                  </SubHero>
                  <Row>
                    <NavLink className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("content", event)}>
                      <i className="simple-icon-arrow-down"></i>
                    </NavLink>
                  </Row>
                </Container>
              </div>

              <div className="section" ref={(x) => { this.content = x; }}>
                <Container>

                  <Row>
                    <Colxx xxs="12">
                        <h2 aria-level="1">Refund&nbsp;
                        </h2>
                        <p>A processing fee of $200 will be charged for cancellations made more than nine (9) days
                          before the start of cultivation. Farm cultivation starts ten (10) business days after payment
                          receipt is issued to payee.&nbsp; There will be no refunds for cancellations made within the
                          cultivation of farms although farm additions would be permitted with additional&nbsp; payment
                          for added farms.</p>
                        <p>Notice of cancellation must be made via e-mail to&nbsp; info@completefarmer.com&nbsp; . A
                          cancellation acknowledgement will be sent within 3 working days and fees refunded within 10
                          working days, subject to this Refund Policy.</p>
                        <p>Note that circumstances beyond the control of the&nbsp; farm managers&nbsp; may necessitate
                          substitutions, alterations or cancellations of the&nbsp; certain inputs, labor, and/or methods
                          due to their discretion to determine successful output of farm work.
                          Therefore, &nbsp; Complete Farmer&nbsp; reserves the right to alter or modify the
                          advertised&nbsp; crops farms rates&nbsp; if necessary. Any substitutions or alterations will
                          be updated on the&nbsp; Company’s&nbsp; web site as soon as possible.</p>
                        <p>Where Complete Farmer, LLC offers a non-tangible irrevocable service we do not issue refunds
                          once the order is accomplished.&nbsp;
                        </p>
                        <p>As a customer you are responsible for understanding this refund policy upon purchasing any
                          product or service&nbsp; on&nbsp; our web site. However, we realize that exceptional
                          circumstance can take place with regard to the character of the product or services we
                          provide.</p>
                        <p>THEREFORE, WE HONOR REQUESTS FOR REFUND WHERE THE FOLLOWING REASONS APPLY:</p>
                        <ol>
                          <li>Non-delivery of the product or service: such as, for example, due to some issues beyond
                            our control you do not get your farm build by us;
                          </li>
                          <li>Technical issues: it may happen that you are having problems while using the product or
                            receiving a service;
                          </li>
                          <li>Irreparable defects or grave difficulties with the farms or service: although all the
                            farms and services are thoroughly tested before release, unexpected errors may occur. This
                            reason should be submitted to our Support Team for approval; However, all farms are insured
                            by us for protection against naturals causes of defects.
                          </li>
                          <li>Product or services not-as-described: a request based on this reason is satisfied on a
                            case by case basis with Complete Farmer LLC reserving full discretion to make the
                            determination whether a refund is appropriate.
                          </li>
                        </ol>
                        <h2 aria-level="1">Payment Policy</h2>
                        <p>Farms are&nbsp; not&nbsp; started&nbsp; until full payment has been received.&nbsp; Payments
                          are done through Bank transfers, VISA and GHIPSs GIS system for Ghanaian Payees.&nbsp;
                        </p>
                        <p>Complete Farmer pays back return on farm investments via Bank Transfers, for Users outside
                          Ghana only and with GIS for Users in Ghana. This payments would be made into&nbsp; Users’
                          submitted bank account details. Bank account details would be provided by Users when requested
                          by Complete Farmer.</p>
                        <p>Payments from Complete Farmer would be effected from the Company’s bank account to User’s
                          bank account. And the current exchange rates would apply for payments conversions into other
                          currencies.</p>
                        <p>Please note that our Support Team is ready to provide you with timely and
                          efficient&nbsp; professional assistance. We will attempt to find the best convenient solution
                          for your&nbsp; query. Give us 12-24 hours for our Support Team to get back to you on the
                          problem.&nbsp; Requests for a refund are accepted within the period of 1 week after the order
                          is placed.</p>
                        <p>You should accompany this request with detailed and grounded reasons why you
                          are&nbsp; applying for a refund. Please make sure your request does not contradict
                          our&nbsp; refund policy.</p>
                        <p>You may request assistance by sending&nbsp; an&nbsp; email to&nbsp;
                          <a href="mailto:info@completefarmer.com">info@completefarmer.com</a></p>
                    </Colxx>
                  </Row>

                </Container>
              </div>

              <div className="section background background-no-bottom mb-0">
                <Container>
                  <SectionNewsletter />
                </Container>
              </div>

              <div className="section footer mb-0">
                <Footer onClick={this.onMenuClick} />
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default connect(mapStateToProps, {landingPageMobileMenuToggle,landingPageMobileMenuClose})(injectIntl(Content))