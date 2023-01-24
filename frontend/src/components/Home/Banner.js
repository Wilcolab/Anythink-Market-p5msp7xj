import React from "react";
import styled from "styled-components";
import logo from "../../imgs/logo.png";

const BannerStyle = styled.div`
  color: ${props => props.theme.dark}
`

const Banner = () => {
  return (
    
    <BannerStyle>
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </BannerStyle>
    
  );
};

export default Banner;
