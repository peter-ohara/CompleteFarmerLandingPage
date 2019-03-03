import React, { Fragment } from "react";
import { Row, Card } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";

export default class SectionValues extends React.Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-center">
                        <h1><IntlMessages id="lp.values.title" /></h1>
                        <p>
                            <IntlMessages id="lp.values.detail" />
                        </p>
                    </Colxx>
                </Row>


                <Row className="mt-5">
                    <Colxx xxs="12" md="6" lg="3" className="text-center">
                        <Card className="bg-dark text-white mb-5">
                            <img className="card-img" src="/assets/img/landing-page/values-1.jpg" alt="Card" />
                            <div className="card-img-overlay d-flex justify-content-center">
                                <p className="card-text white text-center mb-0 align-self-center">
                                    <strong>
                                        <IntlMessages id="lp.values.title-1" />
                                    </strong>
                                    <br/>
                                    <IntlMessages id="lp.values.detail-1" />
                                </p>
                            </div>
                        </Card>
                    </Colxx>

                    <Colxx xxs="12" md="6" lg="3" className="text-center">
                        <Card className="bg-dark text-white mb-5">
                            <img className="card-img" src="/assets/img/landing-page/values-2.jpg" alt="Card" />
                            <div className="card-img-overlay d-flex justify-content-center">
                                <p className="card-text white text-center mb-0 align-self-center">
                                  <strong>
                                    <IntlMessages id="lp.values.title-2" />
                                  </strong>
                                  <br/>
                                  <IntlMessages id="lp.values.detail-2" />
                                </p>
                            </div>
                        </Card>
                    </Colxx>

                    <Colxx xxs="12" md="6" lg="3" className="text-center">
                        <Card className="bg-dark text-white mb-5">
                            <img className="card-img" src="/assets/img/landing-page/values-3.jpg" alt="Card" />
                            <div className="card-img-overlay d-flex justify-content-center">
                                <p className="card-text white text-center mb-0 align-self-center">
                                  <strong>
                                    <IntlMessages id="lp.values.title-3" />
                                  </strong>
                                  <br/>
                                  <IntlMessages id="lp.values.detail-3" />
                                </p>
                            </div>
                        </Card>
                    </Colxx>

                    <Colxx xxs="12" md="6" lg="3" className="text-center">
                        <Card className="bg-dark text-white mb-5">
                            <img className="card-img" src="/assets/img/landing-page/values-4.jpg" alt="Card" />
                            <div className="card-img-overlay d-flex justify-content-center">
                                <p className="card-text white text-center mb-0 align-self-center">
                                  <strong>
                                    <IntlMessages id="lp.values.title-4" />
                                  </strong>
                                  <br/>
                                  <IntlMessages id="lp.values.detail-4" />
                                </p>
                            </div>
                        </Card>
                    </Colxx>

                    <Colxx xxs="12" md="6" lg="3" className="text-center">
                        <Card className="bg-dark text-white mb-5">
                            <img className="card-img" src="/assets/img/landing-page/values-5.jpg" alt="Card" />
                            <div className="card-img-overlay d-flex justify-content-center">
                                <p className="card-text white text-center mb-0 align-self-center">
                                  <strong>
                                    <IntlMessages id="lp.values.title-5" />
                                  </strong>
                                  <br/>
                                  <IntlMessages id="lp.values.detail-5" />
                                </p>
                            </div>
                        </Card>
                    </Colxx>

                    <Colxx xxs="12" md="6" lg="3" className="text-center">
                        <Card className="bg-dark text-white mb-5">
                            <img className="card-img" src="/assets/img/landing-page/values-6.jpg" alt="Card" />
                            <div className="card-img-overlay d-flex justify-content-center">
                                <p className="card-text white text-center mb-0 align-self-center">
                                  <strong>
                                    <IntlMessages id="lp.values.title-6" />
                                  </strong>
                                  <br/>
                                  <IntlMessages id="lp.values.detail-6" />
                                </p>
                            </div>
                        </Card>
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
}
