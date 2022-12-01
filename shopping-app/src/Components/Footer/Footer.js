import React from 'react'
import './footer.css'
import icon from '../../Images/Footer/FASHION.png'
import vector from '../../Images/Footer/vector.png'
import facebook from '../../Images/Footer/fb.png'
import instagram from '../../Images/Footer/ig.png'
import twitter from '../../Images/Footer/twt.png'
import linkedin from '../../Images/Footer/in.png'

export default function Footer() {
    return (
        <>
            <div class="container-fluid end-box py-5">
                <div class="row footer h-100 text-left">
                    <div class="col-md-6 col-sm-6 pt-4 pl-5">
                        <div class="justify-content-center">
                            <img src={icon} class="pb-4"></img>

                            <p class="text-secondary text-nav">Complete your style with awesome <br />clothes from us.</p>
                            <br />
                        </div>
                        <div class="mb-4 d-flex  align-items-center">
                            <div class="d-flex justify-content-center align-items-center icon-sec">
                                {/* <img src={vector} class=" vector"></img> */}
                                <img src={facebook} class="fb-icon"></img>
                            </div>
                            <div class="d-flex justify-content-center align-items-center  icon-sec">
                                {/* <img src={vector} class=" vector"></img> */}
                                <img src={instagram} class="ig-icon"></img>
                            </div>
                            <div class="d-flex justify-content-center align-items-center  icon-sec">
                                {/* <img src={vector} class=" vector"></img> */}
                                <img src={twitter} class="tw-icon"></img>
                            </div>
                            <div class="d-flex justify-content-center align-items-center  icon-sec">
                                {/* <img src={vector} class=" vector "></img> */}
                                <img src={linkedin} class="li-icon"></img>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-2 d-flex justify-content-center align-items-top">
                        <div class="">
                            <a class="nav-link foot-head text-white" href="#">Company</a>
                            <a class="nav-link text-nav text-secondary" href="#">About</a>
                            <a class="nav-link text-nav text-secondary" href="#">Contact Us</a>
                            <a class="nav-link text-nav text-secondary" href="#">Suport</a>
                            <a class="nav-link text-nav text-secondary" href="#">AbCarrersout</a>

                        </div>
                    </div>
                    <div class="col-md-2 col-sm-2 d-flex justify-content-center align-items-top">
                        <div class="">
                            <a class="nav-link foot-head text-white" href="#">Quick Link</a>
                            <a class="nav-link text-nav text-secondary" href="#">Share Location</a>
                            <a class="nav-link text-nav text-secondary" href="#">Oders Tracking</a>
                            <a class="nav-link text-nav text-secondary" href="#">Size Guide</a>
                            <a class="nav-link text-nav text-secondary" href="#">FAQs</a>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-2 d-flex justify-content-center align-items-top">
                        <div class="">
                            <a class="nav-link foot-head text-white" href="#">Legal</a>
                            <a class="nav-link text-nav text-secondary" href="#">Terms & conditions</a>
                            <a class="nav-link text-nav text-secondary" href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
