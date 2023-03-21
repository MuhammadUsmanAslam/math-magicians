import './Calculator.css';
import CalculatorRow from './CalculatorRow.js';

function Calculator() {
    const RowData = [["AC", "+/-", "%", "÷"], ["7", "8", "9", "x"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], ["0", ".", "="]];
    return (
        <div className="calculator">
            <input className='calculator__input' type="text" defaultValue={0} />
            {RowData.map((RowDataItem, index) => {
                return <CalculatorRow key={index} data={RowDataItem} />
            })}
        </div >
    );
}

export default Calculator;
