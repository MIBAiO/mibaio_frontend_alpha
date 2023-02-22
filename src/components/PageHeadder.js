import React from "react";
import NavigationBar from "./navigationbar";

export default function PageHeadder({
    quote = "",
    showYouAre = true,
    info = "",
    ...props
}) {
    return (
        <section
            className="section page-header-3 header-section header-offset"
            id="header-id"
        >
            {/* RD Navbar*/}
            <NavigationBar />

            <div id="belownavbar" className="box-custom-4 bg-default">
                {showYouAre && (
                    <>
                        <div className="box-custom-4-aside bg-accent">
                            <div className="box-custom-4-aside-decoration">
                                <div className="box-custom-4-aside-decoration-bg wow clipInLeft" />
                                <div className="box-custom-4-icon-outer">
                                    <span className="box-custom-4-icon" />
                                </div>
                            </div>
                            <div
                                className="box-custom-4-aside-content wow fadeInDown"
                                data-wow-duration="1s"
                                data-wow-delay=".5s"
                            >
                                <img
                                    className="img-svg animated"
                                    style={{
                                        margin: "0 auto 20px auto",
                                        paddingTop: "90px",
                                        display: "inline-block",
                                        textAlign: "center",
                                        transition: "all 0.3s ease-in-out",
                                        height: "auto",
                                        width: "550px",
                                    }}
                                    src="images/cart_p.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="box-custom-4-main">
                            <div className="block-10">
                                <h1 className="font-weight-bold heading-decoration-2 wow clipInLeft">
                                    <span className="text-white">You are</span>
                                </h1>
                                <h1 className="extra-light text-white heading-decoration-3">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: quote,
                                        }}
                                    ></span>
                                </h1>
                            </div>
                        </div>
                    </>
                )}
                {/* <div class="breadcrumbs-custom-main-2 bg-default"> */}
                {/* <div class="justify-content-center align-items-center"> */}
                {!showYouAre && (
                    <div class="container d-flex flex-column justify-content-center align-items-center">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <h3 class="text-white breadcrumbs-custom-title-2">
                                {quote}
                            </h3>
                            {info && (
                                <p class="breadcrumbs-custom-text-2 big text-light">
                                    {info}
                                </p>
                            )}
                        </div>
                    </div>
                )}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="w-100 d-flex justify-content-center align-items-center">
                        <h1 className="extra-light text-white heading-decoration-3">
                            <span
                                dangerouslySetInnerHTML={{ __html: quote }}
                            ></span>
                        </h1>
                    </div> */}
            </div>
        </section>
    );
}
