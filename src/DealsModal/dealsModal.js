import React from 'react'

const dealsModal = ({ dealItems, closeModal, setProductDeal, }) => {
    return (
        <>
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
                                    <button className={`modal-deals-getbtn ${activeDeal ? 'btn-active' : ''}`}
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

        </>
    )
}

export default dealsModal