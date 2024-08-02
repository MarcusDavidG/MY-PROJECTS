document.addEventListener("DOMContentLoaded", function () {
  // Sample data
  const data = {
    posts: 150,
    followers: 1200,
    likes: 5000,
    chartData: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Posts",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [12, 19, 3, 5, 2, 3, 9],
        },
      ],
    },
  };

  // Update metrics
  document.getElementById("posts").textContent = data.posts;
  document.getElementById("followers").textContent = data.followers;
  document.getElementById("likes").textContent = data.likes;

  // Create chart
  const ctx = document.getElementById("analyticsChart").getContext("2d");
  const analyticsChart = new Chart(ctx, {
    type: "line",
    data: data.chartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
