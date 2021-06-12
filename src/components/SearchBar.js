import React from "react";
import { useHistory } from "react-router-dom";

// Styling
import { SearchBarStyled, FilterDiv, Sellector } from "../styles";

const SearchBar = (props) => {
  const history = useHistory();

  return (
    <FilterDiv>
      <SearchBarStyled
        placeholder="Search for a trip name or city name"
        onChange={(event) => props.setQuery(event.target.value)}
      />
      <Sellector>
        <label style={{ padding: "5px" }} for="Diffuclty">
          Choose Diffuclty{" "}
        </label>
        <select
          onChange={(event) => {
            history.push(event.target.value);
          }}
          name="Diffuclty"
          id="Diffuclty"
        >
          <option disabled="disabled" selected="selected">
            Select an option.
          </option>

          <option value="All">All</option>
          <option value="Hard">Hard</option>
          <option value="Medium">Medium</option>
          <option value="Easy">Easy</option>
        </select>
      </Sellector>

      <Sellector>
        <label style={{ padding: "5px" }} for="distance">
          Choose distance{" "}
        </label>
        <input
          onChange={(event) => props.setDist(event.target.value)}
          type="range"
          min="1"
          max="50"
          class="slider"
          id="myRange"
        />
      </Sellector>
    </FilterDiv>
  );
};

export default SearchBar;
