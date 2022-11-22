export const CartItem = ({cartItem, deleteCartItem}) => {
    const { title, count, id, price, imgs } = cartItem;

    const handleClick = (id) => {
        deleteCartItem(id);
    }

    return (
        <div className="cart__item">
            <div className="cart__item__info"> 
                <img className="cart__item__img" src={imgs[1]} alt="" />
                <h3 className="cart__item__title">{title}</h3>
                <span className="cart__item__count">{count} itm </span>              
                <span className="cart__item__price">${price * count}</span>
            </div>
            <img src="/imgs/216658.png" alt="" className="cart__item__del" onClick={() => handleClick(id)}/>
        </div>
    );
}