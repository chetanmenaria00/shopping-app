import React from 'react'
import card1 from '../../Images/Cards/card1.png'
import card2 from '../../Images/Cards/card2.png'
import card3 from '../../Images/Cards/card3.png'
import arrow from '../../Images/Cards/Arrow.png'
import './card.css'

export default function Card() {
    return (
        <>
            <div class="container">
                <div class="my-3 container justify-content-center row CardBox">
                    <div class=" SetCard col-sm-12 col-md-4 col-lg-3 hoverCard">
                        <img class=" SetImg card-img-top" src={card1} alt="Card image cap" />
                        <div class="card-body">
                            <div class="d-flex">
                                <h5 class="SetText card-title text-left">Hoodies & Sweetshirt</h5>
                                <img class="arrow1" src={arrow}></img>
                            </div>
                            <p class="card-text text-secondary sub-txt">Explore Now!</p>
                        </div>
                    </div>
                    <div class=" SetCard col-sm-12 col-md-4 col-lg-3 hoverCard">
                        <img class="SetImg card-img-top" src={card2} alt="Card image cap" />
                        <div class="card-body">
                            <div class="d-flex">
                                <h5 class="SetText card-title text-left">Coats & Parkas</h5>
                                <img class="arrow2" src={arrow}></img>
                            </div>

                            <p class="card-text text-secondary sub-txt">Explore Now!</p>
                        </div>
                    </div>
                    <div class=" SetCard col-sm-12 col-md-4 col-lg-3 hoverCard">
                        <img class="SetImg card-img-top" src={card3} alt="Card image cap" />
                        <div class=" card-body">
                            <div class="d-flex">
                                <h5 class="SetText card-title text-left">Tees & T-Shirt</h5>
                                <img class="arrow3" src={arrow}></img>
                            </div>
                            <p class="card-text text-secondary sub-txt">Explore Now!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
