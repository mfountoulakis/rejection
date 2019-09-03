import React from "react";
import Nav from "./components/Nav";
import Asks from "./components/Asks";
import AskForm from "./components/AskForm";
import Hero from "./components/Hero";
import Level from "./components/Level";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Container, Section } from "react-bulma-components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Section>
        <Container>
          <Level />
          <AskForm />
          <Asks />
        </Container>
      </Section>
    </div>
  );
}

export default App;
