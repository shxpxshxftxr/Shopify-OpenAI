import React from "react";
import { useState } from "react";
import generatePrompt from "./api/haikus"

export default function App() {
  const key = process.env.REACT_APP_OPENAI_API_KEY;
  const [promptInput, setPromptInput] = useState("");
  const [results, setResults] = useState();

  async function onSubmit(event) {
    event.preventDefault();

    const aiAnswers = {
      prompt: generatePrompt(promptInput),
      temperature: .3,
      max_tokens: 32,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(aiAnswers),
      }
    );
    const data = await response.json();
    setResults(data.choices[0].text);
    setPromptInput("");
    console.log("response:", data);
  }

  console.log("results:",results);
  console.log("prompt:",promptInput);

  return (
    <main>
      <header>
        <h1>Haiku AI</h1>
        <h3>
          Submit a theme to this AI and it will generate an original Haiku!
        </h3>
      </header>
      <label htmlFor="prompt">Enter Prompt Here:</label>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="prompt"
          value={promptInput}
          onChange={(event) => setPromptInput(event.target.value)}
        />
        <button type="submit">Submit Prompt</button>
      </form>
      <div>{results}</div>
      {/* {Results.map((completion, index) => {
        return (
          <article className="results" key={index}>
            <h5>Prompt: {completion[0]}</h5>
            <h5>Haiku: {completion[1]}</h5>
          </article>
        );
      })} */}
    </main>
  );
}
