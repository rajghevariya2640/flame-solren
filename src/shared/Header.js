import React from "react";
import BContainer from "./BContainer";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "./Icon";

const Header = () => {
  return (
    <header>
      <div className="upper-header">
        <BContainer>
          <div className="social-icon">
            <a href="/"><FacebookIcon /></a>
            <a href="/"><TwitterIcon /></a>
            <a href="/"><YoutubeIcon /></a>
            <a href="/"><InstagramIcon /></a>
            <a href="/"><LinkedInIcon /></a>
          </div>
        </BContainer>
      </div>
    </header>
  );
};

export default Header;
