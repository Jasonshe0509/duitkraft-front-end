import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';

const DonutChart = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const options = {
      series: [35.1, 23.5, 2.4, 5.4],
      colors: ["#1E3E8F", "#0046AD", "#0094FF", "#00BFD9"],
      chart: {
        height: 250,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                // fontFamily: "Inter, sans-serif",
                color: '#FFFFFF',
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Expenses",
                // fontFamily: "Inter, sans-serif",
                color: '#FFFFFF',
                formatter: (w) => {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return `MYR 700`;
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                color: '#FFFFFF',
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ["Food", "Social", "Amenities", "Travel"],
      dataLabels: {
        formatter: (value) => `${value}`,
        color: '#FFFFFF',
        enabled: false,
      },
      legend: {
        position: "bottom",
        
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {},
      },
      xaxis: {
        labels: {},
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };

    const newChart = new ApexCharts(document.getElementById("donut-chart3"), options);
    setChart(newChart);
    newChart.render();

    return () => {
      newChart.destroy(); // Clean up the chart when the component unmounts
    };
  }, []);

  const handleCheckboxChange = (event) => {
    const checkbox = event.target;
    const newSeriesData = {
      desktop: [15.1, 22.5, 4.4, 8.4],
      tablet: [25.1, 26.5, 1.4, 3.4],
      mobile: [45.1, 27.5, 8.4, 2.4],
    }[checkbox.value] || [35.1, 23.5, 2.4, 5.4];

    if (checkbox.checked) {
      chart.updateSeries(newSeriesData); // Update chart with new data
    } else {
      chart.updateSeries([35.1, 23.5, 2.4, 5.4]); // Default data
    }
  };

  return (
    <div id="donut-chart3"></div>
  );
};

export default DonutChart;
