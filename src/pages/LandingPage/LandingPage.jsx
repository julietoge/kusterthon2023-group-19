/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import "./LandingPage.css";
import customa1 from "../../img/cs1.svg";
import customa2 from "../../img/cs2.svg";
import customa3 from "../../img/cs3.svg";
import customa4 from "../../img/cs4.svg";
import customa5 from "../../img/cs5.svg";
import FeatureCard from "../../components/FeatureCard";
import BtnElement from "../../components/BtnElement";
import GridTwoCard from "../../components/GridTwoCard";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import PricingCard from "../../components/PricingCard";
import InputGroup from "../../InputGroup/InputGroup"
import TextArea from "../../InputGroup/TextAreaGroup";
import logo from "../../img/Logo.png"

const LandingPage = (props) => {


  // const section1Ref = useRef(null);
  // const section2Ref = useRef(null);

  // const scrollToSection = (ref) => {
  //   if (ref && ref.current) {
  //     window.scrollTo({
  //       top: ref.current.offsetTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  
  return (
    <>
    <NavBar handleShowNavBar={props.handleShowNavBar} showNavBar={props.showNavBar} />
    <main className="landing">
      <section className="section-hero">
        <div className="container">
          <div className="hero">
            <div className="hero__content stack">
              <h1 className="hero__title">
                Simplify Your Small Business Payments with CrediEase!
              </h1>
              <p className="hero__subtitle">
                Effortlessly manage invoices, track payments, and boost cash
                flow.
              </p>

              <BtnElement className="hero__btn btn" text="Get Started" />
              <div className="customers">
                <div className="customers__img">
                  <img src={customa1} alt="customer-1" />
                  <img src={customa2} alt="customer-2" />
                  <img src={customa3} alt="customer-3" />
                  <img src={customa4} alt="customer-4" />
                  <img src={customa5} alt="customer-5" />
                </div>
                <p className="customers__text">
                  <span>160,000+</span> Customers across the Globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features__section" id="">
        <div className="container">
          <h2 className="subheading"> CrediEase Features</h2>

          <div className="features">
            {props.ftData.map((item) => (
              <FeatureCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section__reviews">
        <div className="container">
          <h2 className="subheading">What Customers Say</h2>
          <div className="reviews">
            <article className="reviews__col ">
              <div className="reviews__img">
                <img src={customa1} alt="reviewer img" />
              </div>
              <div className="reviews__info ">
                <p className="reviews__name">Olivia</p>
                <span className="reviews__comment">Efficient Tracking.</span>
              </div>
              <p className="reviews__text">
                “Efficient payment tracking is a must for my online store.
                CrediEase delivers!"
              </p>
            </article>

            <article className="reviews__col ">
              <div className="reviews__img">
                <img src={customa3} alt="reviewer img" />
              </div>
              <div className="reviews__info">
                <p className="reviews__name">Mark</p>
                <span className="reviews__comment">Simplifies it all</span>
              </div>
              <p className="reviews__text">
                “As a freelancer, staying on top of payments is crucial.
                CrediEase simplifies it all!"
              </p>
            </article>

            <article className="reviews__col ">
              <div className="reviews__img">
                <img src={customa2} alt="reviewer img" />
              </div>
              <div className="reviews__info ">
                <p className="reviews__name">Sara</p>
                <span className="reviews__comment">Game-changer</span>
              </div>
              <p className="reviews__text">
                "CrediEase transformed how I manage payments in my salon. It's a
                game-changer!"
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="subheading">How It Works</h2>

          <div className="step grid grid--2-cols grid--center-v ">
            {props.stepsData.map(item=>(
              <GridTwoCard item={item} key={item.id}/>
            ))}
          </div>
        </div>
      </section>


<section className="pricing-section" id="pricing">
        <div className="container">
          <h2 className="subheading">Pricing</h2>
          <p className="subtext"> CrediEase equips you with the complete toolkit necessary to maintain financial control and optimize your business operations seamlessly – precisely tailored to your preferences and workflow.</p>
          
          <div className="pricing">
            {props.pricingData.map(item=>(
              <PricingCard key={item.id} item={item} />
            ))}
            
          </div>
          </div>
      </section>



      <section>
        <div className="container">
          <h2 className="subheading">About Us</h2>
          <p className="subtext">At CrediEase, we understand the pivotal role efficient financial management plays in the success of your business. Our mission is to empower entrepreneurs and small business owners like you with a reliable and user-friendly payment management solution.</p>

          <div className="step grid grid--2-cols grid--center-v ">
            {props.aboutData.map(item=>(
              <GridTwoCard item={item} key={item.id}/>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="subheading">Get In Touch With... </h2>

          <div className="get-touch">
             <div className="img">
             <img src={logo} />
             </div>
              <InputGroup
              type="text"
              placeholder="Enter Your Name"
              id="name"
              name="email"
              className="field__input"
              
            />
             <InputGroup
              type="email"
              placeholder="Enter Your Email"
              id="email"
              name="email"
              className="field__input"
              
            />
            <TextArea  type="text"
              placeholder="Description"
              id="address"
              className="field__input"
              
              name="address"/>
              <BtnElement text="Submit" className="btn"/>
          </div>


        </div>
      </section>
      </main>
      <Footer/>
    </>
    
  );
};

export default LandingPage;
