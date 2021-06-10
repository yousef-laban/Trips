//styling
import { ProductImage, Item } from "../styles";
import { Link } from "react-router-dom";

//data
// import products from "../products";

//onClick={() => console.log(props.item)}

const ProductItem = (props) => {
  return (
    <Item>
      <Link to={`/trips/${props.trip.slug}`}>
        <ProductImage src={props.trip.image} alt={props.trip.name} />
      </Link>
      <p>{props.trip.name}</p>
      <p>Distance : {props.trip.distance} </p>
      <p>Diffuclty : {props.trip.diffuclty} </p>
    </Item>
  );
};

export default ProductItem;
