import React from 'react'
import './Banner2.css'
import girlPng from '../../Images/Banner2/girlPng.png'
import star from '../../Images/Star.png'
import txtbg from '../../Images/Banner2/txtbg.png'

export default function Banner2() {

    return (
        <>
            <div class="continer-fuid bannerBox">
                <div class="row Row1">
                    <div class='col-md-6 col-12 wrapper'>
                        <img class="Star-lt" src={star}></img>
                        <img class="Star-rt" src={star}></img>
                        <img src={girlPng} class="png"></img>
                        <img class="Star-lb" src={star}></img>
                        <img class="Star-rb" src={star}></img>
                    </div>
                    <div class="p-3 col-md-6 col-12 d-flex align-items-center justify-content-center ">
                        <div class="text-dark right-side">
                            <div class="txtbox">
                                <img class="txtbg" src={txtbg}></img>
                                <div class="centered">PAYDAY</div>
                                {/* <h1 class=" heading1"><b>PAYDAY</b></h1> */}
                            </div>
                            <h1 class=" heading1"><b>SALE NOW</b></h1>
                            &nbsp;
                            <p class="para">Spend minimal $100 get 30% off voucher code for your next purchase.</p>
                            <p class="para"><b>1 June - 10 June 2021</b></p>
                            <p class="para">*Terms & Conditions apply</p>
                            <button class="shop-btn btn btn-dark">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
