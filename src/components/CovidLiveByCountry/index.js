import './index.css';
import { useSelector } from 'react-redux';
import { sortCountries } from '../../helper/countries';
import { abbrNum } from '../../helper/_commonHelper';

const CovidLiveByCountry = () => {
    const { allCountries } = useSelector((state) => state.countries);
    const preparedCountries = sortCountries(allCountries);

    return (
        <div className="countries-container bg-white px-3 py-4">
            <h5>Live Cases by Country</h5>
            <div className="mt-4 all-country-wrapper">
                {
                    preparedCountries && preparedCountries.map((country) => (
                        <div key={country._id} className="d-flex flex-row align-items-center justify-content-between country-wrapper px-2">
                            <div className="d-flex flex-row">
                                <span className="country fs-7 text-black-50">{country.iso3}</span>
                                <div className="image-container d-flex justify-content-center align-items-center">
                                    <img src={country.flag} alt="flag" data-bs-toggle="tooltip" data-bs-placement="right" title={country.name} />
                                </div>
                            </div>
                            <div className="text-right text-black-50">{abbrNum(country.totalCases, 2)}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CovidLiveByCountry;