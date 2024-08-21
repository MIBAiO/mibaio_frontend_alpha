import NavigationBar from "../components/navigationbar";
import CustomFooter from "../components/customfooter";
import ReactImageMagnify from "react-image-magnify";
import { HiOutlineTruck } from "react-icons/hi";
import { addProductToCart } from "../http/apis";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import { faPlus, fas, faMinus } from "@fortawesome/free-solid-svg-icons";
import { IoCloseCircle } from "react-icons/io5";
import { library } from "@fortawesome/fontawesome-svg-core";
import { toast, Toaster } from "react-hot-toast";
import "./style.css";
import WOW from "wowjs";
import { getShippingServiablity } from "../http/checkoutCalls";
library.add(fas, faPlus, faMinus);

const SmartRemote =(props) =>
{
    const dispatch = useDispatch();


    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();

        const pin = localStorage.getItem("pincode");
        if (pin) {
            setPincode(pin);
            getEstDate();
        }
    }, []);

    const [pincode, setPincode] = useState("411043");
    const [editPin, setEditPin] = useState(false);
    const [esitimatingDate, setEstimatingDate] = useState(false);

    const savePin = async () => {
        //check if pin is alid
        if (pincode.length !== 6) {
            toast.error("Please enter a valid pincode");
            return;
        }
        localStorage.setItem("pincode", pincode);
        toast.success("Pincode saved successfully");
        getEstDate();
        setEditPin(false);
    };


    const getEstDate = async () => {
        const res = await getShippingServiablity({ pincode });

        console.log(res.data.data.data.available_courier_companies[0].etd);

        setEstimatingDate(res.data.data.data.available_courier_companies[0].etd);
    }

    //Handle  click on change


    const [productImages, setProductImages] = useState([
        "images/product1/whiteFront600x600.png",
        "images/product1/whiteLeft600x600.png",
        "images/product1/whiteRight600x600.png",

    ]);

    const [currentlyViewing, setCurrentlyViewing] = useState(
        "images/product2/Cover-image.png"
    );

    const [didRedrirect, setDidRedirect] = useState(false);

    const [isNotLoggedIn, setIsNotLoggedIn] = useState(false);
    // Cart Handler      -------------------------------------------------------------------------------------
    const [productDeal, setProductDeal] = useState(1);
    const [dealItems, setDealItems] = useState([
        { id: 1, color: 'white' },
    ]);

    useEffect(() => {
        if (productDeal == 3) {
            //set data
            setDealItems([
                { id: 1, color: 'white' },
                { id: 2, color: 'black' },
                { id: 3, color: 'white' },
            ])
        } else if (productDeal == 5) {
            //set data
            setDealItems([
                { id: 1, color: 'white' },
                { id: 2, color: 'black' },
                { id: 3, color: 'black' },
                { id: 4, color: 'white' },
                { id: 5, color: 'white' },
            ])
        } else {
            setDealItems([
                { id: 1, color: 'white' }
            ])
        }

    }, [productDeal])

    //update deal items color
    const updateDealItems = (id, color) => {
        let temp = dealItems.map((item) => {
            if (item.id == id) {
                item.color = color;
            }
            return item;
        });

        setDealItems(temp);
    }

    const cartHandler = async () => {
        console.log("hi");
        if (productDeal === 0) {
            toast.error("Minimum 1 item has to be purchased");
        }
        try {
            const res = await addProductToCart({
                modelName: "MIBAiO Xtension 4S",
                items: dealItems,
                count: productDeal
            });
            setDidRedirect(true);
        } catch (err) {
            console.log("hi -> ", err);
            setIsNotLoggedIn(true);
        }
    };




    useEffect(() => {
        switch (dealItems[0].color) {
            case "white":
                setProductImages((_) => [
                    "images/product2/Cover-image.png",
                    "images/product2/Goodbye-old-remotes.png",
                    "images/product2/Learmimg-mode.png",
                    "images/product2/Poster1.png",
                    "images/product2/Whats-in-box-pg.png",
                ]);
                setCurrentlyViewing("images/product2/Cover-image.png");
                break;
            case "blue":
                setProductImages((_) => [
                    "images/product1/BlueFront600x600.png",
                    "images/product1/BlueLeft600x600.png",
                    "images/product1/BlueRight600x600.png",
                    "images/product1/Blue600x600.png",
                ]);
                setCurrentlyViewing("images/product1/BlueFront600x600.png");
                break;
            case "black":
                setProductImages((_) => [
                    "images/product2/black-front.png",
                    "images/product2/black-lhsp.png",
                    "images/product2/black-rhsp.png",
                    "images/product2/actual-representation.png",
                    "https://warylums.sirv.com/Black/Black%20360.spin?zoom=10",
                ]);
                setCurrentlyViewing("images/product2/black-front.png");
                break;

            default:
                break;
        }
    }, [dealItems]);

    // //----------- Playing / Pausing the features video on scroll-------------------------------------------------------------
    const videoRef = useRef(null);

    useEffect(() => {
        let options = {
            rootMargin: "100px",
            threshold: [0.5, 0.75],
        };

        let handlePlay = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay, options);

        observer.observe(videoRef.current);
    });

    const specsRef = useRef();

    useEffect(() => {
        if (window.location.href.includes("specs-tabs")) {
            specsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    // Modal Deals -----------------------------------------------
    const [activeDeal, setActiveDeal] = useState(null);


    const closeModal = useRef(false);

    return (
        <>
            <NavigationBar />
            <div className="container-fluid product-page">
                <div className="container mx-auto my-3">
                    {/* 2 Sections */}
                    <div className="row">
                        <div className={"col-md-6  pt-5"}>
                            <div className="text-mobile d-none d-md-block">
                                <h3 className="product-heading">
                                    Smart Universal IR blaster
                                </h3>
                                <div className="product-feature">
                                    <p>All kinds of remote controlled devices operated via one App</p>
                                    <p>Supports 5000+ Infra Red remote devices</p>
                                    <p>Dual mode WiFi + Bluetooth</p>
                                    <p>🎙️<i>eg: Alexa, Set AC to 23 degrees</i></p>
                                </div>
                                <div className="product-price my-5">
                                    <h5 className="price">MRP ₹1199.00</h5>
                                    <p>Incl. all taxes</p>
                                </div>
                            </div>

                            <div className="product-delivery mt-5">
                                <h6><HiOutlineTruck size={22} /> Delivery</h6>
                                <div className="product-delivery-pin d-flex align-items-center">
                                    <p>Delivers to <span class="text-primary">{pincode}</span> </p>
                                    <button onClick={() => setEditPin(!editPin)} className="pinchange-btn mx-auto px-2 " >Change</button>
                                </div>

                                {
                                    editPin ?
                                        <div className="product-delivery-pin-input d-flex my-3 align-items-center justify-content-start ">
                                            <input value={pincode} onChange={(e) => setPincode(e.target.value)} type="text" className="form-control pin-input" placeholder="Enter Pincode" />
                                            <button onClick={savePin} className="pin-btn">Save</button>
                                        </div> : ''
                                }

                                <b>Get it by - {esitimatingDate} </b>
                            </div>
                            <a href="https://wa.me/919834163593?text=Hi%20I'm%20interested%20to%20purchase%20Smart%20Remote">
                                <button className="btn-product"
                                    // data-toggle="modal"
                                    // data-target="#dealsModal"
                                >
                                    Add to Cart
                                </button>
                            </a>

                            {/* MODAL================================================================== */}
                            {/* Overlays */}
                            <div class="modal fade" id="dealsModal" tabindex="-1" aria-labelledby="dealsModalLabel" aria-hidden="true">
                                <div class="modal-dialog ">
                                    <div class="modal-content product-modal modal-fullscreen-sm-down">
                                        <div class="modal-header p-3 border-0 cursor-pointer" data-dismiss="modal">
                                            <IoCloseCircle size={28} data-bs-dismiss="modal" color="#242424" />
                                        </div>
                                        <button ref={closeModal} style={{ visibility: "hidden", }}></button>
                                        <div class="modal-body py-0">
                                            <h5 className="font-fw-bold text-center fs-5">
                                                Exclusive Deals
                                            </h5>
                                            <p className="text-center text-black fs-5">Upgrade Your Purchase and Enjoy Great Savings</p>

                                            <div className="row d-flex mx-5-md flex-row-reverse ">
                                                {/* Deal 1 */}
                                                <div onClick={() => setProductDeal(3)} className={`modal-deals-box d-flex flex-column flex-md-row align-items-center col-10 p-4-md p-2
                        px-md-5 mx-auto ${productDeal == 3 ? 'active-deal' : ''}`}>
                                                    <button className={`px-5 py-2 fs-5 fw-bold ${productDeal == 3 ? 'btn-active' : ''}`}>
                                                        Pack of 3
                                                    </button>
                                                    <div className="modal-deals-price px-3">
                                                        <h6>₹{((5499 * 3) - 500)}.00</h6>
                                                        <p>You save ₹500.00</p>
                                                    </div>
                                                </div>
                                                {/* Deal 2 */}
                                                <div onClick={() => setProductDeal(5)} className={`modal-deals-box d-flex flex-column flex-md-row align-items-center col-10 p-4-md p-2
                        mt-4 px-md-5 mx-auto ${productDeal == 5 ? 'active-deal' : ''}`}>
                                                    <button className={`px-5 py-2 fs-5 fw-bold ${productDeal == 5 ? 'btn-active' : ''}`}>
                                                        Pack of 5
                                                    </button>
                                                    <div className="modal-deals-price px-3">
                                                        <h6>₹{((5499 * 5) - 1000)}.00</h6>
                                                        <p>You save ₹1000.00</p>
                                                    </div>
                                                </div>
                                                {/* Buttons */}
                                                <div className="col-10 col-md-8 mx-auto p-0 my-3 d-flex d-flex flex-column flex-md-row py-4-md justify-space-between">
                                                    <button className="modal-deals-closebtn mb-3" data-dismiss="modal" onClick={() => {
                                                        setProductDeal(1);
                                                        cartHandler();
                                                    }} >No Thanks</button>
                                                    <button className={`modal-deals-getbtn btn-active `}
                                                        data-target="#chooseModel" data-toggle="modal" data-dismiss="modal">Get
                                                        Deal</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            {/* // Overlay 2 */}
                            <div class="modal fade " id="chooseModel" tabindex="-1" aria-labelledby="chooseModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-fullscreen-sm-down">
                                    <div class="modal-content product-modal">
                                        <div class="modal-header p-3 border-0 cursor-pointer" data-dismiss="modal">
                                            <IoCloseCircle size={28} data-bs-dismiss="modal" color="#242424" />
                                        </div>
                                        <button ref={closeModal} style={{ visibility: "hidden", }}></button>
                                        <div class="modal-body py-0">
                                            <h5 className="font-fw-bold text-center fs-5">
                                                Choose Your Style
                                            </h5>
                                            <p className="text-center text-black fs-5">Mix and Match the colours according to your style</p>

                                            <div className="row px-4 mt-0 pt-0 flex-row overflow-auto flex-nowrap px-2 deals-card-container">
                                                {/* Option 1 */}
                                                {
                                                    dealItems.map((product, index) => {
                                                        return (
                                                            <div onClick={() => setActiveDeal(1)} className={(dealItems.length == 3 ? "col-md-4" : "col-md-2 ")
                                                                + ` d-flex flex-column justify-content-center align-items-center col-10 mx-3 px-4 py-2 mx-auto`}>
                                                                <img className="img-fluid deal-item-image px-4-md" src={product.color == 'white' ? 'images/product2/white-front.png' : 'images/product2/black-front.png'} alt="cartproduct" />
                                                                <h4 className="fw-bold " style={{ fontWeight: 'bold', size: '1rem' }}>{product.color ===
                                                                    "black"}</h4>

                                                                <div className="d-flex justify-content-center mt-2">
                                                                    <div style={{
                                                                        aspectRatio: "1 / 1", backgroundColor: "#e5e5e5", borderRadius: "20px",
                                                                        width: "30px", height: "30px", borderStyle: "solid", border: "4px solid white",
                                                                        outline: product.color === "white" ? "2px solid #0ea5e9" : "none",
                                                                        cursor: "pointer",
                                                                    }} onClick={() => updateDealItems(product.id, 'white')}
                                                                    ></div>
                                                                    <div style={{
                                                                        aspectRatio: "1 / 1", backgroundColor: "#1a1a1a", borderRadius: "20px",
                                                                        width: "30px", height: "30px", borderStyle: "solid", marginLeft: '10px',
                                                                        border: "4px solid white", outline: product.color === "black" ? "2px solid #0ea5e9"
                                                                            : "none", cursor: "pointer",
                                                                    }} onClick={() => updateDealItems(product.id, 'black')}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="row my-0">
                                                <div className="col-md-8 col-12 mx-auto d-flex flex-column flex-md-row py-4 justify-space-between">
                                                    <button className="modal-deals-closebtn mb-2" data-target="#dealsModal" data-toggle="modal" data-dismiss="modal">Back</button>
                                                    <button className={`modal-deals-getbtn btn-active mb-2`} onClick={cartHandler} data-dismiss="modal">Choose Style </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* ======================================END-MODAL================================= */}


                        </div>

                        {/* Section - 2 Image */}
                        <div className="col-md-6 col-12 px-md-5">
                        <div
                                className="fluid__image-container wow fadeIn"
                                style={{ margin: "10px", maxWidth: "600px" }}
                            > {currentlyViewing.search("spin") !== -1 ? (
                                <>
                                    <iframe
                                        src={currentlyViewing}
                                        title="360 image"
                                        frameborder="0"
                                        allowfullscreen
                                        style={{
                                            height: "60vh",
                                            width: "70vw",
                                            maxWidth: "600px",
                                            maxHeight:"600px",
                                        }}
                                    ></iframe>
                                </>
                            ) : (
                                <ReactImageMagnify
                                    {...{
                                        smallImage: {
                                            alt: "Xtension 4C",
                                            isFluidWidth: true,
                                            src: currentlyViewing,
                                        },
                                        largeImage: {
                                            src: currentlyViewing,
                                            width: 1200,
                                            height: 1200,
                                        },

                                        enlargedImageContainerDimensions: {
                                            width: "110%",
                                            height: "110%",
                                        },
                                        enlargedImageContainerStyle: window.innerWidth > 768 ? {
                                            left: 'unset',
                                            right: '100%',
                                            marginLeft: 'unset',
                                            marginRight: '50px'
                                        } : {
                                            top: 'unset',
                                            bottom: '100%',
                                            margin: '0',
                                            marginBottom: '50px',
                                            left: '0',
                                            right: '0'
                                        },
                                        isActivatedOnTouch: true,
                                        enlargedImageContainerClassName:
                                            "customEnlargedContainer",
                                    }}
                                />
                            )}
                            </div>

                            {/* Small Images */}
                            <div
                                className="product-small d-flex justify-content-around smallProducts"
                                style={
                                    {
                                        // maxWidth: "160px",
                                    }
                                }
                            >
                                {productImages.map((val, idx) => (
                                    <div
                                        className="small-img-col"
                                        style={{
                                            border: "0.5px solid #000",
                                            borderRadius: 5,
                                            padding: 10,
                                            cursor: "pointer",
                                            margin: "5px",
                                            marginTop: "5px",
                                            maxWidth: "90px",
                                        }}
                                        onClick={() => setCurrentlyViewing(val)}
                                        key={idx}
                                    >
                                        <img
                                            src={
                                                val.search("spin") !== -1
                                                    ? "images/360-degrees.png"
                                                    : val
                                            }
                                            alt={val}
                                            className="img-fluid small-img"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-mobile d-block d-md-none">

                                <h3 className="product-heading">
                                    Xtension 4C & 4C+
                                </h3>
                                <div className="product-feature">
                                    <p>4 + 1 Fan speed Smart Switch Controller</p>
                                    <p>Retrofit model fits inside switchboard</p>
                                    <p>Wireless connectivity WiFi + Bluetooth</p>
                                    <p><i>Alexa, Set fan speed to 3</i></p>
                                </div>
                                <div className="product-price my-5">
                                    <h5 className="price">MRP ₹4499.00</h5>
                                    <p>Incl. all taxes</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className="product-info mt-5">
                        <h5 className="">Product Info</h5>
                        <p class="big">Unleash the Power of Smart Control
                        Imagine being able to control all your infrared (IR) devices from the convenience of your smartphone, 
                        no matter where you are in the world. With our Smart Universal IR Blaster, 
                        this dream becomes a reality. Seamlessly integrate all your IR appliances into one smart ecosystem,
                        offering you unprecedented convenience, comfort, and control. <br />
                        Whether it's your TV, air conditioner, fan, or home theater system, our IR blaster is compatible with thousands of brands and models, making it a truly universal solution.
                        </p>
                    </div>
                    <div className="product-features-card mt-3">
                        <h5>Features</h5>
                        <div className="row pl-3">
                            <div className="col-md-10 d-flex mt-0 features-slide">
                                {/* Cards */}
                                <div className="features-card mr-2 border border-primary p-3 rounded-5">
                                    <img src="/svg-icons/clock_icon.svg" alt="clock-icon" className="" />
                                    <p>Automation</p>
                                </div>
                                <div className="features-card mr-2 border border-primary p-3 rounded-5">
                                    <img src="/svg-icons/voice_icon.svg" alt="clock-icon" className="" />
                                    <p>Voice Control</p>
                                </div>
                                <div className="features-card mr-2 border border-primary p-3 rounded-5">
                                    <img src="/svg-icons/share_icon.svg" alt="clock-icon" className="" />
                                    <p>Shared Access</p>
                                </div>
                                <div className="features-card mr-2 border border-primary p-3 rounded-5">
                                    <img src="/svg-icons/charge_icon.svg" alt="clock-icon" className="" />
                                    <p>Surge<br /> Protection</p>
                                </div>
                                <div className="features-card mr-2 border border-primary p-3 rounded-5">
                                    <img src="/svg-icons/os_icon.svg" alt="clock-icon" className="" />
                                    <p>Multi-Platform Support</p>
                                </div>
                                <div className="features-card mr-2 border border-primary p-3 rounded-5">
                                    <img src="/svg-icons/energy_icon.svg" alt="clock-icon" className="" />
                                    <p>Energy Efficient</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >

            {/* Old */}
            < div className="tabs" ref={specsRef} >
                <h3
                    style={{
                        fontWeight: "bold",
                        color: "#0accbe",
                        textAlign: "center",
                        marginBottom: "10px",
                    }}
                >
                    What the Manufacturer has to say?
                </h3>
                <input type="radio" name="tabs" id="tab1" defaultChecked />
                <label for="tab1" id="tab-l1">
                    <i className="fas fa-book"></i>
                    <span>Features</span>
                </label>

                <input type="radio" name="tabs" id="tab2" />
                <label for="tab2" id="tab-l2">
                    <i className="fas fa-microchip"></i>
                    <span>Specifications</span>
                </label>

                <input type="radio" name="tabs" id="tab3" />
                <label for="tab3" id="tab-l3">
                    <i className="fas fa-comments"></i>
                    <span>Reviews</span>
                </label>

                <div id="tab-content1" className="tab-content">
                    <video
                        id="myvideo"
                        src="images/IR-Blaster-Video.mp4"
                        style={{
                            width: "100%",
                            //marginBottom: "-5%",
                            // transitionDelay: " 1s",
                            borderRadius: "10px",
                        }}
                        ref={videoRef}
                        // autoPlay="true"
                        muted="true"
                    ></video>
                    <div className="container">
                        <div className="row row-50 justify-content-xl-between align-items-center">
                            <div
                                className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
                                data-wow-delay=".5s"
                            >
                                <div className="unit unit-spacing-1 align-items-center">
                                    <div className="unit-left">
                                        <div className="icon icon-style-1 mdi mdi-clock"></div>
                                    </div>
                                    <div className="unit-body">
                                        <h4>Universal Compatibility</h4>
                                    </div>
                                </div>
                                <div className="block-4 offset-top-4">
                                    <div className="quote-light-text">
                                        <p className="big">
                                            Automate your daily routine
                                            tasks by scheduling your
                                            appliance(s) to run at a
                                            specified time or set a timer to
                                            turn on/off your appliance(s)
                                            automatically.
                                        </p>
                                    </div>
                                    <blockquote className="quote-light">
                                        <div className="quote-light-text">
                                            <ul className="list-marked list-marked_secondary">
                                                <li>
                                                All-in-One Control: Whether it's your TV, air conditioner, fan, or home theater system, 
                                                MIBAiO IR blaster is compatible with thousands of brands and models, 
                                                making it a truly universal solution.
                                                </li>
                                                <li>
                                                Seamless Integration: Pair effortlessly with your smartphone through our intuitive app, 
                                                available for both iOS and Android devices.
                                                </li>
                                                <li>
                                                Control from Anywhere: Forgot to turn off the air conditioner before leaving home? No problem. With our IR blaster, you can manage all your IR devices from anywhere in the world, ensuring your home is always just the way you like it.
                                                </li>
                                            </ul>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>

                            <div
                                className="col-md-4 col-lg-5 wow fadeInRightSmall right-pattern"
                                data-wow-delay=".5s"
                                id="Schedule"
                            >
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="images/product2/Poster1.png"
                                        alt="IR-blaster-support"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row-50 justify-content-xl-between align-items-center flex-md-row-reverse">
                            <div
                                className="col-md-8 col-lg-7 col-xl-6 wow fadeInRightSmall"
                                data-wow-delay=".5s"
                            >
                                <div className="unit unit-spacing-1 align-items-center">
                                    <div className="unit-left">
                                        <div className="icon icon-style-1 mdi mdi-plus-network"></div>
                                    </div>
                                    <div className="unit-body">
                                        <h4>Automation & Scheduling</h4>
                                    </div>
                                </div>
                                <div className="block-4 offset-top-4">
                                    <p className="big">
                                        Set desired automations and schedules
                                    </p>
                                    <blockquote className="quote-light">
                                        <div className="quote-light-text">
                                            <ul className="list-marked list-marked_secondary">
                                                <li>
                                                Smart Routines: Create custom routines and schedules for your IR devices to match your lifestyle. Wake up to your favorite morning show or come home to a perfectly cooled room—your home adapts to you.
                                                </li>
                                                <li>
                                                Energy Efficiency: Save on energy bills by automating your devices to turn off when not needed, ensuring your home runs efficiently and sustainably.
                                                </li>
                                            </ul>
                                        </div>
                                    </blockquote>
                                    <div className="group-buttons-responsive group-middle"></div>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-lg-5 wow fadeInLeftSmall left-pattern"
                                data-wow-delay=".5s"
                            >
                                <div className="item">
                                    <img
                                        src="images/product2/Goodbye-old-remotes.png"
                                        alt="IR-blaster-MIBAiO"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row-50 justify-content-xl-between align-items-center">
                            <div
                                className="col-md-8 col-lg-7 col-xl-6 wow fadeInLeftSmall"
                                data-wow-delay=".5s"
                            >
                                <div className="unit unit-spacing-1 align-items-center">
                                    <div className="unit-left">
                                        <div className="icon icon-style-1 mdi mdi-microphone"></div>
                                    </div>
                                    <div className="unit-body">
                                        <h4>Sleek and Discreet Design</h4>
                                    </div>
                                </div>
                                <div className="block-4 offset-top-4">
                                    <p className="big">
                                        Can be placed anywhere{" "}
                                    </p>
                                    <blockquote className="quote-light">
                                        <div className="quote-light-text">
                                            <ul className="list-marked list-marked_secondary">
                                                <li>
                                                Compact & Elegant: Our IR blaster boasts a modern, minimalist design that blends seamlessly with your home décor, adding a touch of sophistication to any room.
                                                </li>
                                                <li>
                                                Easy Setup: Get started in minutes with our simple, step-by-step installation guide—no technical expertise required.
                                                </li>
                                            </ul>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <div
                                className="col-md-4 col-lg-5 wow fadeInRightSmall"
                                data-wow-delay=".5s"
                            >
                                <div className="item">
                                    <img
                                        src="images/product2/IR-blaster-ortho-room.jpg"
                                        alt="Retrofit design picture"
                                        width="100%;"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                                    <div className="content">
                                        <h3>
                                            Why chose MIBAiO's{" "}
                                            <span style={{ color: "#0accbe" }}>
                                                Smart Remote?
                                            </span>
                                        </h3>
                                        <br />
                                        <h5 style={{ color: "#697484" }}>
                                            Smart Remote enables{" "}
                                            <span style={{ color: "#4a80f0" }}>
                                                control and monitoring
                                            </span>{" "}
                                            of your old AC/TV/Audio system via App!
                                        </h5>
                                    </div>
                                    <br />

                                    <br />

                                    <div className="accordion-list" id="why-us">
                                        <div
                                            className="card-group-custom card-group-classic card-group-classic_1"
                                            role="tablist"
                                            aria-multiselectable="false"
                                        >
                                            <article className="card card-custom card-classic">
                                                <div
                                                    className="card-header"
                                                    id="app-accordion-heading-4"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#app-accordion-collapse-4"
                                                            aria-controls="app-accordion-collapse-4"
                                                            aria-expanded="true"
                                                        >
                                                            <span
                                                                style={{
                                                                    color: "#0accbe",
                                                                }}
                                                            >
                                                                01
                                                            </span>{" "}
                                                            &nbsp; Ultimate Convenience
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse show"
                                                    id="app-accordion-collapse-4"
                                                    role="tabpanel"
                                                    aria-labelledby="app-accordion-heading-4"
                                                    data-parent="#why-us"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                        Take control of your home like never before,
                                                         with the ability to manage all your IR devices from a single app, wherever you are.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="card card-custom card-classic">
                                                <div
                                                    className="card-header"
                                                    id="app-accordion-heading-1"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#app-accordion-collapse-1"
                                                            aria-controls="app-accordion-collapse-1"
                                                            aria-expanded="false"
                                                        >
                                                            <span
                                                                style={{
                                                                    color: "#0accbe",
                                                                }}
                                                            >
                                                                02
                                                            </span>{" "}
                                                            &nbsp; Enhanced Lifestyle
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse"
                                                    id="app-accordion-collapse-1"
                                                    role="tabpanel"
                                                    aria-labelledby="app-accordion-heading-1"
                                                    data-parent="#why-us"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                        Enjoy the freedom to customize your living environment to suit
                                                        your needs, with automated routines and hands-free voice control.
                                                            <br />
                                                            Easy to operate...
                                                            Makes life simple!
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>

                                            <article className="card card-custom card-classic">
                                                <div
                                                    className="card-header"
                                                    id="app-accordion-heading-2"
                                                    role="tab"
                                                >
                                                    <div className="card-title">
                                                        <a
                                                            className="card-link collapsed"
                                                            role="button"
                                                            data-toggle="collapse"
                                                            href="#app-accordion-collapse-2"
                                                            aria-controls="app-accordion-collapse-2"
                                                            aria-expanded="false"
                                                        >
                                                            <span
                                                                style={{
                                                                    color: "#0accbe",
                                                                }}
                                                            >
                                                                03
                                                            </span>{" "}
                                                            &nbsp; Unmatched Compatibility
                                                            <div className="card-arrow"></div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div
                                                    className="collapse"
                                                    id="app-accordion-collapse-2"
                                                    role="tabpanel"
                                                    aria-labelledby="app-accordion-heading-2"
                                                    data-parent="#why-us"
                                                >
                                                    <div className="card-body">
                                                        <p>
                                                        Our IR blaster is designed to work with a vast array of devices, 
                                                        ensuring that whatever IR appliance you have, it's always within your control.
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                            <p>Make the smart choice today. Transform your home into a modern, connected space with the Smart Universal IR Blaster. Experience the future of home automation, and enjoy the ultimate convenience, comfort, and control that you deserve.</p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                                    style={{
                                        backgroundImage:
                                            ' url("images/Picture1.jpg")',
                                    }}
                                    data-aos="zoom-in"
                                    data-aos-delay="150"
                                >
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    
                </div>
                <div id="tab-content2" className="tab-content">
                    <p style={{ float: "left" }}>
                        <ul>
                            <li>
                                <strong>Product Dimensions ‏ :</strong> ‎ 7.5
                                x 3.5 x 2.75 cm
                            </li>
                            <li>
                                <strong>Date First Available ‏ :</strong> ‎
                                22 July 2024
                            </li>
                            <li>
                                <strong>Manufacturer ‏ :</strong> ‎ MIBAiO
                                Elmec Smart Automations Pvt. Ltd.
                            </li>
                            <li>
                                <strong>Operating frequency ‏ :</strong> ‎
                                50Hz-60 Hz
                            </li>
                            <li>
                                <strong>Operating voltage ‏ :</strong> ‎
                                100-250 Volt AC
                            </li>
                            <li>
                                <strong>Communication protocol ‏ :</strong>{" "}
                                ‎ WiFi 2.4GHz + Bluetooth 5.0
                            </li>
                            <li>
                                <strong>Item model number ‏ :</strong> ‎
                                MX4C10XX
                            </li>
                            <li>
                                <strong>Country of Origin ‏ :</strong> ‎
                                India
                            </li>
                            <li>
                                <strong>Item Weight ‏ :</strong> ‎ 120 g
                            </li>
                            <li>
                                <strong>Included in Box ‏ :</strong> ‎ 1
                                x Xtension 4C, 1 x Instruction manual, Connecting cables
                            </li>
                        </ul>
                    </p>
                </div>

                <div id="tab-content3" className="tab-content">
                    <div className="._2wzgFH">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <div className="_3LWZlK _1BLPMq">
                                    5
                                    <img
                                        src="images/star.svg"
                                        className="_1wB99o"
                                    />
                                </div>
                                &nbsp; Prasad S &nbsp;{" "}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 12 12"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="_2a1p_T"
                                >
                                    <g>
                                        <circle
                                            cx="6"
                                            cy="6"
                                            r="6"
                                            fill="#878787"
                                        ></circle>
                                        <path
                                            stroke="#FFF"
                                            stroke-width="1.5"
                                            d="M3 6l2 2 4-4"
                                            fill="#878787"
                                        ></path>
                                    </g>
                                </svg>
                                &nbsp; Verified Buyer
                            </div>
                            <span className="rev-btn">Add Review</span>
                        </div>
                        <div className="review_row">
                            <div className="t-ZTKy">
                                <div>
                                    <div className="">
                                        Excellent Home Automation product price should be around 4K.
                                        Overall, value for money. Ideal for my home
                                        switchboard. Can control with Alexa and works without Internet too!!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <CustomFooter />
        </>
    );
};

export default SmartRemote;