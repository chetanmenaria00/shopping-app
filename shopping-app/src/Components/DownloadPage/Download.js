import React from 'react'
import './download.css'
import Mobile from '../../Images/Download/Mobile.png'
import Btn1 from '../../Images/Download/Btn1.png'
import Btn2 from '../../Images/Download/Btn2.png'
import one from '../../Images/Download/1.png'
import two from '../../Images/Download/3.png'
import three from '../../Images/Download/2.png'
import four from '../../Images/Download/4.png'

export default function Download() {

    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 class="Headtxt">DOWNLOAD APP &<br />GET THE VOUCHER!</h1>
                            &nbsp;
                            &nbsp;
                            <p class="paratxt">Get 30% off for first transaction using<br />Rondovision mobile app for now.</p>
                            &nbsp;
                            &nbsp;
                            <div class="row">
                                <button class="appbtn btn col-sm-12 col-md-6"><img src={Btn2}></img></button>
                                <button class="appbtn btn col-sm-12 col-md-6"><img src={Btn1}></img></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 pl-5">
                        {/* <img class="one" src={one}></img> */}
                        {/* <img class="two" src={two}></img> */}
                        <img class="mobile" src={Mobile}></img>
                        {/* <img class="three" src={three}></img> */}
                        {/* <img class="four" src={four}></img> */}
                    </div>
                </div>
            </div>
        </>
    )
}