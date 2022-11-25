import { Link } from "react-router-dom";
import { Image } from "antd";
import cartStore from "../../../stores/CartStore";
import { useState } from "react";

export const CatalogProductCard = ({productCard}) => {
    const {addToCart} = cartStore;
    const {id, title, price, imgs} = productCard;

    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        addToCart(productCard);
    }

    

    return (
        <div className="product__card" >
            <div className="product__card__image" onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
                {!isShown && (
                            <Image className="image" src={imgs[1]} alt={title} />
                )}
                {isShown && (
                            <Image className="image" src={imgs[2]} alt={title} />
                )}                
            </div>
            <h3><Link className="product__card__title" to={`./${id}`}>{title}</Link></h3>        
            <div className="product__card__details">
                <div className="product__card__price">{price} $</div>
                <img onClick={(handleClick)} className="product__card__btn" src="/imgs/8305913.png"/>
            </div>            
            </div>
    )
}