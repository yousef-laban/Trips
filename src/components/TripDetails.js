//styling
import { ProductImage, ItemDetail, ProductsStyle } from "../styles";

import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import TripItem from "./TripItem";

const TripDetails = (props) => {
  let tripSlug = useParams().tripSlug;

  const trip = props.trips.find((trip) => trip.slug === tripSlug);
  console.log(trip);
  if (!trip) return <Redirect to="/not-found" />;

  const suj = props.trips
    .filter((x) => x.diffuclty === trip.diffuclty)
    .map((trip) => <TripItem key={trip.id} trip={trip} />);

  return (
    <>
      <ItemDetail>
        <div>
          <ProductImage src={trip.image} alt={trip.name} />
        </div>
        <div>
          <h1>{trip.name}</h1>
          <p> distance : {trip.distance} </p>
          <p>diffuclty : {trip.diffuclty} </p>
          <p>description : </p>
          <p> {trip.description} </p>
        </div>
      </ItemDetail>
      <h2 style={{ marginLeft: "50px" }}>Recommended:</h2>
      <ProductsStyle>{suj}</ProductsStyle>
    </>
  );
};

export default TripDetails;
