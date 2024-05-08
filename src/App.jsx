import React, { useState } from "react";
import './App.css';
import { CORE_CONCEPT } from "./data";
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPT[0]} />
            <CoreConcept {...CORE_CONCEPT[1]} />
            <CoreConcept {...CORE_CONCEPT[2]} />
            <CoreConcept {...CORE_CONCEPT[3]} />
          </ul>
        </section>

        <section id="example">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Component')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  )
}

export default App
