import '../sass/components/menu.sass';

export const MenuContent = () => {
  return (
    <nav id="menu">
        <div className="menu-item">
            Portifolio
        </div>
        <div className="menu-item">
            <ul className="menu-navigation">
                <li>Perfil</li>
                <li>Projectos</li>
                <li>Contactos</li>
            </ul>
        </div>
    </nav>
  )
}

export default MenuContent;