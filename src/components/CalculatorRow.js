import './CalculatorRow.css';
import PropTypes from "prop-types";

function CalculatorRow(props) {

    CalculatorRow.propTypes = { data: PropTypes.array.isRequired }

    return (
        <div className="calculator__row">
            {props.data.map((dataItem, index) => {
                return <button key={index}>{dataItem}</button>
            })}
        </div>
    );
}

export default CalculatorRow;
