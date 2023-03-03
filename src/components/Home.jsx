import React, { useState } from "react";

import bgImage from "../assets/bg-image.png";

import image2 from "../assets/Image2.png";
import image3 from "../assets/Image3.png";
import image4 from "../assets/Image4.png";
import image5 from "../assets/Image5.png";
import image6 from "../assets/Image6.png";
import image7 from "../assets/Image7.png";

import lgbtIcon from "../assets/lgbt.png";
import plantationIcon from "../assets/plantation.png";
import runnerIcon from "../assets/runner.png";
import bloodDonationIcon from "../assets/blood-donation.png";

import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="bg-orange-custom bg-background-image bg-contain bg-no-repeat md:bg-cover">
        <div className="bg-amber-50 h-72 mx-10"></div>
        <div className="mt-10 bg-amber-50 h-72 m-10 p-2">
          <h2 className="font-bold text-center">ABOUT US</h2>
          <p className="font-normal text-center text-xs">
            Everything has its starting point, and its own story, and just like
            that the annual cultural fest of MIT World Peace University,
            Aarohan, has its own beginning and a unique story. Aarohan had its
            outset in the year 2014, founded by a group of passionate and
            spirited individuals at MIT College of Engineering. By the students,
            for the students is what Aarohan believes in and that's what makes
            it exceptional. We feel honored and privileged to host magnificent
            events such as Pronite, Comedy Nite, Theatre fest, and Youtuber fest
            along with various Cultural competitions for the young artists to
            provide them with a platform that is cultured, artistically
            inspired, and graceful. Throughout its legacy of 10 years, Aarohan
            has strived to set a new standard every year. Aarohan is a moment to
            live in, a time to remember, and a place to thrive in.
          </p>
        </div>
        <div className="statistics">
          <h2 className="font-bold text-center">STATISTICS</h2>
          <div
            id="stat1"
            className="bg-amber-400 border-4 rounded-md border-purple-900 text-purple-900 font-bold w-32 m-auto mt-4"
          >
            <p className="text-center mt-8">1000K+</p>
            <p className="text-center mb-8">CASH PRIZE</p>
          </div>
          <div
            id="stat1"
            className="bg-purple-500 border-4 rounded-md border-purple-900 text-purple-900 font-bold w-32 m-auto mt-4"
          >
            <p className="text-center mt-8">1500K+</p>
            <p className="text-center mb-8">REACH</p>
          </div>
          <div
            id="stat1"
            className="bg-amber-400 border-4 rounded-md border-purple-900 text-purple-900 font-bold w-32 m-auto mt-4"
          >
            <p className="text-center mt-8">170+</p>
            <p className="text-center mb-8">COLLEGES</p>
          </div>
        </div>
        <div className="mt-10 bg-amber-50 h-72 text-ellipsis overflow-y-auto m-10 p-2">
          <h2 className="font-bold text-center">VISION AND MISSION</h2>
          <p className="font-normal text-center text-xs">
            The grandest fest of Pune, MIT WPU Aarohan marks a decade of culture
            and tradition with its most monumental rendition yet. Boasting
            multiple competitions and events with esteemed guests of honor as
            well as judges, Aarohan stays true to its name and raises the bar
            year after year. The youthful and enthusiastic crowd sets an
            scintillating atmosphere that encapsulates the true essence of
            college life. The fest is by the students, for the students as each
            and every aspect of the event from the financing, management,
            designing, and decoration is handled by the students themselves.
            This promotes holistic personality development of the students while
            inculcating productivity, time management, decision making and
            discipline in them. Meanwhile, the entire fest is a non profitable
            event, as all the funds are utilised to facilitate the participants
            and the audience with no intent of financial gain. With events like
            Run For A Cause (Marathon), MIT WPU Aarohan gives back to the
            society by utilising all of its proceedings to charity, in
            sponsoring the education of the underprivileged children. Blood
            Donation and Tree Plantation drives are some of the camps organised
            to spread awareness about social issues, widening the net positive
            social footprint of Aarohan. To an invigorating and vibrant fest, we
            cordially invite you
          </p>
        </div>
        <div className="statistics">
          <h2 className="font-bold text-center">SOCIAL CAUSE</h2>
          <div
            id="stat1"
            className="bg-purple-500 border-4 rounded-md border-purple-900 text-purple-900 font-bold w-32 m-auto mt-4"
          >
            <img className="w-16 m-auto mt-3" src={lgbtIcon} alt="lgbtIcon" />
            <p className="text-center text-sm mt-2 ml-2 mr-2 mb-8">
              LGBTQ + SOCIAL AWARENESS
            </p>
          </div>
          <div
            id="stat1"
            className="bg-amber-400 border-4 rounded-md border-purple-900 text-purple-900 font-bold w-32 m-auto mt-4"
          >
            <img
              className="w-16 m-auto mt-3"
              src={bloodDonationIcon}
              alt="bloodDonationIcon"
            />
            <p className="text-center text-sm mt-2 ml-2 mr-2 mb-8">
              BLOOD DONATION
            </p>
          </div>
          <div
            id="stat1"
            className="bg-purple-500 border-4 rounded-md border-purple-900 text-purple-900 font-bold w-32 m-auto mt-4"
          >
            <img
              className="w-16 m-auto mt-3"
              src={runnerIcon}
              alt="runnerIcon"
            />
            <p className="text-center text-sm mt-2 ml-2 mr-2 mb-8">
              RUN FOR A CAUSE
            </p>
          </div>
          <div
            id="stat1"
            className="bg-amber-400 border-4 rounded-md border-purple-900 text-purple-900 font-bold w-32 m-auto mt-4"
          >
            <img
              className="w-16 m-auto mt-3"
              src={plantationIcon}
              alt="plantationIcon"
            />
            <p className="text-center text-sm mt-2 ml-2 mr-2 mb-8">
              TREE PLANTATION
            </p>
          </div>
        </div>
        <div className="mt-10 bg-amber-50 h-96 m-10 p-2">
          <h2 className="font-bold text-center">GLIMPSE OF THE FEST</h2>
          <div className="mt-3 ml-6">
            <div className="flex">
              <img src={image7} alt="image7" />
              <div className="flex flex-col ml-4">
                <img src={image5} alt="image5" />
                <img className="mt-3" src={image2} alt="image2" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col mt-2">
                <img src={image3} alt="image3" />
                <img className="mt-3" src={image4} alt="image4" />
              </div>
              <img className="ml-4 mt-2" src={image6} alt="image6" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
