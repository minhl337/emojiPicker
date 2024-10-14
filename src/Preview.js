import "./Preview.css";

import PropTypes from "prop-types";
import React from "react";

// TODO: Make content and styling dynamic
function Preview(props) {
  const partySize = 2;

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span role="img" aria-label="Review emoji">
            🧐
          </span>
        </div>
        <div className="preview-feedback placeholder-color">
          {props.feedbackPlaceholder}
        </div>
        <div className="preview-party">
          {partySize} {partySize > 1 ? "people" : "person"} dined here.
        </div>
      </div>
    </section>
  );
}

Preview.propTypes = {
  feedbackPlaceholder: PropTypes.string,
};

export default Preview;
