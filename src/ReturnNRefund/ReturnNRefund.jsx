import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import CustomFooter from "../components/customfooter";
import PageHeadder from "../components/PageHeadder";

const ReturnNRefund = () => {
    return (
        <div className="page">
            <section className="section page-header-1 header-section">
                {/* <NavigationBar /> */}
                <PageHeadder
                    quote="Return & Refund"
                    showYouAre={false}
                    info="With our strict quality assurance processes in place, our shipping team makes sure that you receive the exact product, you have ordered. Still, in case you get some other product or there is any manufacturing defect in the product, we provide an easy return policy. It is important to read these points before initiating a purchase or return of the product."
                />
            </section>
            <section class="section section-md bg-gray-100">
                <div class="container">
                    <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey={"Generalinformation"}
                    >
                        <Row className="tabs-custom tabs-line tabs-line-responsive">
                            <Col sm={9}>
                                <Tab.Content className="d-block">
                                    <Tab.Pane eventKey={"Generalinformation"}>
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
                                                            Here are some points
                                                            to keep in mind when
                                                            you receive the
                                                            product:
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
                                                            Do not accept any
                                                            product which seems
                                                            to be tampered with
                                                            by the courier
                                                            services.
                                                        </p>
                                                        <p>
                                                            Please make a video
                                                            while opening the
                                                            Packaging as
                                                            supporting proof.
                                                        </p>
                                                        <p>
                                                            Do not break the
                                                            seal of the product
                                                            if you have any
                                                            doubts/questions
                                                            about authenticity.
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
                                                            Returns will be
                                                            accepted only when
                                                            the following
                                                            conditions are met:
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
                                                            The product is
                                                            returned in proper
                                                            original packaging
                                                            with no damage,
                                                            scratches or dents.
                                                        </p>
                                                        <p>
                                                            Product packaging is
                                                            preserved in
                                                            original condition
                                                            with no damage,
                                                            scratches or grease
                                                            stains
                                                        </p>
                                                        <p>
                                                            The product is
                                                            unused and in the
                                                            same condition as it
                                                            was at the time of
                                                            receipt (with no
                                                            sign of
                                                            installation)
                                                        </p>
                                                        <br />
                                                        <p>
                                                            Note: If the
                                                            received part(s) is
                                                            damaged, a return
                                                            request should be
                                                            initiated within 7
                                                            days of product
                                                            delivery.
                                                            <br />
                                                            If the product is
                                                            attempted to be open
                                                            by the customer,
                                                            unathorized person
                                                            apart from MIBAiO
                                                            Engineers, The
                                                            warranty is
                                                            immediately void.❌
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"Returnprocess"}>
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
                                                            How to initiate
                                                            return process ?
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
                                                            Customers can
                                                            initiate the return
                                                            by sending the mail
                                                            to info@mibaio.in.
                                                        </p>
                                                        <p>
                                                            Customers shall
                                                            check the
                                                            consignment for any
                                                            Physical damage and,
                                                            if any found,
                                                            mention this in POD
                                                            (Proof of Delivery)
                                                            documents of
                                                            Logistics.
                                                        </p>
                                                        <p>
                                                            We recommend taking
                                                            photos of packages
                                                            received and
                                                            shooting an
                                                            unpacking video of
                                                            the product.In case
                                                            of any problem with
                                                            the product, share
                                                            it at
                                                            info@mibaio.in.
                                                        </p>
                                                        <p>
                                                            In case of a return,
                                                            do make a video
                                                            while repacking the
                                                            products. This video
                                                            has to be sent to a
                                                            Whatsapp number
                                                            provided by the
                                                            company.
                                                        </p>
                                                        <p>
                                                            While returning the
                                                            package, the
                                                            customer should make
                                                            sure that the
                                                            products are
                                                            repacked properly to
                                                            ensure it doesn’t
                                                            get damaged in
                                                            transit as the
                                                            company will not be
                                                            liable for
                                                            refunds/return in
                                                            case the part got
                                                            damaged (while in
                                                            transit) due to
                                                            improper packaging.
                                                        </p>
                                                        <p>
                                                            The shipping charges
                                                            incurred by the
                                                            customer in sending
                                                            the products back to
                                                            the company, will
                                                            not be refunded.
                                                        </p>
                                                        <p>
                                                            If the return claim
                                                            was rejected, we
                                                            will send it back on
                                                            the customer’s
                                                            request or scrap
                                                            after 30 days of
                                                            keeping it in stock.
                                                            The customer will be
                                                            responsible for
                                                            paying all related
                                                            shipping costs.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"Refundprocess"}>
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
                                                            When will I get my
                                                            refund ?
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
                                                            After the returned
                                                            part is received,
                                                            inspected, and
                                                            approved by our QC
                                                            team, it would take
                                                            1 day for the refund
                                                            to initiate.
                                                        </p>
                                                        <p>
                                                            It usually takes up
                                                            to 5-7 working days
                                                            for the refund
                                                            amount to reflect in
                                                            your source account.
                                                            The refund transfer
                                                            details will be
                                                            shared with the
                                                            customer.
                                                        </p>
                                                        <p>
                                                            If you do not
                                                            receive the refund
                                                            within the above
                                                            said time, please
                                                            contact your bank.
                                                        </p>
                                                        <p>
                                                            For any help please
                                                            feel free to call us
                                                        </p>
                                                        <br />
                                                        <p>
                                                            <strong>
                                                                Refund Payment
                                                            </strong>
                                                            : In order to
                                                            protect Payer,
                                                            refunds will be done
                                                            only through the
                                                            Original Mode of
                                                            Payment and to the
                                                            same account from
                                                            which it originated
                                                            i.e the Source
                                                            account.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey={"Shipping"}>
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
                                                            General Process
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
                                                            We try to maintain
                                                            accurate stock
                                                            counts on our
                                                            website but from
                                                            time to time there
                                                            may be a stock
                                                            discrepancy and we
                                                            will not be able to
                                                            fulfil all your
                                                            items at the time of
                                                            purchase. In this
                                                            instance, we will
                                                            fulfil the available
                                                            products to you, and
                                                            contact you about
                                                            whether you would
                                                            prefer to await
                                                            restocking of the
                                                            back-ordered item or
                                                            if you would prefer
                                                            for us to process a
                                                            refund.
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
                                                            {" "}
                                                            Shipping Costs
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
                                                            Currently, we are
                                                            not charging any
                                                            shipping costs for
                                                            delivering orders
                                                            across India.
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
                                                            Delivery Terms
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
                                                            In general, domestic
                                                            shipments are in
                                                            transit for 7-10
                                                            days. Orders are
                                                            usually dispatched
                                                            within 1-3 days of
                                                            payment of the
                                                            order. For the
                                                            change of delivery
                                                            address requests, we
                                                            are able to change
                                                            the address at any
                                                            time before the
                                                            order has been
                                                            dispatched. For
                                                            changing delivery
                                                            address you will
                                                            have to inform us on
                                                            our email id –
                                                            info@mibaio.in. If
                                                            an item is out of
                                                            stock, we will wait
                                                            for the item to be
                                                            available before
                                                            dispatching your
                                                            order. Existing
                                                            items in the order
                                                            will be reserved
                                                            while we await this
                                                            item. If the
                                                            delivery time has
                                                            exceeded the
                                                            forecasted time,
                                                            please contact us so
                                                            that we can conduct
                                                            an investigation.
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
                                                            Tracking
                                                            Notifications
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
                                                            Upon dispatch,
                                                            customers will
                                                            receive a tracking
                                                            link on your
                                                            Whatsapp number from
                                                            which they will be
                                                            able to follow the
                                                            progress of their
                                                            shipment based on
                                                            the latest updates
                                                            made available by
                                                            the shipping
                                                            provider.
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
                                                            Taxes
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
                                                            Tax has already been
                                                            applied to the price
                                                            of the goods as
                                                            displayed on the
                                                            website
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
                                                            Process for parcel
                                                            lost in transit:
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
                                                            We will process a
                                                            refund or
                                                            replacement as soon
                                                            as the courier has
                                                            conducted an
                                                            investigation and
                                                            deemed the parcel
                                                            lost.
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
                                        <Nav.Link eventKey="Generalinformation">
                                            <span>General information</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"Returnprocess"}>
                                            <span>Return process</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"Refundprocess"}>
                                            <span>Refund process</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={"Shipping"}>
                                            <span>Shipping</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                    </Tab.Container>
                    <a class="privacy-link" href="mailto:privacy@mibaio.xyz">
                        <strong>Note: </strong>Our customers are our valuable
                        assets. In case you have to ask for a refund, our team
                        will cooperate and coordinate with you in the complete
                        process.
                        <br />
                        For any queries, please feel free to get in touch with
                        us at info@mibaio.in
                    </a>
                </div>
            </section>
            <CustomFooter />
        </div>
    );
};

export default ReturnNRefund;
