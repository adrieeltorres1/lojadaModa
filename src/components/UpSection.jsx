import React from "react";
import styled from "styled-components";
import BannerInicial from '../assets/Banner.png'

const ImgContainer = styled.div`
    margin: 0 auto;
    margin-top: 15px;
    width: 980px; 
    height: 500px; 
    overflow: hidden; 
    & img {
        width: 100%;
        height: auto;
    }
`;

const SectionUp = () => {
    return ( 
        <ImgContainer>
            <img src="./src/assets/banner.png" alt="" srcset="" />
        </ImgContainer>
     
    );
}
 
export default SectionUp;

