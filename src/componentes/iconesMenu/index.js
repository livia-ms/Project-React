import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import './style.css'

const icon = [perfil, sacola];

function IconesMenu() {
  return (
    <ul className="icons">
      {icon.map((icone) => (
        <li className="icon">
          <img src={icone} alt="perfil, sacola"></img>
        </li>
      ))}
    </ul>
  );
}

export default IconesMenu;
