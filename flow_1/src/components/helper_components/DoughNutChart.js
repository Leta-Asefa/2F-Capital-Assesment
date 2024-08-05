import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const DoughNutChart = ({ parentData }) => {
    const data = parentData || {
        labels: ['Fiction', 'Self Help', 'Business'],
        datasets: [
            {
                label: 'Available Books',
                data: [54, 20, 26],
                backgroundColor: ['#1a77db', '#0ec748', '#ff1212'],
                hoverBackgroundColor: ['#1553b0', '#107d5d', '#9e1318'],
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
    };

    return (
        <div className='px-3'>

            <div className='w-full p-3 mx-auto mt-8 shadow-custom'>
                <header className='flex justify-between mt-5'>
                    <h2 className='text-gray-500  font-inter'>Available Books</h2>
                    <h3 className='text-xs font-inter bg-gray-100 text-gray-500 p-1 rounded-md'>Today</h3>
                </header>

                <div className='flex justify-center items-center mt-7'>
                    <div className='w-32 h-32 mx-auto'>
                        <Doughnut data={data} options={options} />
                    </div>

                </div>




                <div className='mt-2 px-5 text-black'>
                    <ul >
                        {
                            data.labels.map((label, index) => {
                                return <li className='flex justify-center items-center gap-3'>
                                    <span className="w-3 h-3 mb-1 rounded-full" style={{ backgroundColor: `${data.datasets[0].backgroundColor[index]}` }}></span>
                                    {label} <span style={{ marginLeft: 'auto' }}>54</span>
                                </li>
                            })
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DoughNutChart;
