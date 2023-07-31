import React from "react";
import CostItem from "./CostItem";
import "./CostList.css";

const CostsList = (props) => {
  if (props.costs.length === 0) {
    return (
      <h2 className="cost-list__fallback">В этом году расходов не было</h2>
    );
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
      ))}
    </ul>
  );
};

export default CostsList;
