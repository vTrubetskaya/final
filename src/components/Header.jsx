import { Menu } from "./Menu/Menu";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom"
import cartStore from "../stores/CartStore"
import { useState } from "react";
import { Badge } from 'antd';

export const Header = observer(() => {
    const [menuActive, setMenuActive] = useState(false);

    const items = [{value:"Home Page", href: "/"}, {value:"Ideas for your perfect Christmas", href: "/blog"},{value:"Christmas tree", href: "/treesCatalog"}, {value:"Christmas decorations", href: "/catalog"}]

    const { cartCount } = cartStore;

    return (
    <header>
        <div className="container__header">
            <div className="header__wrapper">
                <div className="header__nav__links">
                    <div className="header__nav__link burger">
                        <div className="burger__btn" onClick={() => setMenuActive(!menuActive)}>
                            <span className="line"></span>
                        </div>
                    </div>
                    <NavLink className="header__nav__link nav__none" to="/"><img className="header__img" src="\imgs\6239491.png" alt="" /></NavLink>                
                    <NavLink className="header__nav__link nav__none" to="/blog">Ideas for<br/>your perfect Christmas</NavLink>
                    <NavLink className="header__nav__link nav__none" to="/treesCatalog">Christmas<br/> tree</NavLink>                
                    <NavLink className="header__nav__link  nav__none" to="/catalog">Christmas<br/> decorations</NavLink>
                </div>
                <NavLink className="header__nav__link" to="/cart">
                    <Badge color="red" count={cartCount}>
                        <img className="header__img"  src="\imgs\6239541.png" alt="" />
                    </Badge>
                </NavLink>                 
            </div>
        </div>
            <Menu header={"Welcome to Winter WonderLand"} active={menuActive} setActive={setMenuActive} items={items}/>   
    </header>
        )
})