import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AutoComplete(props) {
  let { data, label, handleSearchValueChange } = props;
  let [suggestions, setSuggestions] = useState([]);
  let [textboxValue, setTextboxValue] = useState([]);

  let handleTextChange = (e) => {
    let { value } = e.target;
    let suggestions = [];
    if (data && value.length > 0) {
      let regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter((d) => {
        return regex.test(d[label]);
      });
    }
    setSuggestions(suggestions);
    setTextboxValue(value);
  };

  let selectSuggestion = (value) => {
    setTextboxValue(value);
    setSuggestions([]);
    handleSearchValueChange(value);
  };

  let renderSuggestions = () => {
    if (suggestions.length == 0) return null;
    return (
      <ul>
        {suggestions.map((x, i) => (
          <li key={i} onClick={() => selectSuggestion(x[label])}>
            {x[label]}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="form-group auto-complete">
      <input
        type="text"
        value={textboxValue}
        className="form-control w-100"
        placeholder="Search here..."
        onChange={handleTextChange}
      />
      {renderSuggestions()}
    </div>
  );
}

AutoComplete.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
