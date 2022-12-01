import React from 'react'
import './banner.css'
import star1 from '../../Images/star1.png'
import Girl from '../../Images/Banner/girl_img.png'
import Yellow from '../../Images/Banner/Yellow.png'

export default function Banner() {

    return (
        <>
            <div class="container mb-3 Box">
                <div class="row Row1">
                    <div class="mx-auto col-md-6 col-12 d-flex align-items-center justify-content-center">
                        <div class="">
                            <h1 class="headtxt">LET'S
                                EXPLORE <br />
                                UNIQUE
                                CLOTHES.</h1>
                                &nbsp;
                            <p class="paratext">Live for Influential and Innovative fashion!</p>
                            &nbsp;
                            <div class="row mx-auto ">
                            <img src={Yellow} class="col-6 yellow"></img>
                            <button class="shop-btn col-6 btn btn-dark">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-6 col-12'>
                        <img class="star-rt" src={star1}></img>
                        <img class="star-lt" src={star1}></img>
                        <img src={Girl} class="girl"></img>
                        <img class="star-rb" src={star1}></img>
                        <img class="star-lb" src={star1}></img>
                    </div>
                </div>
            </div>
        </>
    )
}
