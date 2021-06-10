//styling
import { ProductsStyle } from "../styles";

//data
import TripItem from "./TripItem";
import SearchBar from "./SearchBar";

//
import { useState } from "react";

const TripsList = (props) => {
  const [query, setQuery] = useState("");
  const [Diff, setDiff] = useState("All");
  const [Dist, setDist] = useState("50");

  let filteredList = props.trips.filter((trip) =>
    trip.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(Dist);
  if (Diff !== "All") {
    filteredList = filteredList.filter((trip) => Diff === trip.diffuclty);
  }

  filteredList = filteredList
    .filter((trip) => trip.distance <= Dist)
    .map((trip) => <TripItem key={trip.id} trip={trip} />);

  return (
    <div>
      <SearchBar setDist={setDist} setDiff={setDiff} setQuery={setQuery} />
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default TripsList;
