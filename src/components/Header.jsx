import styled from "styled-components";

// Parte "css"
const HeaderContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-top: 8px;
    padding: 8px;
`;

const StyledLogo = styled.div`
    /* margin-left: 250px; */
    /* display: flex; */
    /* width: 50px; */
    /* border: 1px solid #ff0000; */
   
`;

const StyledNavList =  styled.div`
    margin-left: 300px;
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        font-weight: 500;
        gap: 20px;
        cursor: pointer;

       & button {
            height: 40px;
            width: 125px;
            border-radius: 7px;
            border: 1px solid black;
            font-size: 20px;
            color: #ffffff;
            background-color: #000000;
            cursor: pointer;

        }

        & button:hover {
            background-color: #413d3d;
            transition-duration: 0.3s;
        }
        & li:hover {
            background-color: #E6C744;
        }
    }
`;

// Parte "HTML"

const Header = () => {
    return ( 
        <HeaderContainer>
            <StyledLogo/>
                <h3>FASHION</h3>
            <StyledLogo/>
            <StyledNavList>
                <ul>
                    <li>CATALOGUE</li>
                    <li>FASHION</li>
                    <li>FAVOURITE</li>
                    <li>LIFESTYLE</li>
                    <button>SING UP</button>
                </ul>
            </StyledNavList>
        </HeaderContainer>
        
     );
}
 
export default Header;