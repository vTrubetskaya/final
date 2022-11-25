import { NavLink } from "react-router-dom"
import './menu.css'
import './menu__media.css'

export const Menu = ({header, items, active, setActive}) => {

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className="blur" />
            <div className="menu__content" onClick={(e) => handleChildClick(e)}>
            <h2 className="menu__title ts">{header}</h2>
                <ul className="burger__links">
                    {items.map(item => 
                        <li className="burger__link">
                            <NavLink className="link_black" to={item.href} onClick={() => setActive(false)}>{item.value}</NavLink>
                        </li>)}
                </ul>
            </div>
        </div>
    );
};
