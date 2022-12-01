import React from 'react'
import './Banner3.css'

export default function Banner3() {
    return (
        <>
            <div class="container-fluid banner3 text-center">
                <div class="">
                <p class="para1-txt">JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</p>
                &nbsp;
                <p class="para2-txt">Type your email down below and be young wild generation</p>
                &nbsp;
                <div class="mail-div">
                    <div class="input-group">
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Add your email here" required />
                        <button class=" btn btn-dark">SEND</button>
                    </div>
                </div>
                &nbsp;
            </div>
        </div>
        </>
    )
}
