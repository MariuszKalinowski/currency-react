import "./style.css"

const Result = ({ result, amount, selectedCurrency, forResult }) => (
    <div className="form__result">

        {result !== null ? <p>{amount}PLN = {result.toFixed(2)} {selectedCurrency.short} </p> : null}
        

    </div>

);

export default Result;