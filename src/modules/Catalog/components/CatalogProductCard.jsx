import { Link } from "react-router-dom";
import { Image } from "antd";
import cartStore from "../../../stores/CartStore";

export const CatalogProductCard = ({productCard}) => {
    const {addToCart} = cartStore;
    const {id, title, price, image} = productCard;

    const handleClick = () => {
        addToCart(productCard);
    }

    return (
        <div className="product__card" >
            <div className="product__card__image"><Image className="image" src={image} alt={title}/></div>
            <h3><Link className="product__card__title" to={`./${id}`}>{title}</Link></h3>        
            <div className="product__card__details">
                <div className="product__card__price">{price} $</div>
                <img onClick={(handleClick)} className="product__card__btn" src="/imgs/8305913.png"/>
            </div>            
            </div>
    )
}