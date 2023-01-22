import React from "react";
import styled from "styled-components";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
const MenuContainer = styled.ul`
  display: flex;
`;

const MenuContainerLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  font-size: 16px;
  min-width: 120px;
`;

function MenuHeader() {
  return (
    <MenuContainer>
      {textoOpcoes.map((texto) => (
        <MenuContainerLi>
          <p>{texto}</p>
        </MenuContainerLi>
      ))}
    </MenuContainer>
  );
}

export default MenuHeader;
