import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DoughnutChart = () => {
    const [open, setOpen] = useState(true);
    const chartRef = useRef(null);

    useEffect(() => {

  const dataDoughnut  = {
    labels: ["JavaScript", "Python", "Ruby"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(133, 105, 241)",
          "rgb(164, 101, 241)",
          "rgb(101, 143, 241)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {}; // You can specify additional options here
  const chartInstance = chartRef.current && chartRef.current.chartInstance;
  if (chartInstance) {
    // Update chart data
    chartInstance.data = dataDoughnut;
    chartInstance.update();
  } else {
    // Initialize chart
    const newChartInstance = chartRef.current.chartInstance = new Chart(chartRef.current, {
      type: "doughnut",
      data: dataDoughnut,
      options: options,
    });
  }

  // Clean up function to destroy the chart on unmount
  return () => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  };
}, []);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden ">
      <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
      <Doughnut ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
