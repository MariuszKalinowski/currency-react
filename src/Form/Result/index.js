import "./style.css"

const Result = ({ result, amount, selectedCurrency, forResult }) => (
    <div className="form__result">

        {result !== null ? <p>{amount} PLN = <strong>{result.toFixed(2)} {selectedCurrency.short}</strong> </p> : null}


    </div>

);

export default Result;