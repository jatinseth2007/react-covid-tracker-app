import './Header.css';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { formatAppDate } from '../../../helper/_commonHelper';
import { searchCountryByname } from '../../../helper/countries';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { covidSetDataByCountry } from '../../../dataLayer/actionsCreators/covid/covid';
import { countriesFetch, countriesSelectCountry } from '../../../dataLayer/actionsCreators/countries/countries';


function Header({ lastUpdated }) {
    const [countrySearch, setCountrySearch] = useState('');
    const { selectedCountry, allCountries } = useSelector((state) => state.countries);
    const searchedCountries = searchCountryByname(countrySearch, allCountries);

    const dispatch = useDispatch();

    const AC = bindActionCreators({ countriesFetch, countriesSelectCountry, covidSetDataByCountry }, dispatch);

    // use effect to handle initial country data load...
    useEffect(() => {
        AC.countriesFetch(AC.covidSetDataByCountry);
    }, []);

    console.log('Header loaded');

    return (
        <div className="header-container d-flex flex-row justify-content-between align-items-center ">
            <div className="d-flex flex-row justify-content-between align-items-center">
                {/* Country selector dropdown */}
                <DropdownButton as={ButtonGroup} variant="info" title={selectedCountry?.name ? selectedCountry.name : 'Select a Country!'}>
                    <div className="input-group">
                        <input type="text" className="form-control country-search" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={countrySearch} onChange={(e) => { setCountrySearch(e.target.value); }} />
                    </div>
                    {
                        searchedCountries && searchedCountries.map((country) => (
                            <Dropdown.Item className="fs-6" eventKey={country.code} key={country._id} onSelect={(e) => { AC.countriesSelectCountry(country); }}>{country.name}</Dropdown.Item>
                        ))
                    }
                </DropdownButton>
                {/* Last Updated Value */}
                <span className="fs-7 ml-1">Last Updated - {formatAppDate(lastUpdated)}</span>
            </div>
            {/* Heading */}
            <h2 className="heading">Covid-19 Tracker</h2>
        </div>
    );
}

export default Header;
