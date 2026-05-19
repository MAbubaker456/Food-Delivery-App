import { useEffect } from "react";

const Grocery = () => {
  useEffect(()=>{
    async () => {
      const fetchData = await fetch("")
    }
  })
  return (
    <div>
      <h1>This is grocessary section</h1>
      <p>Add grocery</p>
    </div>
  );
};
export default Grocery;
