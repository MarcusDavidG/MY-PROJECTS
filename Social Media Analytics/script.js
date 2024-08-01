document.addEventListener("DOMContentLoaded", () => {
  // Dummy data
  const followers = 1200;
  const likes = 3400;
  const shares = 950;

  // Update summary section
  document.getElementById("followers-count").textContent = followers;
  document.getElementById("likes-count").textContent = likes;
  document.getElementById("shares-count").textContent = shares;

  // Chart.js
  const ctx = document.getElementById("analyticsChart").getContext("2d");
  const analyticsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Followers",
          data: [300, 400, 450, 500, 600, 800, 1200],
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false,
        },
        {
          label: "Likes",
          data: [500, 800, 1000, 1400, 1800, 2400, 3400],
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
        },
        {
          label: "Shares",
          data: [150, 200, 250, 300, 400, 600, 950],
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Social Media Analytics Over Time",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Month",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Count",
          },
        },
      },
    },
  });
});
