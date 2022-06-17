import { useSelector } from "react-redux";
function CounterDisplay() {
  const  number = useSelector((store) => {
     return store.counter.number;
  });
  return (  
   <div>
    <h1 className="CounterDisplay">{number}</h1>
   </div>
  );
}

export default CounterDisplay;