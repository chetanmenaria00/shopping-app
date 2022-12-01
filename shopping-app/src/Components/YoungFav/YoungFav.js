import React from 'react'
import first from '../../Images/YoungFav/First.png'
import second from '../../Images/YoungFav/Second.png'
import './young.css'

export default function YoungFav() {
    return (
        <>
            <div class="container mt-5">
                <h3 class="p-2">Young's Favourite....</h3>
                <div class="row">
                    <img class="col-6 col-xl-6 col-sm-6" src={first}></img>
                    <img class="col-6 col-xl-6 col-sm-6" src={second}></img>
                </div>
                <div class="row">
                    <h6 class="pl-4 pt-2 col-6 col-xl-6 col-sm-6">Trending on instagram</h6>
                    <h6 class="pl-4 pt-2 col-6 col-xl-6 col-sm-6">All Under $40</h6>
                </div>
                <div class="row">
                    <p class="pl-4 col-6 col-xl-6 col-sm-6">Explore Now!</p>
                    <p class="pl-4 col-6 col-xl-6 col-sm-6">Explore Now!</p>
                </div>
            </div>
        </>
    )
}
