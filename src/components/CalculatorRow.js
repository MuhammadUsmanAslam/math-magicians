import './CalculatorRow.css';
import PropTypes from "prop-types";
import calculate from "../logic/calculate.js"

function CalculatorRow(props) {

    CalculatorRow.propTypes = {
        data: PropTypes.array.isRequired,
        inputData: PropTypes.object.isRequired,
        setInputData: PropTypes.func.isRequired
    }

    const {data, inputData, setInputData} = props;

    return (
        <div className="calculator__row">
            {data.map((dataItem, index) => {
                return <button onClick={(e)=>{
                    const result = calculate(inputData, e.target.name);
                    setInputData({
                    total: result.total,
                    next: result.next,
                    operation: result.operation
                    })
                }} key={index} name={dataItem}>{dataItem}</button>
            })}
        </div>
    );
}

export default CalculatorRow;
