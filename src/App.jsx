import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Title from "./components/Title";
import Job from "./components/Job";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Title />
      </header>
      <main>
        <div class="jobs">
          <Job
            className="border-red"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />
          <Job
            className="border-green"
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
          <Job
            className="border-yellow"
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Job
            className="border-blue"
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Job
            className="border-pink"
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
          <Job
            className="border-red"
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          />
          <Job
            className="border-green"
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans-Montana"
          />
          <Job
            className="border-yellow"
            title="CRM & Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New York"
          />
          <Job
            className="border-blue"
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
      </main>
      <footer>
        <p class="footer">
          Made with <a href="#">React</a> at <a href="#">Le Reacteur</a> by{" "}
          <a href="#">Charlotte</a>
        </p>
      </footer>
    </>
  );
}

export default App;
