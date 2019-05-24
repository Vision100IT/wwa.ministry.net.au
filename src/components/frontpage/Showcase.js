/*eslint-disable */
import React from 'react';
import WhatIsWWA from '../../assets/img/What is WWA.png';
import Weekend2019 from '../../assets/img/2019 weekend away.png';
import Register from '../../assets/img/Register.png';

export default () => (
    <div id="showcase">
        <div className="container">
            <div className="section_header">
                {/*<h3></h3>*/}
            </div>
            <div className="row feature_wrapper">
                {/* Features Row */}
                <div className="features_op1_row">
                    {/* Feature */}
                    <div className="col-sm-4 feature first">
                        <div className="img_box">
                            <img alt="" src={WhatIsWWA} />
                        </div>
                        <div className="text">
                            <h6>What is WWA?</h6>
                            <p style={{ fontSize: "16px" }}>Women's Weekend Away is a weekend retreat for women to gather together for a time of biblical teaching, worship and friendship.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature">
                        <div className="img_box">
                            <a href="/2019Retreat">
                                <img alt="" src={Weekend2019} />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>2019 Weekend Away</h6>
                            <p style={{ fontSize: "16px" }}>Learn more about this years topic, meet our speakers and check out the program.</p>
                        </div>
                    </div>
                    {/* Feature */}
                    <div className="col-sm-4 feature last">
                        <div className="img_box">
                            <a href="/Register">
                                <img alt="" src={Register} />
                                <span className="circle">
                                    <span className="plus">&#43;</span>
                                </span>
                            </a>
                        </div>
                        <div className="text">
                            <h6>Register</h6>
                            <p style={{ fontSize: "16px" }}>Don't miss out - <a href="/Register">register now</a> to secure your spot.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
