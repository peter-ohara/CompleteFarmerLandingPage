import React, { Component, Fragment } from "react";
import {
  Container, Row, Card, CardBody, Pagination, Badge,
  PaginationItem,
  PaginationLink
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

class Docs extends Component {
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
                  <SubHero title={messages["lp.docs.title"]} detail={messages["lp.docs.detail"]} >
                    <div className="doc-search">
                      <input placeholder={messages["lp.docs.search"]} />
                      <span className="search-icon">
                        <i className="simple-icon-magnifier"></i>
                      </span>
                    </div>
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
                  <Row className="mt-5">
                    <Colxx xxs="12">

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              What is Complete Farmer?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              Complete Farmer is a “crowd farming” platform that gives users the opportunity to own and manage on their devices anywhere. Complete Farmer uses the latest farm mechanization technologies to get the best yields and return guaranteed interest on users investment. The Complete Farmer solution starts from planning your farm to selling your produce to market partners at a premium price and make users money farming remotely.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              How do I farm as a Crowd Farmer?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              Crowd Farmers farm with other users in a designated catchment area. They do not need to provide land or any input. They own the farm by making a subscription for a planting season on a preferred number of acres and make money in return at the end of planting season.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              Is my farm insured?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              With all crops you farm,  Complete Farmer uses the best and research proven practices to make sure your farm records the best yields. Complete Farmer places an insurance on your farm to make sure your farm is secure from losses caused by natural disasters. We do everything humanly possible to make your farm a success. We have machines, data, experience and trained farm manager on site to attend to and pamper your crops for the most optimal yields.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              What crops can I farm with Complete Farmer?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              Crowd Farmers can farm the crop options listed in the Crowd Farmer dashboard sign up list. We update our crop list to make sure crowd farmers do not miss any opportunity and can get the best out of the market for their harvest.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              Can I visit my farm when I want to see work progress?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              Yes. farm visits are scheduled periodically and limited for Crowd farmers and unlimited for freeholder farmer however please make request beforehand to enable us make the necessary arrangement for your visit.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              How do I monitor and manage my farm from home?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              You get periodic updates of farm work and progress from your dashboard. Complete farmer also sends you picture updates to your dashboard to help you monitor your farm.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              What happens if there are losses due to weather or pests?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              Complete Farmer locates farms in areas with historic data and satellite data of experiencing favourable farming conditions for specific crops. We also observe good farming practices which prevents certain hazards on the farms and these minimizes the risks of pest. We use irrigation farming so do not rely on the weather to farm. Complete Farmer also insures the farms and hence your investment is well protected.
                            </p>
                          </CardBody>
                        </div>
                      </Card>


                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              How many acres am I allowed to farm?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              Complete Farmers can farm a minimum of one acre or unit for any crop. Users can select the number of acres to farm during the dashboard sign up and farm as many acres as desired.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="">
                            <div className="list-item-heading mb-1 font-weight-bold text-dark">
                              Ok I am hooked, how do I sign up?
                            </div>
                            <p className="mb-1 text-muted text-small">
                              Great!!! Sign up and create an account on the Complete Farmer dashboard by clicking here  and let’s start farming. You may also get in touch with us here if you have special needs.
                            </p>
                          </CardBody>
                        </div>
                      </Card>

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

export default connect(mapStateToProps, {landingPageMobileMenuToggle,landingPageMobileMenuClose})(injectIntl(Docs))
