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
                  <SubHero title={messages["lp.privacy-policy.title"]} detail={messages["lp.privacy-policy.detail"]} >
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
                        <h2>Privacy Policy </h2>
                        <p>
                          This Privacy Policy governs the manner in which CompleteFarmer collects, uses, maintains and
                          discloses information collected from users (each, a “User”) on the
                          <a href="https://www.completefarmer.com">
                            &nbsp;https://www.completefarmer.com
                          </a>
                          website (“Site”).
                          This privacy policy applies to the Site and all products and services offered by Complete
                          Farmer Limited
                        </p>
                        <h3>Personal identification information</h3>
                        <p>We may collect personal identification information from Users in a variety of ways,
                          including, but not limited to, when Users visit our site, register on the site, place an
                          order, fill out a form, and in connection with other activities, services, features or
                          resources we make available on our Site. As deemed appropriate, Users may be asked for; name,
                          email address, mailing address, phone number, bank account number, national identification.
                          Users may, however, visit our Site anonymously. We will collect personal identification
                          information from Users only if they voluntarily submit such information to us. Users can
                          always refuse to supply personally identification information, except that it may prevent them
                          from engaging in certain Site related activities.</p>
                        <h3>Non-personal identification information</h3>
                        <p>We may collect non-personal identification information about Users whenever they interact
                          with our Site. Non-personal identification information may include the browser name, the type
                          of computer and technical information about the Users means of connection to our Site, such as
                          the operating system and other similar information.</p>
                        <h3>Web browser cookies</h3>
                        <p>Our Site may use “cookies” to enhance user experience. Users’ web browser places cookies on
                          their hard drive for record-keeping purposes and sometimes to track information about them.
                          Users’ may choose to set their web browser to refuse cookies, or to alert you when cookies are
                          being sent. If they do so, note that some parts of the Site may not function properly.</p>
                        <h3>How we use collected information</h3>
                        <p>CompleteFarmer may collect and use Users personal information for the following purposes:</p>
                        <ul>
                          <li><i>To run and operate our Site</i></li>
                          <li>We may need your information to display content on the Site correctly.</li>
                          <li><i>To improve customer service</i></li>
                          <li>Information you provide helps us respond to your customer service requests and support
                            needs more efficiently.
                          </li>
                          <li><i>To personalize user experience</i></li>
                          <li>We may use information in the aggregate to understand how our Users as a group use the
                            services and resources provided on our Site.
                          </li>
                          <li><i>To improve our Site</i></li>
                          <li>We may use feedback you provide to improve our products and services.</li>
                          <li><i>To process payments</i></li>
                          <li>We may use the information Users provide about themselves when placing an order only to
                            provide service to that order. We do not share this information with outside parties except
                            to the extent necessary to provide the service.
                          </li>
                          <li><i>To send periodic emails</i></li>
                          <li>We may use the email address to send User information and updates pertaining to their
                            order. It may also be used to respond to their inquiries, questions, and/or other requests.
                          </li>
                        </ul>
                        <h3>How we protect your information</h3>
                        <p>We adopt appropriate data collection, storage and processing practices and security measures
                          to protect against unauthorized access, alteration, disclosure or destruction of your personal
                          information, username, password, transaction information and data stored on our Site.</p>
                        <h3>Sharing your personal information</h3>
                        <p>We do not sell, trade, or rent Users personal identification information to others. We may
                          share generic aggregated demographic information not linked to any personal identification
                          information regarding visitors and users with our business partners, trusted affiliates and
                          advertisers for the purposes outlined above. We may use third party service providers to help
                          us operate our business and the Site or administer activities on our behalf, such as sending
                          out newsletters or surveys. We may share your information with these third parties for those
                          limited purposes provided that you have given us your permission.</p>
                        <h3>Electronic newsletters</h3>
                        <p>If Users decide to opt-in to our mailing list, they will receive emails that may include
                          company news, updates, related product or service information, etc. By using any of our
                          services or products, you are also automatically signed up on our mailing list. We may use
                          third party service providers to help us operate our business and the Site or administer
                          activities on our behalf, such as sending out newsletters or surveys. We may share your
                          information with these third parties for those limited purposes provided that you have given
                          us your permission.</p>
                        <h3>Disclosures Required by Law</h3>
                        <p>We may disclose Personally Identifiable Information if required to do so by law or in the
                          good faith belief that such action is necessary to (a) conform with the requirements of the
                          law or comply with legal process served on us, or (b) act in urgent circumstances to protect
                          the personal safety of users of our Service or members of the public. To the extent
                          practicable and legally permitted, we will attempt to advise you prior to any such disclosure,
                          so that you may seek a protective order or other relief limiting such disclosure.</p>
                        <h3>Third party websites</h3>
                        <p>Users may find advertising or other content on our Site that link to the sites and services
                          of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do
                          not control the content or links that appear on these sites and are not responsible for the
                          practices employed by websites linked to or from our Site. In addition, these sites or
                          services, including their content and links, may be constantly changing. These sites and
                          services may have their own privacy policies and customer service policies. Browsing and
                          interaction on any other website, including websites which have a link to our Site, is subject
                          to that website’s own terms and policies.</p>
                        <h3>The Data that we Retain</h3>
                        <p>We will retain your information for as long as your account is active or as needed to provide
                          you with our services, or comply with our legal and statutory obligations.</p>
                        <h3>Problem Signing In</h3>
                        <p>Our sign-in process is designed to help protect your privacy. If you have trouble signing in
                          to our Website, please ensure that you are using your registered e-mail address and/or correct
                          password. If you are using your registered e-mail address and correct password, and you
                          continue to have trouble signing in to our site, please email us immediately at <a
                            href="mailto:info@completefarmer.com">info@completefarmer.com</a></p>
                        <h3>Changes to this privacy policy</h3>
                        <p>CompleteFarmer has the discretion to update this privacy policy at any time. When we do, we
                          will post a notification on the main page of our Site. We encourage Users to frequently check
                          this page for any changes to stay informed about how we are helping to protect the personal
                          information we collect. You acknowledge and agree that it is your responsibility to review
                          this privacy policy periodically and become aware of modifications.</p>
                        <h3>Your acceptance of these terms</h3>
                        <p>By using this Site, you signify your acceptance of this policy. If you do not agree to this
                          policy, please do not use our Site. Your continued use of the Site following the posting of
                          changes to this policy will be deemed your acceptance of those changes.</p>
                        <h3>Contacting us</h3>
                        <p>If you have any questions about this Privacy Policy, the practices of this site, or your
                          dealings with this site, please contact us via email at <a
                            href="mailto:info@completefarmer.com">info@completefarmer.com</a></p>
                        <p><b>This document was last updated on March 12, 2018</b></p>

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