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
                  <SubHero title={messages["lp.terms-of-conditions.title"]} detail={messages["lp.terms-of-conditions.detail"]} >
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
                        <h2>Terms and Conditions</h2>
                        <p>Please read these Terms and Conditions, which set forth the legally binding terms and
                          conditions for your use of the services (the “Service”) offered by Complete Farmer Limited.
                          (“Complete Farmer” or the “Company”) and the website at <a
                            href="https://www.completefarmer.com">https://www.completefarmer.com</a>.</p>
                        <p>Your access to use of the Service is conditioned on your acceptance of and compliance with
                          these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others
                          who access or use the Service and all applicable laws and all conditions or policies
                          referenced here (collectively, the “Terms and Conditions”)</p>
                        <p>By accessing or using the Service you agree to be bound by these Terms and Conditions. If you
                          disagree with any part of the terms then you may not access the Service and that the Company
                          may use any information the Company obtains about you in accordance with the provisions of the
                          Privacy Policy.</p>
                        <h3>Summary of service</h3>
                        <p>CompleteFarmer is a tech-enabled “crowd farming” platform that gives users the opportunity to
                          own and manage their farms on their devices anywhere. CompleteFarmer uses good agricultural
                          practices to get the best yields and return guaranteed interest on users investment. The
                          CompleteFarmer solution starts from planning your farm to selling your produce to market
                          partners at a premium price for a healthy return on users investments.</p>
                        <p>&nbsp;</p>
                        <h3>Definitions</h3>
                        <p>In these Terms and Conditions, we refer to users contributing funds as “Subscribers.” Other
                          users of the Service and visitors to the Site are referred to collectively as “Users.”
                          Information about happenings and progress reports on the farms are referred to as “Updates”. A
                          “Farming Duration” refers to a complete farming season from planting to sale of produce. The
                          web and mobile dashboard applications to monitor, communicate and participate in the service
                          is referred to as “Platform”.</p>
                        <h3>Acceptance of terms</h3>
                        <p>The Service is offered subject to acceptance of all the terms and conditions contained in
                          these Terms and Conditions and all other operating rules, policies, and procedures that may be
                          published on the Site by the Company, which are incorporated by reference, including operating
                          rules, policies, and procedures of third party service providers to the Site that are
                          referenced herein. These Terms and Conditions apply to every user of the Service. In addition,
                          some Services offered through the Site may be subject to additional terms and conditions
                          adopted by the Company. Your use of those Services is subject to those additional terms and
                          conditions, which are incorporated into these Terms and Conditions by this reference.</p>
                        <p>The Company reserves the right, at its sole discretion, to modify or replace these Terms and
                          Conditions from time to time by posting the updated terms on the Site. It is your
                          responsibility to check the Terms and Conditions periodically for changes. If you object to
                          any such changes, your sole recourse will be to cease using the Site and the
                          Service. &nbsp;Your continued use of the Service following the posting of any changes to the
                          Terms and Conditions will indicate your acknowledgement of such changes and agreement to be
                          bound by the terms and conditions of such changes.</p>
                        <p>The Company reserves the right to change, suspend, or discontinue the Service (including, but
                          not limited to, the availability of any feature, database, or Content) at any time for any
                          reason. The Company may also impose limits on certain features and Services or restrict your
                          access to parts of or the entire Site without notice or liability.</p>
                        <h3>Accounts</h3>
                        <p>When you create an account with us, you must provide us with information that is accurate,
                          complete, and current at all times. Failure to do so constitutes a breach of the Terms and
                          Conditions, which may result in immediate termination of your account on our Service.</p>
                        <p>You are responsible for safeguarding the password that you use to access the Service and for
                          any activities or actions under your password, whether your password is with our Service or a
                          third-party service.</p>
                        <p>You agree not to disclose your password to any third party. You must notify us immediately
                          upon becoming aware of any breach of security or unauthorized use of your account.</p>
                        <p>You may not use as a username the name of another person or entity or that is not lawfully
                          available for use, a name or trademark that is subject to any rights of another person or
                          entity other than you without appropriate authorization, or a name that is otherwise
                          offensive, vulgar or obscene.</p>
                        <h3>Subscription Terms</h3>
                        <ul>
                          <li>The Subscriber will receive periodic Updates on the status of the farm by email. The
                            Updates may also available in your account on the Website. You are expected to review all
                            notifications, updates and reports from Complete Farmer as they represent a record of
                            information pertaining to your contribution during a Farming Duration.
                          </li>
                          <li>You are entitled to request for a physical visit to the farm you are subscribed to,
                            however, you must provide us with at least 2 weeks notice to schedule a visit.
                          </li>
                          <li>At the beginning of a Farming Duration, costs related to the lease of land for farming,
                            seedling/livestock, fertilizers, land preparation, crop management, &nbsp;maintenance costs,
                            and the cost of supervision and administration will be deducted from your subscription
                            contribution. All costs are included in your subscription contribution.
                          </li>
                          <li>You agree that by subscribing to a farm, your contribution is tied and unavailable for the
                            entire duration of the Farming Duration and neither Complete Farmer nor the farmers can or
                            will refund your contribution until the successful completion of a Farming Duration.
                          </li>
                          <li>Subscribers with their own land would be subjected to a payment plan which would be agreed
                            by Complete Farmer and the subscriber. The user’s account would be deducted based on a
                            standing order with respect to what is agreed in the Freeholder Farmer Contract and set key
                            performance indicators.
                          </li>
                          <li>Any profits from a successful Farming Duration of a Subscriber’s farm are remitted to the
                            electronic wallet on the Platform when the produce is harvested and sold (i.e. upon
                            completion of the Farming Duration)
                          </li>
                          <li>At the end of a successful Farming Duration, the Subscriber can decide whether to withdraw
                            your funds from the electronic wallet on the Platform and transfer to a bank account you
                            provide us with or to subscribe to another farm for a new Duration subject to that Farm’s
                            terms &amp; conditions.
                          </li>
                          <li>At the end of a Farming Duration, the Subscriber’s Expected Returns is disbursed from any
                            profits made during harvest.
                          </li>
                          <li>You acknowledge that you do not own any of the farms cultivated and are only entitled to
                            your capital and/or a part of the proceeds of any Farming Duration you participate in.
                          </li>
                        </ul>
                        <h3>Subscribers’ Representations and Warranties</h3>
                        <p>Representations and warranties are statements and promises made by you to the Company, which
                          we rely on as being accurate in our dealings with you. You make the following representations
                          and warranties to us at the time of agreeing to these Terms and every time you use the
                          Platform or Services, including the time you are matched to a Loan Agreement;</p>
                        <ol>
                          <li>you are over the age of 21 years;</li>
                          <li>you are of sound mind and have the capacity to enter into these Terms and Conditions and
                            be a owner to a farm;
                          </li>
                          <li>all personal information that you provide about yourself is accurate and true to the best
                            of your knowledge;
                          </li>
                          <li>you hold a bank account in Ghana in your own name and will use this account to transfer
                            money to our account when you subscribe to a farm and receive refunds of contributions made
                            and profits earned;
                          </li>
                          <li>you have carefully considered the risks involved with using the Website, the Services and
                            being matched to a farm and also the risks associated with any form of cash contribution or
                            donation, including but not limited to the possibility of losing all the money you
                            contribute;
                          </li>
                          <li>you will only ever subscribe with your own money unless you are authorised on behalf of a
                            third party (“Third Party”) and we agree that you may act on behalf of that Third Party.
                          </li>
                          <li>if you are registering or accepting these Terms on behalf of a legal entity such as a
                            company, trust or partnership, you are legally authorised to do so and we may request
                            evidence of such legal entitlement (by way of a copy of any document which shows the valid
                            and subsisting authorisation); and
                          </li>
                          <li>you are not in breach of any laws or regulations that are applicable to you or any
                            company, trust or partnership upon whose instructions you are acting.
                          </li>
                        </ol>
                        <h3>Intellectual Property</h3>
                        <p>The Service and its original content, features and functionality are and will remain the
                          exclusive property of Complete Farmer Limited. The Service is protected by copyright,
                          trademark, and other laws of The Republic of Ghana. Our trademarks and trade dress may not be
                          used in connection with any product or service without the prior written consent of Complete
                          Farmer Limited.</p>
                        <p>User shall not directly or indirectly: (i) decipher, decompile, disassemble, reverse
                          engineer, or otherwise attempt to derive any source code or underlying ideas or algorithms of
                          any part of the Service, except to the extent applicable laws specifically prohibit such
                          restriction; (ii) modify, translate, or otherwise create derivative works of any part of the
                          Service; or (iii) copy, rent, lease, distribute, or otherwise transfer any of the rights that
                          you receive hereunder.</p>
                        <p> If you choose to provide technical, business or other feedback to the Company concerning the
                          Site or the Services (collectively, “Feedback”), the Company will be free to use, disclose,
                          reproduce, license, or otherwise distribute or exploit such Feedback in its sole discretion
                          without any obligations or restrictions of any kind, including intellectual property rights or
                          licensing obligations. &nbsp;You understand and agree that the incorporation by the Company of
                          Feedback into any of its products or services does not grant you any proprietary rights
                          therein.</p>
                        <h3>Links to Other Websites</h3>
                        <p>Our Service may contain links to third-party web sites or services that are not owned or
                          controlled by Complete Farmer.</p>
                        <p>Complete Farmer Limited has no control over, and assumes no responsibility for, the content,
                          privacy policies, or practices of any third-party web sites or services. You further
                          acknowledge and agree that Complete Farmer shall not be responsible or liable, directly or
                          indirectly, for any damage or loss caused or alleged to be caused by or in connection with use
                          of or reliance on any such content, goods or services available on or through any such
                          websites or services.</p>
                        <p>We strongly advise you to read the terms and conditions and privacy policies of any
                          third-party web sites or services that you visit.</p>
                        <h3>Termination </h3>
                        <p>We may terminate or suspend your account immediately, without prior notice or liability, for
                          any reason whatsoever, including without limitation if you breach the Terms and
                          Conditions.</p>
                        <p>Upon termination, your right to use the Service will immediately cease. If you wish to
                          terminate your account, you may simply discontinue using the Service.</p>
                        <h3>Insurance</h3>
                        <p>Farm plots have been insured. Where Complete Farmer makes a claim under the insurance policy,
                          and the insurance claim is settled by the insurance company, Complete Farmer shall pass on the
                          benefits of such claims to Subscribers in the proportion of their Subscription Contribution in
                          any affected Farm. Subscribers shall get up to 80% of their initial investment back upon any
                          natural occurrence that affects the success of their farms.</p>
                        <h3>Indemnity</h3>
                        <p>Subject to paragraph 10 (<i>Insurance</i>) and any insurance claims settled, you agree that
                          the Company has no obligation to reimburse or indemnify you for any cost, loss or liability
                          which you incur as a result of the failure of a farm to yield according to expectations</p>
                        <p>You agree to indemnify and hold harmless the Company, any farmer, and all our other agents or
                          sub-contractors, against all liabilities, costs, expenses, damages and losses (including any
                          direct, indirect or consequential losses, loss of profit, loss of reputation and all interest
                          penalties and legal and other reasonable professional costs and expenses) suffered or incurred
                          as a result of:</p>
                        <ol>
                          <li>your fraudulent or illegal use of the Platform, the Services or the Website;</li>
                          <li>your negligence or any default by you of any of these Terms or the terms of any Loan
                            Agreement to which you are matched;
                          </li>
                          <li>any inaccurate or incomplete information that you have knowingly provided to us;</li>
                          <li>your allowing any other person to access your account either with your permission or as a
                            result of your failure to keep your username and password private;
                          </li>
                          <li>any service that you have offered, whether with or without our permission, to another
                            third party using our Platform, Services or Website;
                          </li>
                          <li>any claim made against you for actual or alleged infringement of the Company’s
                            Intellectual Property Rights or any actual or alleged infringement of a third party’s
                            Intellectual Property Rights arising out of or in connection with the Services or your use
                            of the Platform
                          </li>
                        </ol>
                        <h3>Limitation of Liability</h3>
                        <p>In no event shall Complete Famer, its directors, employees, partners, agents, suppliers, or
                          affiliates, be liable for any indirect, incidental, special, consequential or punitive
                          damages, including without limitation, loss of profits, data, use, goodwill, or other
                          intangible losses, resulting from (i) your access to or use of or inability to access or use
                          the Service; (ii) any conduct or content of any third party on the Service; (iii) any content
                          obtained from the Service; and (iv) unauthorized access, use or alteration of your
                          transmissions or content, whether based on warranty, contract, tort (including negligence) or
                          any other legal theory, whether or not we have been informed of the possibility of such
                          damage, and even if a remedy set forth herein is found to have failed of its essential
                          purpose.</p>
                        <h3>Disclaimer</h3>
                        <p>Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS
                          AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or
                          implied, including, but not limited to, implied warranties of merchantability, fitness for a
                          particular purpose, non-infringement or course of performance.</p>
                        <p>Complete Farmer, its subsidiaries, affiliates, and its licensors do not warrant that a) the
                          Service will function uninterrupted, secure or available at any particular time or location;
                          b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful
                          components; or d) the results of using the Service will meet your requirements.</p>
                        <h3>Governing Law</h3>
                        <p>These Terms shall be governed and construed in accordance with the laws of The Republic of
                          Ghana, without regard to its conflict of law provisions.</p>
                        <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver
                          of those rights. If any provision of these Terms is held to be invalid or unenforceable by a
                          court, the remaining provisions of these Terms will remain in effect. These Terms and
                          Conditions constitute the entire agreement between us regarding our Service, and supersede and
                          replace any prior agreements we might have between us regarding the Service.</p>
                        <h3>Changes to Terms and Conditions</h3>
                        <p>Complete Farmer reserves the right, in its sole discretion, to change the Terms under
                          which <a href="https://www.completefarmer.com">https://www.completefarmer.com</a> is offered.
                          The most current version of the Terms will supersede all previous versions. Complete Farmer
                          encourages you to periodically review the Terms and &nbsp;Conditions to stay informed of our
                          updates.</p>
                        <h3>Contact Us</h3>
                        <p>If you have any questions about these Terms &amp; Conditions, please contact us at: <a
                          href="mailto:info@completefarmer.com">info@completefarmer.com</a> &nbsp;or no. 19 Banana
                          Street. East Legon. Accra, Ghana..</p>
                        <p><b>This document was last updated on March 7, 2018</b></p>
                        <p>&nbsp;</p>
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