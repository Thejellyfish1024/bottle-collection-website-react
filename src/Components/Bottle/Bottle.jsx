import './Bottle.css'

const Bottle = ({bottle, handleCart}) => {
    const {name, price, img} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h4>Title : {name}</h4>
            <p>Price : {price}</p>
            <button onClick={() => handleCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;