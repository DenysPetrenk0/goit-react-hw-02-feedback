/** @format */

import React from "react";
import options from "../../data/options.json";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return options.map((option) => (
    <button type="button" onClick={onLeaveFeedback} name={option}>
      {option}
    </button>
  ));
};

export default FeedbackOptions;
