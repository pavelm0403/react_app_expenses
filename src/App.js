import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () =>  {
  const costs = [
    {
      id: "c1",
      date: new Date(2023, 3, 4),
      description: "Монитор",
      amount: 500.65,
    },
    {
      id: "c2",
      date: new Date(2023, 3, 4),
      description: "MacBook",
      amount: 1500.88,
    },
    {
      id: "c3",
      date: new Date(2023, 4, 4),
      description: "Кресло",
      amount: 249.99,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component');
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
