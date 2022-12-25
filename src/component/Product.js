export default function Product(props) {
    return (
        // First name of product then will show its price then will show badge in which we can increase or decrease the quantity of that product
        // then finally it's total price 
        <div className="row">
            <div className="col-5">
                <h2>{props.product.name} <span class="badge bg-secondary s">₹{props.product.price}</span></h2>
            </div>
            <div className="col-3">
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-danger">-</button>
                    <button type="button" class="btn btn-warning">{props.product.quantity}</button>
                    <button type="button" class="btn btn-success">+</button>
                </div>
            </div>
            <div className="col-4">
                {props.product.quantity * props.product.price} {/*to calculate the total*/}
            </div>
        </div>
    );
}