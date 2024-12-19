import "./Preview.css"

import PropTypes from "prop-types"
import React from "react"
import clsx from "clsx"
import * as emoji from "node-emoji"

// TODO: Make content and styling dynamic
function Preview(props) {
  const { text, partySize, myEmoji } = props

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span role="img" aria-label="Review emoji">
            {myEmoji}
          </span>
        </div>
        <div
          className={clsx(
            text !== "" ? "" : "placeholder-color",
            "preview-feedback"
          )}
        >
          {text !== "" ? emoji.emojify(text) : "placeholder"}
        </div>
        <div className="preview-party">
          {partySize} {partySize > 1 ? "people" : "person"} dined here.
        </div>
      </div>
    </section>
  )
}

Preview.propTypes = {
  feedbackPlaceholder: PropTypes.string,
}

export default Preview
