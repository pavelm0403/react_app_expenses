import { useState } from "react";
import CostsFilter from "../NewCost/CostsFilter";
import Card from "../UI/Card";
import CostItem from "./CostItem";
import "./Costs.css";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  };

  return (
    <div>
      <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  );
};

export default Costs;
