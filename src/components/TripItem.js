//styling
import { ProductImage, Item } from "../styles";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <Item>
      <Link to={`/trips/details/${props.trip.slug}`}>
        <ProductImage src={props.trip.image} alt={props.trip.name} />
      </Link>
      <p>{props.trip.name}</p>
      <p>city : {props.trip.city} </p>
      <p>Distance : {props.trip.distance} </p>
      <p>Diffuclty : {props.trip.diffuclty} </p>
    </Item>
  );
};

export default ProductItem;
