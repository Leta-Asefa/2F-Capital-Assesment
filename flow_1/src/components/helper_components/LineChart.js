// LineChartComponent.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

// Sample data with two datasets
const data = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            label: 'Last 6 months',
            data: [150, 50, 250, 50, 250, 50],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            pointStyle: 'circle',
            pointRadius: 1,
            pointBackgroundColor: '#3b82f6',
            tension:0.5
        },
        {
            label: 'Same period last year',
            data: [160, 60, 160, 260, 160, 60],
            borderColor: '#94a3b8',
            backgroundColor: 'rgba(148, 163, 184, 0.1)',
            fill: true,
            borderDash: [5, 5],
            pointStyle: 'circle',
            pointRadius: 1,
            pointBackgroundColor: '#94a3b8',
            tension:0.5
        },
    ],
};

// Options for the chart
const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#6b7280', // Grey color for the x-axis labels
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                color: '#6b7280', // Grey color for the y-axis labels
                callback: (value) => `${value}k Birr`, // Append "k Birr" to the y-axis labels
                stepSize: 100
            },
        },
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                color: '#6b7280', // Grey color for the legend labels
                font: {
                    size: 9, // Legend label font size
                    family: 'Arial',
                },
            },
        },
    },
};

const LineChartComponent = () => (
    <div className="mt-60 bg-white px-8 py-10 rounded-xl">
        <header className="flex gap-5 items-center mb-5">
            <h1 className="text-xl font-semibold text-gray-800">Earning Summary</h1>
            <span className="text-gray-500">Mar 2022 - Oct 2024</span>
            <input type="date" className="border border-gray-300 rounded p-1" />
        </header>
          
        <Line data={data} options={options} />

    </div>
);

export default LineChartComponent;
