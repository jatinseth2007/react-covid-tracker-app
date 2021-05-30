import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Header from './components/_common/header/Header';
import CovidCountryMap from './components/CovidCountryMap';
import CovidHistoricalChart from './components/CovidChartData';
import CovidLiveByCountry from './components/CovidLiveByCountry';
import CovidInfoCard from './components/CovidInfoCard/CovidInfoCard';

function App() {
    const { dataByCountry } = useSelector((state) => state.covid);
    const { selectedCountry } = useSelector((state) => state.countries);

    const dataToShow = (selectedCountry?.code && dataByCountry && dataByCountry[selectedCountry.code]) ? dataByCountry[selectedCountry.code] : {};

    return (
        <Container fluid className="d-flex flex-row mt-4">
            <div className="app__left col-lg-8 col-md-8 col-sm-12 px-4">
                <Header lastUpdated={dataToShow?.updated} />
                <div className="d-flex flex-row justify-content-between mt-4">
                    <CovidInfoCard heading={`Coronavirus Cases`} dataToShow={{ "total": dataToShow?.cases, "today": dataToShow?.todayCases, "active": dataToShow?.active }}></CovidInfoCard>
                    <CovidInfoCard heading={`Recovered`} colorClass={`success`} dataToShow={{ "total": dataToShow?.recovered, "today": dataToShow?.todayRecovered }}></CovidInfoCard>
                    <CovidInfoCard heading={`Deaths`} dataToShow={{ "total": dataToShow?.deaths, "today": dataToShow?.todayDeaths }}></CovidInfoCard>
                </div>
                <div className="d-flex">
                    <CovidHistoricalChart />
                </div>
                <div className="d-flex mb-4">
                    <CovidCountryMap />
                </div>
            </div>
            <div className="app__right col-lg-4 col-md-4 col-sm-12">
                <CovidLiveByCountry />
            </div>
        </Container >
    );
}

export default App;
