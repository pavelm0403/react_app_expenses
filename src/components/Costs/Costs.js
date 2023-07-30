import { useState } from "react";
import CostsFilter from "../NewCost/CostsFilter";
import Card from "../UI/Card";
import CostItem from "./CostItem";

import "./Costs.css";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Costs;
