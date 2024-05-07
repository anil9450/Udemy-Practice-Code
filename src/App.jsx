import React from "react";
import './App.css';
import { CORE_CONCEPT } from "./data";
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
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
            <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </>
  )
}

export default App
