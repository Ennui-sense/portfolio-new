import "./Cases.scss";
import { casesData } from "~/data/casesData";
import CaseCard from "~/components/CaseCard/CaseCard";

const Cases = () => {
  return (
    <section className="cases">
      <div className="cases__inner container">
        <ul className="cases__list">
          {casesData.map((caseData) => (
            <li className="cases__item" key={caseData.id}>
              <CaseCard caseData={caseData} className="cases__card" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cases;
