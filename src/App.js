import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const initial_costs = [
  {
    id: "c1",
    date: new Date(2023, 1, 1),
    description: "Монитор",
    amount: 500.65,
  },
  {
    id: "c2",
    date: new Date(2023, 1, 1),
    description: "MacBook",
    amount: 1500.88,
  },
  {
    id: "c3",
    date: new Date(2022, 4, 4),
    description: "Кресло",
    amount: 249.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(initial_costs);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
