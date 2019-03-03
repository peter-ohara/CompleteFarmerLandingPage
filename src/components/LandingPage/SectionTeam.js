import React from "react";
import { Row, Card, CardBody, Badge } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";

export default class SectionTeam extends React.Component {

    render() {
        return (
            <Row>
                <Colxx xxs={{ size: "12"}} lg={{ size: 4 }} className="mb-4">
                    <h1><IntlMessages id="lp.team.title" /></h1>
                    <p>
                        <IntlMessages id="lp.team.detail-1"/><br/><br/>
                        <IntlMessages id="lp.team.detail-2"/>
                    </p>
                </Colxx>
                <Colxx xxs={{size:12, offset:0}} lg={{size:7, offset:1}} className="pl-0 pr-0 team-carousel">
                    <ReactSiemaCarousel
                        perPage={{
                            0: 1,
                            576: 2,
                            1440: 3
                        }}
                        loop={false}>
                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-1.jpg" alt="Card cap" />
                                    <Badge color="secondary" pill className="position-absolute badge-top-left">ENGINEER</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Desmond Koney</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            CEO
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-3.jpg" alt="Card cap" />
                                    <Badge color="secondary" pill className="position-absolute badge-top-left">ENGINEER</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Andrew Quartey</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            CTO
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-2.jpg" alt="Card cap" />
                                    <Badge color="primary" pill className="position-absolute badge-top-left">BUSINESS DEVELOPER</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Zoussi Ley</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            CMO
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-4.jpg" alt="Card cap" />
                                    <Badge color="primary" pill className="position-absolute badge-top-left">PROJECT MANAGER</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Joan Ejeta</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                            COO
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <Card>
                                <div className="position-relative">
                                    <img className="card-img-top" src="/assets/img/landing-page/team-5.jpg" alt="Card cap" />
                                    <Badge color="theme-3" pill className="position-absolute badge-top-left">CROP SCIENTIST</Badge>
                                </div>
                                <CardBody>
                                    <h6 className="mb-4">Farm Manager</h6>
                                    <footer>
                                        <p className="text-muted text-small mb-0 font-weight-light">
                                          Agronomist
                                        </p>
                                    </footer>
                                </CardBody>
                            </Card>
                        </div>

                      <div className="pr-3 pl-3 d-flex">
                        <Card>
                          <div className="position-relative">
                            <img className="card-img-top" src="/assets/img/landing-page/team-5.jpg" alt="Card cap" />
                            <Badge color="theme-3" pill className="position-absolute badge-top-left">FARM MANAGEMENT</Badge>
                          </div>
                          <CardBody>
                            <h6 className="mb-4">Farm Manager</h6>
                            <footer>
                              <p className="text-muted text-small mb-0 font-weight-light">
                                Chief Farm Manager
                              </p>
                            </footer>
                          </CardBody>
                        </Card>
                      </div>
                    </ReactSiemaCarousel>
                </Colxx>
            </Row>
        );
    }
}

