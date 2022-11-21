import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom"
import appStore from "../stores/AppStore"
import cartStore from "../stores/CartStore"

export const Header = observer(() => {

    const { cartCount } = cartStore;

    return (
    <header>
        <div className="container__header">
            <div className="header__wrapper">
                <div className="header__nav__links">
                    <NavLink className="header__nav__link" to="/"><img className="header__img" src="\imgs\6239491.png" alt="" /></NavLink>                
                    <NavLink className="header__nav__link" to="/blog">Ideas for<br/>your perfect Christmas</NavLink>
                    <NavLink className="header__nav__link" to="/blog">Christmas<br/> tree</NavLink>                
                    <NavLink className="header__nav__link" to="/catalog">Christmas<br/> decorations</NavLink>
                </div>
                <NavLink className="header__nav__link" to="/cart"><img className="header__img"  src="\imgs\6239541.png" alt="" /> <span className="cartCount">{cartCount}</span></NavLink>
            </div>
        </div>
    </header>
        )
})