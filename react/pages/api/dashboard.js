const sharedOptions = {
  borderWidth: 3,
  pointRadius: 3,
  pointBorderWidth: 1,
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    display: false
  }
};

const gridOptions = {
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(0,0,0,0.02)",
          zeroLineColor: "rgba(0,0,0,0)"
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(0,0,0,0)",
          zeroLineColor: "rgba(0,0,0,0)"
        },
        position: "left",
        ticks: { display: false, beginAtZero: true, suggestedMax: 7 }
      }
    ]
  }
};

const colors = [
  {
    backgroundColor: "rgba(88, 77, 130, 0.05)",
    borderColor: "rgba(88, 77, 130, 1)",
    pointBackgroundColor: "rgba(88, 77, 130, 1)",
    pointBorderColor: "#fff"
  },
  {
    backgroundColor: "#eeeeee",
    borderColor: "#eeeeee",
    pointBackgroundColor: "#eeeeee",
    pointBorderColor: "#fff"
  },
  {
    backgroundColor: "#5dcff3",
    borderColor: "#5dcff3",
    pointBackgroundColor: "#5dcff3",
    pointBorderColor: "#fff"
  }
];

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const datasets = [
  {
    label: "Sales",
    backgroundColor: "rgba(88, 77, 130, 1)",
    borderColor: "rgba(88, 77, 130, 1)",
    pointBackgroundColor: "rgba(88, 77, 130, 1)",
    pointBorderColor: "#fff",
    borderWidth: 0,
    data: [6]
  },
  {
    label: "Views",
    ...colors[1],
    borderWidth: 0,
    data: [5]
  }
];

const data = {
  labels: ["Jul"],
  datasets
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const chartData = max => {
  let data = [];
  for (let index = 0; index < max; index++) {
    data.push(randomIntFromInterval(4, 6));
  }

  return data;
};

const lineData = {
  labels,
  datasets: [
    {
      label: "Sales",
      ...colors[0],
      data: chartData(12)
    }
  ]
};

const lineData2 = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      ...colors[0],
      data: chartData(6)
    }
  ]
};

const dataPie = {
  labels: ["Download Sales", "In-Store Sales", "Mail Sales"],
  datasets: [
    {
      data: [350, 450, 100],
      backgroundColor: ["#584d82", "#eeeeee", "#5cad66"]
    }
  ]
};

const height = 60;

const dahboardData = {
  chart: {
    type: "line",
    title: "Sales Analytics",
    subtitle: "Basic",
    data: lineData,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions
    }
  },
  charts: [
    {
      type: "line",
      title: "Monthly page views",
      subtitle: "Basic",
      data: lineData2,
      height: 180,
      options: {
        ...sharedOptions,
        ...gridOptions
      }
    },
    {
      type: "bar",
      title: "Revenue",
      subtitle: "Stacked",
      data: data,
      height: 180,
      options: {
        ...sharedOptions,
        ...gridOptions
      }
    },
    {
      type: "pie",
      title: "Monthly visitors",
      subtitle: "Basic",
      data: dataPie,
      height: 180,
      options: {
        ...sharedOptions,
        elements: {
          arc: {
            borderWidth: 0.5
          }
        }
      }
    }
  ]
};

export default (req, res) => {
  setTimeout(() => {
    res.json(dahboardData);
  }, 2000);
};
