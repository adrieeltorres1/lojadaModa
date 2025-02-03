import React from "react";
import styled from "styled-components";
import BannerInicial from '../assets/Banner.png'

const imgContainer = styled.div`
    border: 1px solid red;
    
    & img {
        width: 100px;
        height: 100px;
    }

`

const SectionUp = () => {
    return ( 
        <>
        <imgContainer />
            <img src="./src/assets/banner.png" alt="" srcset="" />
        <imgContainer/>
        </>
        

     
    );
}
 
export default SectionUp;

