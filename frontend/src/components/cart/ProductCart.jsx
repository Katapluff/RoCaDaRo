import "bootstrap-icons/font/bootstrap-icons.css";
import Store from "../../store/Context";
import "../../pages/Cart.css";

export default function ListCart(props) {
  const { item } = props;
  const { removeItemCart } = Store();

  return (
    <>
      <div className="cart_center">
        <div className="cart_item">
          <img src={item.image} alt="" />
          <div className="details">
            <h3 className="title">{item.title}</h3>
            <p className="price">€{item.price}</p>
          </div>

          <div
            className="remove_item"
            onClick={() => {
              removeItemCart(item.cartEntryId);
            }}
          >
            <i className="bi bi-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
}
