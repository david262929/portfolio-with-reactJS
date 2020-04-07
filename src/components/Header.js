import React, {Component} from 'react';
// import $ from "jquery";
import profileImg from '../images/profile.jpg';
import Contact from './Contact';
import './styles/header.scss';

class Header extends Component {
    constructor() {
        super();
        this.usedImageIds = [];
        // this.state = {
        //     topText: "",
        //     bottomText: "",
        //     randomImg: "http://i.imgflip.com/1bij.jpg",
        //     allMemeImgs : [],
        // };
        // console.log($('body'));
    }


    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className='row profile'>
                        <div className="profile-data">
                            <div className='profile-img '>
                                {/*<img src={profileImg} alt="David Ghazaryan"/>*/}
                            </div>
                            <div className="profile-content ">
                                {/*<h1 className="name">David Ghazaryan</h1>*/}
                                {/*<h2 className="desc">Middle Web developer (04/2018 - Present) - Yerevan, Armenia</h2>*/}
                                <ul className="social list-inline">

                                    {/*<li><a href="https://plus.google.com/u/0/108963412741369288877" target="_blank"><i class="fa fa-google-plus"></i></a></li>*/}
                                    <li><a href="https://github.com/david262929" target="_blank" rel="noopener noreferrer"><i
                                        className="fa fa-github-alt"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/david262929/" target="_blank" rel="noopener noreferrer"><i
                                        className="fa fa-linkedin"></i></a></li>
                                    {/*<li><a href="https://facebook.com/david262929" target="_blank"><i class="fa fa-facebook"></i></a></li>*/}
                                    <li><a href="https://stackoverflow.com/users/7141122/david-ghazaryan"
                                           target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a></li>
                                    <li><a href="https://twitter.com/davidghazaryan2" target="_blank" rel="noopener noreferrer"><i
                                        className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://coderwall.com/david262929" target="_blank" rel="noopener noreferrer"><i
                                        className="fa fa-coderwall">
                                        <svg version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5" cy="5" r="1.4142" fill="#FFFEFA"/>
                                            <circle cx="10" cy="5" r="1.4142" fill="#FFFEFA"/>
                                            <circle cx="15" cy="5" r="1.4142" fill="#FFFEFA"/>
                                            <circle cx="10" cy="10" r="1.4142" fill="#FFFEFA"/>
                                            <circle cx="15" cy="10" r="1.4142" fill="#FFFEFA"/>
                                            <circle cx="15" cy="15" r="1.4142" fill="#FFFEFA"/>
                                        </svg>
                                    </i></a></li>
                                </ul>
                            </div>
                        </div>
                        <Contact />
                    </div>
                </div>
                <ul className="languages">
                    <li className="language"><a href="./am">AM</a></li>
                    <li className="language active"><a href="./en">EN</a></li>
                    <li className="language"><a href="./ru">RU</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;
