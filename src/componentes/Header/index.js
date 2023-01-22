
import Logo from "../Logo";
import IconesMenu from "../iconesMenu";
import MenuHeader from "../menuHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #ffff;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <MenuHeader />
      <IconesMenu />
    </HeaderContainer>
  );
}

export default Header;
