import React from 'react';

import facebookIcon from "../assets/icons8-facebook-30.png";
import instagramIcon from "../assets/icons8-instagram-30.png";
import twitterIcon from "../assets/icons8-twitter-30.png";
import linkedinIcon from "../assets/icons8-linkedin-30.png";

const Footer = () => {
  return (
    <>
        <div className="bg-yellow-400 h-48">
            <div className="flex justify-center items-center">
                <div className="flex flex-col mt-6 mr-5">
                    <h2 className="font-bold">PHONE NUMBER</h2>
                    <p className="mt-1">+91 666 777 8899</p>
                    <p>+91 666 777 8899</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold">EMAIL ID</h2>
                    <p className="mt-1">AAROHAN@GMAIL.COM</p>
                </div>
            </div>
            <div className="flex mt-6 justify-center items-center">
                <img className="mr-3" src={twitterIcon} alt="twitterIcon" />
                <img className="mr-3" src={facebookIcon} alt="facebookIcon" />
                <img className="mr-3" src={linkedinIcon} alt="linkedinIcon" />
                <img src={instagramIcon} alt="instagramIcon" />
            </div>
        </div>
    </>
  )
}

export default Footer
