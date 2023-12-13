import Job from "./Job";

const Jobs = () => {
  return (
    <main>
      <Job
        className="red job"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        className="green job"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="yellow job"
        title="Responsable d'Atelier (H/F)"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="blue job"
        title="Chef de Projets"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="pink job"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="red job"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        className="green job"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        className="yellow job"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        className="blue job"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </main>
  );
};

export default Jobs;
