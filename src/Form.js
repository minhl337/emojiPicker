import "./Form.css"

import PropTypes from "prop-types"
import React, { useState } from "react"
import EmojiPicker from "emoji-picker-react"
import * as emojiChoses from "./emoji-list"

// TODO: Wire up input and implement emoji picker

// something that knows where typing :
// when that happens, filter availEmojis for that
// display those options in selectmenu
// if clicked on selectmenu, remove ":whatever" with
function Form(props) {
  const { text, setText, partySize, setPartySize, setEmoji } = props

  const [showPicker, setShowPicker] = useState(false)
  const [availEmojis, setAvailEmojis] = useState(emojiChoses)

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea
        className="form-textarea"
        name="feedback"
        rows="4"
        placeholder={props.feedbackPlaceholder}
        onChange={(e) => {
          setText(e.target.value)
        }}
        value={text}
      />
      <select name="pets" id="pet-select" style={{ marginBottom: "16px" }}>
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>

      <label className="form-label">How many in your party?</label>
      <input
        className="form-input"
        type="number"
        name="party"
        value={partySize}
        onChange={(e) => {
          setPartySize(e.target.value)
        }}
      />

      <label className="form-label">How was your meal?</label>

      {showPicker ? (
        <EmojiPicker
          onEmojiClick={(e) => {
            setEmoji(e.emoji)
            setShowPicker(false)
          }}
        />
      ) : (
        <div
          className="emoji-picker-container"
          onClick={() => {
            setShowPicker(true)
          }}
        >
          Add emoji input here
        </div>
      )}
    </div>
  )
}

Form.propTypes = {
  feedbackPlaceholder: PropTypes.string,
}

export default Form
