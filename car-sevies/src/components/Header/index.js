import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLocationDot,
    faClock,
    faPhoneVolume,
    faF,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    const onFacebook = () => {
        return <a>ssss</a>;
    };
    return (
        <header className="header">
            <div className="logo">
                <span className="service">
                    <h1>Top Service</h1>
                </span>
                <span className="description">
                    <h2>Bulgaria</h2>
                </span>
            </div>
            <div className="nav-container">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="address-container">
                            <FontAwesomeIcon icon={faLocationDot} size="xl" />
                            <small className="address">
                                123 Street, New York, USA
                            </small>
                        </div>

                        <div className="work-container">
                            <FontAwesomeIcon icon={faClock} size="xl" />
                            <small className="work">
                                Mon - Fri : 09.00 AM - 09.00 PM
                            </small>
                        </div>
                    </div>
                    <div className="contact-container">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <FontAwesomeIcon icon={faPhoneVolume} size="xl" />
                            <small className="phone">+012 345 6789</small>
                        </div>
                        <div className="More">
                            <button
                                onClick={onFacebook}
                                className="btn btn-sm-square bg-white text-primary me-1"
                            >
                                <FontAwesomeIcon icon={faF} fade size="xl" />
                                <small className="facebook-address"></small>
                            </button>
                            <a
                                to
                                className="btn btn-sm-square bg-white text-primary me-1"
                            >
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a
                                className="btn btn-sm-square bg-white text-primary me-1"
                                href=""
                            >
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                className="btn btn-sm-square bg-white text-primary me-0"
                                href=""
                            >
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
