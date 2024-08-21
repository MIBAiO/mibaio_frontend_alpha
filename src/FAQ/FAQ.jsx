import React from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import CustomFooter from "../components/customfooter";
import PageHeadder from "../components/PageHeadder";

const FAQ = () => {
    return (
        <div className="page">
            <section className="section page-header-3 header-section">
                {/* <NavigationBar /> */}
                <PageHeadder
                    quote="FAQ"
                    showYouAre={false}
                    info="Frequently Asked Questions"
                />
            </section>
            <section class="section section-md bg-gray-100">
                <div class="container">
                    <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey={"MIBAiO4s"}
                    >
                        <Row className="tabs-custom tabs-line tabs-line-responsive">
                            <Col sm={9}>
                                <Tab.Content className="d-block">
                                    <Tab.Pane eventKey={"MIBAiO4s"}>
                                        <div
                                            class="card-group-custom card-group-classic"
                                            id="accordion1"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion1-heading-1"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion1-collapse-1"
                                                            aria-controls="accordion1-collapse-1"
                                                            aria-expanded="true"
                                                        >
                                                            How many appliances
                                                            can MIBAiO 4S
                                                            control?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse show"
                                                    id="accordion1-collapse-1"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion1-heading-1"
                                                    data-parent="#accordion1"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            MIBAiO 4S enables
                                                            control of upto four
                                                            appliances or
                                                            electric circuits.
                                                            The maximum rated
                                                            current on each load
                                                            is 10A. All slots
                                                            can be used to turn
                                                            on/off appliances
                                                            eg. lights, fan,
                                                            bulbs any 10A
                                                            appliance.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion1-heading-2"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion1-collapse-2"
                                                            aria-controls="accordion1-collapse-2"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Would my existing
                                                            physical switches
                                                            work after
                                                            installing MIBAiO
                                                            4S?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion1-collapse-2"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion1-heading-2"
                                                    data-parent="#accordion1"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Yes! Your existing
                                                            physical switches
                                                            function as before.
                                                            When the appliances
                                                            are controlled
                                                            manually using
                                                            physical switches,
                                                            it reflects
                                                            immediately on the
                                                            app as well.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion1-heading-3"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion1-collapse-3"
                                                            aria-controls="accordion1-collapse-3"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Do I need additional
                                                            smart hubs to
                                                            control my
                                                            appliances?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion1-collapse-3"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion1-heading-3"
                                                    data-parent="#accordion1"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            No, MIBAiO 4S is
                                                            WiFi + Bluetooth
                                                            enabled and
                                                            communicate directly
                                                            with your home Wi-Fi
                                                            router and doesn't
                                                            require any
                                                            additional
                                                            hub/device.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion1-heading-4"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion1-collapse-4"
                                                            aria-controls="accordion1-collapse-4"
                                                            aria-expanded="false"
                                                        >
                                                            Does MIBAiO 4S
                                                            require additonal or
                                                            special wiring?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion1-collapse-4"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion1-heading-4"
                                                    data-parent="#accordion1"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            No. MIBAiO 4S
                                                            doesn't require any
                                                            kind of additional
                                                            wiring and can be
                                                            seamlessly
                                                            integrated with your
                                                            switchboard panel.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion1-heading-5"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion1-collapse-5"
                                                            aria-controls="accordion1-collapse-5"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            What happens if I
                                                            make changes to my
                                                            Wi-Fi network or buy
                                                            a new router?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion1-collapse-5"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion1-heading-5"
                                                    data-parent="#accordion1"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            In case the Wi-Fi
                                                            network name or
                                                            password is changed
                                                            the device will not
                                                            be able to connect
                                                            back automatically.
                                                            You have to get your
                                                            MIBAiO device in to
                                                            setup mode and
                                                            configure it to the
                                                            network. To get
                                                            MIBAiO 4S into setup
                                                            mode, press and hold
                                                            the reset button at
                                                            the top of your
                                                            device for five
                                                            seconds.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion1-heading-6"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion1-collapse-6"
                                                            aria-controls="accordion1-collapse-6"
                                                            aria-expanded="false"
                                                        >
                                                            Why does my MIBAiO
                                                            4S occassionly get
                                                            disconnected from
                                                            the network and
                                                            doesn't respond?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion1-collapse-6"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion1-heading-6"
                                                    data-parent="#accordion1"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            This can occur
                                                            either due to
                                                            network congestion
                                                            or interference. If
                                                            you are using a
                                                            dual-band routers,
                                                            ensure both the
                                                            networks have
                                                            different
                                                            SSID(network name).
                                                            <br />
                                                            <br />
                                                            Please note:
                                                            Traditional 2.4 GHz
                                                            band gives a
                                                            coverage upto 150 ft
                                                            indoors and 300 ft
                                                            outdoors.
                                                            <br />
                                                            <br />
                                                            To solve the issue:
                                                            <br />
                                                            1. Make sure the
                                                            Wi-Fi connected
                                                            devices are within
                                                            wireless network
                                                            range. If not, add
                                                            an additional Wi-Fi
                                                            access point.
                                                            <br />
                                                            2. Reconnect your
                                                            smart devices to the
                                                            Wi-Fi network.
                                                            <br />
                                                            3. Access your
                                                            router settings and
                                                            check if there is
                                                            any limit to the
                                                            number of
                                                            simultaneous
                                                            connections.
                                                            <br />
                                                            4. Update firmware
                                                            to the latest
                                                            version on your
                                                            router, controller
                                                            devices and MIBAiO
                                                            4S.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion1-heading-7"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion1-collapse-7"
                                                            aria-controls="accordion1-collapse-7"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            What should I do if
                                                            my MIBAiO 4S is
                                                            offline?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion1-collapse-7"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion1-heading-7"
                                                    data-parent="#accordion1"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            This is when you use
                                                            the Bluetooth mode!
                                                            Your app will
                                                            automatically shift
                                                            to bluetooth mode.
                                                            If you are in the
                                                            range you can
                                                            operate your
                                                            appliances from the
                                                            app using bluetooth
                                                            and manual switching
                                                            as well.
                                                            <br />
                                                            First, ensure the
                                                            Wi-Fi network is
                                                            working. In case
                                                            there is no problem
                                                            with the network,
                                                            normal reset the
                                                            device and check if
                                                            it connected back.
                                                            Even then, if the
                                                            problem persists,
                                                            factory reset the
                                                            device and configure
                                                            the device again.
                                                            Get the Wi-Fi router
                                                            closer to the device
                                                            or add a repeater
                                                            near to the device.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"AboutMIBAiO"}>
                                        <div
                                            class="card-group-custom card-group-classic"
                                            id="accordion2"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion2-heading-7"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion2-collapse-7"
                                                            aria-controls="accordion2-collapse-7"
                                                            aria-expanded="true"
                                                        >
                                                            {" "}
                                                            What is MIBAiO? 🤨
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse show"
                                                    id="accordion2-collapse-7"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion2-heading-7"
                                                    data-parent="#accordion2"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            MIBAiO is your smart
                                                            lifestyle partner.
                                                            With MIBAiO you can
                                                            easily monitor,
                                                            control and automate
                                                            your home from just
                                                            about anywhere in
                                                            the world!
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion2-heading-5"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion2-collapse-5"
                                                            aria-controls="accordion2-collapse-5"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            What can I do with
                                                            MIBAiO?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion2-collapse-5"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion2-heading-5"
                                                    data-parent="#accordion2"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Control & monitor:
                                                            You can control or
                                                            check the status of
                                                            connected electrical
                                                            appliances and
                                                            lights from the app.
                                                            Perfect for those
                                                            times when you’re
                                                            not sure if the
                                                            lights are left on
                                                            or the door is
                                                            locked.
                                                            <br />
                                                            <br />
                                                            Scenes: With
                                                            'Scenes' you control
                                                            multiple appliances
                                                            with a tap in the
                                                            app. For Example, a
                                                            “Good Night” scene
                                                            could be created to
                                                            turn off all the
                                                            lights, close the
                                                            curtains, adjust
                                                            temperature on the
                                                            AC to your
                                                            preference all at
                                                            once.
                                                            <br />
                                                            <br />
                                                            Schedules: Want your
                                                            lights to turn on or
                                                            off at specific time
                                                            of the say? You can
                                                            create a schedule
                                                            with in the app for
                                                            single or multiple
                                                            devices to turn to a
                                                            specific setting for
                                                            a time of the day.
                                                            Attend to important
                                                            things in your life
                                                            while MIBAiO takes
                                                            care of your home.
                                                            <br />
                                                            <br />
                                                            Location-Based
                                                            Triggers: With
                                                            MIBAiO devices
                                                            installed, Your Home
                                                            can sense when you
                                                            arrive or leave and
                                                            prepare itself as
                                                            per your preference.
                                                            You can
                                                            automatically
                                                            trigger appliances
                                                            and lights based on
                                                            your geo-location.
                                                            You can have all the
                                                            house lights & Air
                                                            Conditioners turn
                                                            off once you cross a
                                                            pre-set distance say
                                                            500 m from your
                                                            home.
                                                            <br />
                                                            <br />
                                                            Add members: You can
                                                            now invite your
                                                            family and friends
                                                            to share the joy of
                                                            connected living. It
                                                            is as easy as
                                                            sending an email.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion2-heading-4"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion2-collapse-4"
                                                            aria-controls="accordion2-collapse-4"
                                                            aria-expanded="false"
                                                        >
                                                            Which Mobile
                                                            platforms does
                                                            MIBAiO support? 📱
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion2-collapse-4"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion2-heading-4"
                                                    data-parent="#accordion2"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            MIBAiO currently
                                                            supports Android 5.0
                                                            or later and iOS
                                                            10.0 or later. The
                                                            MIBAiO App is
                                                            available for
                                                            download from Google
                                                            Play and App Store.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion2-heading-3"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion2-collapse-3"
                                                            aria-controls="accordion2-collapse-3"
                                                            aria-expanded="false"
                                                        >
                                                            Can I access MIBAiO
                                                            from my computer,
                                                            mobile web or
                                                            browser-based
                                                            platforms? 💻
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion2-collapse-3"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion2-heading-3"
                                                    data-parent="#accordion2"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            No. We currently
                                                            support apps for
                                                            Android Mobile and
                                                            Android wear. You
                                                            can also voice
                                                            control all smart
                                                            products using
                                                            Amazon Alexa, Google
                                                            Home, Siri or Bixby
                                                            powered devices.
                                                            MIBAiO products also
                                                            can be controlled
                                                            from Home app on
                                                            iOS, Google Home and
                                                            Alexa Apps. You can
                                                            also control your
                                                            devices from the
                                                            Home app on MacOS.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"MIBAiOApp"}>
                                        <div
                                            class="card-group-custom card-group-classic"
                                            id="accordion3"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion3-heading-7"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion3-collapse-7"
                                                            aria-controls="accordion3-collapse-7"
                                                            aria-expanded="true"
                                                        >
                                                            {" "}
                                                            What are Scenes?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse show"
                                                    id="accordion3-collapse-7"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion3-heading-7"
                                                    data-parent="#accordion3"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Scenes enables
                                                            control of multiple
                                                            appliances with just
                                                            a tap or a voice
                                                            command. They can be
                                                            created on the
                                                            MIBAiO app. For
                                                            example, a "Good
                                                            Night" scene could
                                                            be created to turn
                                                            off all the lights,
                                                            close the window
                                                            curtains, adjust the
                                                            AC temperature to
                                                            your liking all at
                                                            once.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion3-heading-2"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion3-collapse-2"
                                                            aria-controls="accordion3-collapse-2"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            What are Schedules?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion3-collapse-2"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion3-heading-2"
                                                    data-parent="#accordion3"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            You can create a
                                                            schedule within the
                                                            MIBAiO app for
                                                            single or multiple
                                                            appliances to turn
                                                            on/off at a time of
                                                            the day. Attend to
                                                            more important
                                                            activies in your
                                                            life while MIBAiO
                                                            app takes care of
                                                            your home controls.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion3-heading-6"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion3-collapse-6"
                                                            aria-controls="accordion3-collapse-6"
                                                            aria-expanded="false"
                                                        >
                                                            Can I control my
                                                            home appliances away
                                                            from home? 🗺
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion3-collapse-6"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion3-heading-6"
                                                    data-parent="#accordion3"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Yes, you can
                                                            control, monitor and
                                                            automate all your
                                                            connected devices
                                                            from the MIBAiO app
                                                            & supported voice
                                                            assistants from just
                                                            about anywhere in
                                                            the world provided
                                                            you are connected to
                                                            the Internet.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion3-heading-3"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion3-collapse-3"
                                                            aria-controls="accordion3-collapse-3"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            What is local
                                                            control?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion3-collapse-3"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion3-heading-3"
                                                    data-parent="#accordion3"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            When you controller
                                                            device (phone,
                                                            tablet etc.) and
                                                            MIBAiO devices are
                                                            connected to the
                                                            same Wi-Fi network,
                                                            they communicate
                                                            with each other with
                                                            router acting as a
                                                            bridge. This is
                                                            called Local
                                                            control.
                                                            <br />
                                                            When the app and
                                                            MIBAiO devices are
                                                            not connected to the
                                                            same Wi-Fi network
                                                            then they
                                                            communicate our
                                                            secure cloud servers
                                                            and is called remote
                                                            control.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion3-heading-5"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion3-collapse-5"
                                                            aria-controls="accordion3-collapse-5"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            What happens if my
                                                            Wi-Fi network is
                                                            down? 📶
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion3-collapse-5"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion3-heading-5"
                                                    data-parent="#accordion3"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            MIBAiO App and
                                                            devices do not
                                                            always require Wi-Fi
                                                            to connect and
                                                            communicate with
                                                            each other.
                                                            <br />
                                                            <br />
                                                            This is the beauty
                                                            of our devices! In
                                                            such cases you can
                                                            control your
                                                            connected appliances
                                                            via Bluetooth using
                                                            the same smartphone
                                                            app. <br />
                                                            And even if you lose
                                                            Wi-Fi connection,
                                                            you will still be
                                                            able to manually
                                                            control your
                                                            devices. Once the
                                                            Wi-Fi network is
                                                            restored, MIBAiO
                                                            devices will
                                                            reconnect to
                                                            internet
                                                            automatically.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion3-heading-1"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion3-collapse-1"
                                                            aria-controls="accordion3-collapse-1"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Do I need pay
                                                            subscription fee to
                                                            use MIBAiO app?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion3-collapse-1"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion3-heading-1"
                                                    data-parent="#accordion3"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            No, MIBAiO app is
                                                            completely free to
                                                            download & use. Even
                                                            control from the
                                                            voice assistants is
                                                            free 😁
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane
                                        eventKey={"Deviceandconfiguration"}
                                    >
                                        <div
                                            class="card-group-custom card-group-classic"
                                            id="accordion4"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion4-heading-5"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion4-collapse-5"
                                                            aria-controls="accordion4-collapse-5"
                                                            aria-expanded="true"
                                                        >
                                                            {" "}
                                                            Do I need to change
                                                            my switchboard?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse show"
                                                    id="accordion4-collapse-5"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion4-heading-5"
                                                    data-parent="#accordion4"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            No, MIBAiO 4S is
                                                            designed to fit
                                                            perfectly outside
                                                            your standard
                                                            switchboard.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion4-heading-4"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion4-collapse-4"
                                                            aria-controls="accordion4-collapse-4"
                                                            aria-expanded="false"
                                                        >
                                                            How do I connect
                                                            MIBAiO devices to a
                                                            new router or what
                                                            happens if I make
                                                            changes to my Wi-Fi
                                                            network name or
                                                            password?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion4-collapse-4"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion4-heading-4"
                                                    data-parent="#accordion4"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            You have to get
                                                            MIBAiO device to
                                                            set-up mode. To
                                                            Factory reset the
                                                            device, follow the
                                                            instructions
                                                            provided in the
                                                            manual
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion4-heading-7"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion4-collapse-7"
                                                            aria-controls="accordion4-collapse-7"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Do MIBAiO products
                                                            require special
                                                            wiring?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion4-collapse-7"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion4-heading-7"
                                                    data-parent="#accordion4"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            No, MIBAiO devices
                                                            doesn't require any
                                                            additional or
                                                            special wiring and
                                                            seamlessly
                                                            integrated with your
                                                            existing
                                                            switchboards.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion4-heading-1"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion4-collapse-1"
                                                            aria-controls="accordion4-collapse-1"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Will MIBAiO products
                                                            reconnect after
                                                            power failure?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion4-collapse-1"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion4-heading-1"
                                                    data-parent="#accordion4"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Once the router is
                                                            up, MIBAiO products
                                                            will connect back
                                                            and are available
                                                            for control from
                                                            smart devices.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion4-heading-6"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion4-collapse-6"
                                                            aria-controls="accordion4-collapse-6"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Will MIBAiO devices
                                                            connect to a 5GHz
                                                            network?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion4-collapse-6"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion4-heading-6"
                                                    data-parent="#accordion4"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            MIBAiO products will
                                                            only connect and
                                                            work with 2.4 GHz
                                                            network. In case you
                                                            are using dual-band
                                                            routers ensure both
                                                            the networks have
                                                            different SSID
                                                            (name) or switch off
                                                            the 5GHz band.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion4-heading-3"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion4-collapse-3"
                                                            aria-controls="accordion4-collapse-3"
                                                            aria-expanded="false"
                                                        >
                                                            If I encounter
                                                            issues with a MIBAiO
                                                            product or app whom
                                                            should I contact?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion4-collapse-3"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion4-heading-3"
                                                    data-parent="#accordion4"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Please write to us
                                                            at
                                                            support@mibaio.xyz
                                                            or call us at +91
                                                            96736 60515.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"Members"}>
                                        <div
                                            class="card-group-custom card-group-classic"
                                            id="accordion5"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion5-heading-4"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion5-collapse-4"
                                                            aria-controls="accordion5-collapse-4"
                                                            aria-expanded="true"
                                                        >
                                                            {" "}
                                                            Can I share my home
                                                            control with other
                                                            people?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse show"
                                                    id="accordion5-collapse-4"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion5-heading-4"
                                                    data-parent="#accordion5"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Yes, you can share
                                                            the connected living
                                                            experience with your
                                                            near and dear,
                                                            simply by sending an
                                                            invite using their
                                                            email address.
                                                            <br />
                                                            <br />
                                                            To share access; go
                                                            to Home &#x2192;
                                                            Settings &#x2192;
                                                            Members &#x2192; tap
                                                            "+" on the top-right
                                                            corner and enter
                                                            member email address
                                                            registered with
                                                            MIBAiO.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion5-heading-2"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion5-collapse-2"
                                                            aria-controls="accordion5-collapse-2"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Can I revoke access
                                                            of my home to
                                                            members?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion5-collapse-2"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion5-heading-2"
                                                    data-parent="#accordion5"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Yes, the owner can
                                                            revoke access of
                                                            shared members.
                                                            <br />
                                                            Go to Settings
                                                            &#x2192; Members
                                                            &#x2192; Select user
                                                            &#x2192; Revoke
                                                            Access.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion5-heading-3"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion5-collapse-3"
                                                            aria-controls="accordion5-collapse-3"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Can a guest user
                                                            exit from a shared
                                                            home?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion5-collapse-3"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion5-heading-3"
                                                    data-parent="#accordion5"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Yes, guest user can
                                                            leave the shared
                                                            home.
                                                            <br />
                                                            Go to Shared Home
                                                            &#x2192; Settings
                                                            &#x2192; Select user
                                                            &#x2192; Leave Home.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion5-heading-7"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion5-collapse-7"
                                                            aria-controls="accordion5-collapse-7"
                                                            aria-expanded="false"
                                                        >
                                                            Who is the owner of
                                                            a home?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion5-collapse-7"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion5-heading-7"
                                                    data-parent="#accordion5"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            Owner is the user
                                                            who has created the
                                                            home and configured
                                                            MIBAiO device.
                                                            He/She can add or
                                                            remove users from
                                                            the home.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion5-heading-6"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion5-collapse-6"
                                                            aria-controls="accordion5-collapse-6"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            Is there a limit to
                                                            the number to Guest
                                                            users?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion5-collapse-6"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion5-heading-6"
                                                    data-parent="#accordion5"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            No, there is no
                                                            limit on the shared
                                                            members for a home.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"DataSecurity"}>
                                        <div
                                            class="card-group-custom card-group-classic"
                                            id="accordion6"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion6-heading-5"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion6-collapse-5"
                                                            aria-controls="accordion6-collapse-5"
                                                            aria-expanded="true"
                                                        >
                                                            {" "}
                                                            What access does
                                                            MIBAiO have of my
                                                            products?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse show"
                                                    id="accordion6-collapse-5"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion6-heading-5"
                                                    data-parent="#accordion6"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            MIBAiO has
                                                            information of the
                                                            MIBAiO devices
                                                            paired to your
                                                            account, the
                                                            firmware version on
                                                            them, names assigned
                                                            to the connected
                                                            appliances.
                                                            <br />
                                                            <br />
                                                            We don't store any
                                                            passwords of your
                                                            Home Wi-Fi network
                                                            or your account with
                                                            MIBAiO.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article class="card card-custom card-classic">
                                                <div
                                                    class="card-header"
                                                    id="accordion6-heading-2"
                                                    role="tab"
                                                >
                                                    <div class="card-title">
                                                        <a
                                                            class="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#accordion6-collapse-2"
                                                            aria-controls="accordion6-collapse-2"
                                                            aria-expanded="false"
                                                        >
                                                            {" "}
                                                            How can I ensure my
                                                            devices are secure
                                                            and up to date?
                                                            <div class="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    class="collapse"
                                                    id="accordion6-collapse-2"
                                                    role="tabpanel"
                                                    aria-labelledby="accordion6-heading-2"
                                                    data-parent="#accordion6"
                                                >
                                                    <div class="card-body">
                                                        <p>
                                                            We are constantly
                                                            testing and auditing
                                                            the security of our
                                                            and partner
                                                            platforms. We make
                                                            frequent updates to
                                                            the MIBAiO app and
                                                            products to ensure
                                                            you have the latest
                                                            security.
                                                            <br />
                                                            <br />
                                                            Always update your
                                                            smart devices and
                                                            products when new
                                                            software or firmware
                                                            is made available.
                                                            These updates not
                                                            only give you latest
                                                            functionality but
                                                            keep your products
                                                            secure
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                            <Col sm={3}>
                                <Nav className="flex-column" id="tabs-faq-nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="MIBAiO4s">
                                            <span>MIBAiO 4S</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"AboutMIBAiO"}>
                                            <span>About MIBAiO</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"MIBAiOApp"}>
                                            <span>MIBAiO App</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            eventKey={"Deviceandconfiguration"}
                                        >
                                            <span>
                                                Device and configuration
                                            </span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"Members"}>
                                            <span>Members</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"DataSecurity"}>
                                            <span>Data Security</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </section>
            <CustomFooter />
        </div>
    );
};

export default FAQ;
