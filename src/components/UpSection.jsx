import React from "react";
import styled from "styled-components";
import BannerInicial from '../assets/Banner.png';

const ImgContainer = styled.div`
    margin: 0 auto;
    margin-top: 15px;
    width: 180vh; 
    height: 800px; 
    overflow: hidden; 
    & img {
        width: 100%;
        height: auto;
    }
`;

const SectionUp = () => {
    return ( 
        <ImgContainer>
            <img src="./src/assets/banner.png"/>
        </ImgContainer>
    );
}
 
export default SectionUp;

