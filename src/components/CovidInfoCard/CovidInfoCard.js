import './CovidInfoCard.css';
import { abbrNum } from '../../helper/_commonHelper';

function CovidInfoCard({ heading, dataToShow, colorClass = `danger` }) {
    const { today = 0, total = 0 } = dataToShow;
    return (
        <div className="card custom-card bg-white col-lg-3 col-md-3 col-sm-6">
            <div className="d-flex flex-column justify-content-center align-items-center my-2">
                <p className="text-black-50 m-0">{heading}</p>
                <h1 className={`text-${colorClass}`} data-bs-toggle="tooltip" data-bs-placement="right" title="added today">+{abbrNum(today, 1)}</h1>
                <p className="text-black-50 fs-7 fw-bolder">+{abbrNum(total, 2)} Total</p>
            </div>
        </div >
    );
}

export default CovidInfoCard;
