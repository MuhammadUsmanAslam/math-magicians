import './Calculator.css';

function Calculator() {
    return (
        <div className="calculator">

            <input className='calculator__input' type="text" defaultValue={0} />
            <div className="calculator__row">
                <button>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button>÷</button>
            </div>

            <div className="calculator__row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>x</button>
            </div>

            <div className="calculator__row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
            </div>

            <div className="calculator__row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
            </div>

            <div className="calculator__row calculator__row-last">
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>

        </div >
    );
}

export default Calculator;
