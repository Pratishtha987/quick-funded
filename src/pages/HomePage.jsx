import React from "react";
import { NavLink } from "react-router-dom";
import HeroSection from "../components/HomePage/HeroSection";
import JoinCommunity from "../components/HomePage/JoinCommunity";
import PerkOfQF from "../components/HomePage/PerkOfQF";
import AccountSize from "../components/HomePage/AccountSize";
import HowItWorks from "../components/HomePage/HowItWorks";
import AccountSizeDesign from "../components/HomePage/AccountSizeDesign";

export default function HomePage() {
  return (
    <div className=" flex flex-col items-center bg-white">
      <HeroSection />
      <PerkOfQF />
      <HowItWorks />
      <AccountSizeDesign />
      {/* <AccountSize /> */}
      <JoinCommunity />
    </div>
  );
}
