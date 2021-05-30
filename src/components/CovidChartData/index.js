import './index.css';

import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { countriesFetchHistoricalData } from '../../dataLayer/actionsCreators/country';
import { abbrNum } from '../../helper/_commonHelper';

const CovidHistoricalChart = () => {
    const { selectedCountry } = useSelector((state) => state.countries);
    const { countryHistoricalData, days } = useSelector((state) => state.country);
    const dispatch = useDispatch();

    const AC = bindActionCreators({ countriesFetchHistoricalData }, dispatch);

    useEffect(() => {
        const countryCode = (selectedCountry?.code) ? selectedCountry.code : 'all';
        AC.countriesFetchHistoricalData(days, countryCode);
    }, [selectedCountry]);

    // prepare Data to show in chart
    const { cases = {}, deaths = {}, recovered = {} } = countryHistoricalData;

    const data = {
        labels: Object.keys(cases),
        datasets: [
            {
                label: `Deaths`,
                data: Object.values(deaths),
                fill: true,
                backgroundColor: '#dc3545',
                borderColor: 'red',
            },
            {
                label: `Recovered`,
                data: Object.values(recovered),
                fill: true,
                backgroundColor: '#28a745',
                borderColor: 'green',
            },
            {
                label: `Cases`,
                data: Object.values(cases),
                fill: true,
                backgroundColor: '#FF9900',
                borderColor: '#e08e12',
            },

        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: (ctx) => ``
            },
            tooltip: {
                mode: 'index'
            },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Dates',
                }
            },
            y: {
                stacked: true,
                title: {
                    display: false,
                    text: 'Total Cases',
                },
                ticks: {
                    callback: (value, index, values) => {
                        return abbrNum(value, 2);
                    }
                }
            },

        }
    };

    console.log(`CovidHistoricalChart loaded`);
    return (
        <div className="d-flex flex-column w-100 mt-4">
            <h5>Historical Data</h5>
            {
                Object.keys(cases).length > 0 && (
                    <Line data={data} options={options} />
                )
            }

        </div>
    );
};

export default CovidHistoricalChart;