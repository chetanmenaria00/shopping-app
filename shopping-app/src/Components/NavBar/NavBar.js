import React from 'react'
import './navbar.css'
import Logo from '../../Images/NavBar/Logo.png'
import Fashion from '../../Images/NavBar/FASHION.png'

export default function NavBar() {
    return (
        <>
            <nav class="container navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand navsec" href="#">
                    <img src={Logo} width="30" height="30" class="logo-nav d-inline-block align-top" alt="" />
                    <img src={Fashion} class="img d-inline-block align-top" alt="" />
                </a>
                <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse top-nav" id="navbarSupportedContent">
                    <div class="Navlist">
                        <ul class="navbar-nav linktxt">
                            <li class="pr-3 nav-item">
                                <a class="nav-link text-nav" href="#">CATALOGUE</a>
                            </li>
                            <li class="pr-3 nav-item">
                                <a class="nav-link text-nav" href="#">FASHION</a>
                            </li>
                            <li class="pr-3 nav-item">
                                <a class="nav-link text-nav" href="#">FAVOURITE</a>
                            </li>
                            <li class="pr-3 nav-item">
                                <a class="nav-link text-nav" href="#">LIFESTYLE</a>
                            </li>
                        </ul>
                        <button class="signup-btn btn btn-dark">SIGN UP</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
