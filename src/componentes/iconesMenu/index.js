import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const icon = [perfil, sacola];
const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

function IconesMenu() {
  return (
    <Icons>
      {icon.map((icone) => (
        <Icon>
          <img src={icone} alt="perfil, sacola"></img>
        </Icon>
      ))}
    </Icons>
  );
}

export default IconesMenu;
