import "./App.css"

import React, { useState } from "react"

import Form from "./Form.js"
import Header from "./Header.js"
import Preview from "./Preview.js"
import * as emoji from "node-emoji"

// TODO: Connect form to preview
function App() {
  // module imports
  // local

  const [text, setText] = useState("")
  const [partySize, setPartySize] = useState(2)
  const [myEmoji, setEmoji] = useState("🧐")

  const feedbackPlaceholder = "Let us know what we did well or could improve..."

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="app-left">
          <Form
            feedbackPlaceholder={feedbackPlaceholder}
            text={text}
            setText={setText}
            partySize={partySize}
            setPartySize={setPartySize}
            setEmoji={setEmoji}
          />
        </section>
        <section className="app-right">
          <Preview
            feedbackPlaceholder={feedbackPlaceholder}
            text={text}
            partySize={partySize}
            myEmoji={myEmoji}
          />
        </section>
      </main>
    </div>
  )
}

export default App
