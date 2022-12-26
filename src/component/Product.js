export default function Product(props) {
    return (
        // First name of product then will show its price then will show badge in which we can increase or decrease the quantity of that product
        // then finally it's total price 
        <div className="row mt-3">
            <div className="col-5">
                <h2>{props.product.name} <span className="badge bg-secondary s">₹{props.product.price}</span></h2>
            </div>
            <div className="col-3">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger"
                        onClick={() => { props.decrementQuantity(props.index) }}
                    >
                        -
                    </button>
                    <button type="button" className="btn btn-warning">{props.product.quantity}</button>
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => { props.incrementQuantity(props.index) }}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="col-2">
                {props.product.quantity * props.product.price} {/*to calculate the total*/}
            </div>
            <button className="btn btn-danger col-2" onClick={() => { props.removeItem(props.index) }}>
                Remove
            </button>
        </div>
    );
}