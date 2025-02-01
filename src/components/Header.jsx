import styled from "styled-components";

const HeaderContainer = styled.div` 
    display: flex;
    justify-content: center;
    border: 1px solid #000;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
   
`;

const Title = styled.p`
    background-color: #8a2be2;
    color: white;
`;


const Header = () => {
    return ( 
        <HeaderContainer>
            <StyledHeader>
                <Title>
                    Hello, world!
                </Title>
            </StyledHeader>
        </HeaderContainer>
        
     );
}
 
export default Header;