import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const BloodPressureChart = () => {
  const data = {
    labels: ["Oct, 2023", "Nov, 2023", "Dec, 2023", "Jan, 2024", "Feb, 2024", "Mar, 2024"],
    datasets: [
      {
        label: "Systolic",
        data: [140, 160, 150, 145, 155, 160],
        borderColor: "#FF6AC0",
        backgroundColor: "#FF6AC0",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Diastolic",
        data: [90, 85, 80, 75, 78, 78],
        borderColor: "#8B6AFF",
        backgroundColor: "#8B6AFF",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3>Blood Pressure</h3>
        <span style={styles.lastMonths}>Last 6 months</span>
      </div>
      <Line data={data} options={options} />
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <span style={{ ...styles.dot, backgroundColor: "#FF6AC0" }}></span>
          <div>
            <h5 style={styles.value}>Systolic 160</h5>
            <p style={styles.description}>Higher than Average</p>
          </div>
        </div>
        <div style={styles.infoItem}>
          <span style={{ ...styles.dot, backgroundColor: "#8B6AFF" }}></span>
          <div>
            <h5 style={styles.value}>Diastolic 78</h5>
            <p style={styles.description}>Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "540px",
    margin: "auto",
    backgroundColor: "#f8f9fc",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  lastMonths: {
    color: "#9e9e9e",
    fontSize: "14px",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  value: {
    margin: 0,
    fontSize: "18px",
    color: "#333",
  },
  description: {
    margin: 0,
    fontSize: "12px",
    color: "#777",
  },
};

export default BloodPressureChart;
