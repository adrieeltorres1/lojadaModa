import styled from "styled-components";

// Parte "css"
const HeaderContainer = styled.div` 
    display: flex;
    align-items: center;
    /* border: 1px solid #000; */
    padding: 8px;
`;

const StyledLogo = styled.div`
    margin-left: 50px;
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
            height: 30px;
            width: 60px;
            border-radius: 5px;
            border: 1px solid black;
            color: #ffffff;
            background-color: #000000;
            cursor: pointer;

        }

        & button:hover {
            background-color: #575151;
            transition-duration: 0.3s;
        }
        & li:hover {
            background-color: #e9e915ce;
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