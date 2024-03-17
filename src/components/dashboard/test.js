import { useState } from "react";
import DoughnutChart from "../dashboard/Chart.js";

const App = () => {
    const [open, setOpen] = useState(true);

  return (
    <div>
      <h1>My Chart App</h1>
      <DoughnutChart />
    </div>
  );
};

export default App;
