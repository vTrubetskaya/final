import cartStore from "../../stores/CartStore"
import { CartItem } from "./components/CartItem";
import { observer } from "mobx-react-lite";
import { Modal} from "../../components/Modal";
import { useState } from "react";

export const Cart = observer(() => {
    const {cart, deleteCartItem, totalPrice} = cartStore;   
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true);
    }

    const handleModalClose = () => {
        setVisible(false);
    }
      
    return (
        <div className="container">
            {cart.length === 0 && <h1 className="cart__titleEmpty">Your cart is empty.</h1>} 
            {cart.length > 0 && <div>
            <h1 className="cart__title">Your shopping cart</h1>
            <div className="cart__container">
                <div className="cart__items">{cart.map((cartItem) => 
                    <CartItem cartItem={cartItem} key={cartItem.id} deleteCartItem={deleteCartItem}/>                                  
                    )}
                </div>  
                <div className="cart__total__info">
                    <h2 className="cart__total__title">Total: ${totalPrice} </h2>
                    <button className="cart__total__btn" onClick={openModal}>Pay your order</button>
                    {visible && <Modal onClose={handleModalClose} content={<h2 className="modal__text">Thank you for the purchase.</h2>} button={<span>Go back to cart</span>}/>}                
                </div>
            </div></div>}
        </div>              
       
    )
})