import './Cart.css'
const Cart = ({cart, handleRemoveCart}) => {
    return (
        <div>
            <h3>My Bottles : {cart.length}</h3>
            <div className="cart">
                {
                    cart.map((bottle,index) => <div key={index}>
                        <div>
                        <img  src={bottle.img}></img>
                        <button onClick={() => handleRemoveCart(bottle.id)}>Remove</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;