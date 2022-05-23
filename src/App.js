import React from "react";
import { useState } from "react";
import generatePrompt from "./helperHaikus";

export default function App() {
  const key = process.env.REACT_APP_OPENAI_API_KEY;
  const [promptInput, setPromptInput] = useState("");
  const [results, setResults] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();

    const aiAnswers = {
      prompt: generatePrompt(promptInput),
      temperature: 0.6,
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
    const haiku = data.choices[0].text;

    setResults((haikus) => [[promptInput, haiku],...haikus]);
    setPromptInput("");
  }

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
        <button type="submit">Submit</button>
      </form>
      <section title="Haikus by AI">
        {results.map((completion, index) => {
          return (
            <article key={index}>
              <h5>Theme: {completion[0]}</h5>
              <h5>{completion[1]}</h5>
            </article>
          );
        })}
      </section>
    </main>
  );
}
