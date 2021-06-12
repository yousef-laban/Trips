//styling
import { ProductsStyle } from "../styles";

//data
import TripItem from "./TripItem";
import SearchBar from "./SearchBar";

//
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

const TripsList = (props) => {
  const [query, setQuery] = useState("");
  const [Dist, setDist] = useState("50");
  let tripDiff = useParams().tripDiff;
  console.log(tripDiff);
  if (
    tripDiff !== "Easy" &&
    tripDiff !== "Hard" &&
    tripDiff !== "Medium" &&
    tripDiff !== undefined &&
    tripDiff !== "All"
  ) {
    return <Redirect to="/not-found" />;
  }

  let tripsByDiff = props.trips;
  if (tripDiff !== "All" && tripDiff !== undefined) {
    tripsByDiff = props.trips.filter((trip) => trip.diffuclty === tripDiff);
  }

  // if (tripsByDiff === []) return <Redirect to="/not-found" />;

  tripsByDiff = tripsByDiff.filter(
    (trip) =>
      trip.name.toLowerCase().includes(query.toLowerCase()) ||
      trip.city.toLowerCase().includes(query.toLowerCase())
  );

  // if (Diff !== "All") {
  //   filteredList = filteredList.filter((trip) => Diff === trip.diffuclty);
  // }

  tripsByDiff = tripsByDiff
    .filter((trip) => parseInt(trip.distance) <= Dist)
    .map((trip) => <TripItem key={trip.id} trip={trip} />);

  return (
    <div>
      <SearchBar setDist={setDist} setQuery={setQuery} />
      <ProductsStyle>{tripsByDiff} </ProductsStyle>;
    </div>
  );
};

export default TripsList;
