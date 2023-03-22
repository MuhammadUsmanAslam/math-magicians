import './Calculator.css';
import CalculatorRow from './CalculatorRow.js';
import {useState } from 'react';

function Calculator() {
    const RowData = [["AC", "+/-", "%", "÷"], ["7", "8", "9", "x"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], ["0", ".", "="]];

    const [inputData, setInputData] = useState({
        total: null,
        next: null,
        operation: null,
    });

    return (
        <div className="calculator">
            <div className='calculator__input'>{inputData.total}{inputData.operation}{inputData.next}</div>
            {RowData.map((RowDataItem, index) => {
                return <CalculatorRow key={index} inputData={inputData} setInputData={setInputData} data={RowDataItem} />
            })}
        </div >
    );
}

export default Calculator;
