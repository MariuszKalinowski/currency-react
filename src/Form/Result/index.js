import "./style.css"

const Result = ({ result }) => (
    <div className="form__result">

        {result ? (
            <p className="form__resultText">
                {result.amount} PLN = <strong>
                    {result.result.toFixed(2)} {result.toCurrency}</strong>
            </p>
        ) : null}

    </div>

);

export default Result;
