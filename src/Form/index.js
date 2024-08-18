import "./style.css";
import Result from "./Result"
import { useState } from "react";
import { currencies } from "./currencies"
import Data from "./Data"



const Form = () => {

    const [amount, setAmount] = useState("");
    const [curr, setCurr] = useState(currencies[0].short);
    const [result, setResult] = useState(null);

    const onSetAmount = ({ target }) => setAmount(target.value);
    const onSelectCurr = ({ target }) => setCurr(target.value);
    const selectedCurrency = currencies.find(currency => currency.short === curr);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (selectedCurrency) {
            setResult({
                amount,
                toCurrency: selectedCurrency.short,
                result: amount / selectedCurrency.rate,
            });
        }
    };


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <Data />
                    <label><span className="form__labelText"> Wpisz kwotę w PLN*</span>
                        <input value={amount} onChange={onSetAmount} type="number" min="0,01" step="0.01" className="form__input" required />
                    </label>
                </p>
                <p>
                    <label className="form__label"> <span className="form__labelText">Wybierz walutę</span>
                        <select className="form__select" value={curr} onChange={onSelectCurr}>
                            {currencies.map(currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            ))};
                        </select>
                    </label>
                </p>
            </fieldset>
            <button className="form__button"> Przelicz!</button>
            <Result onFormSubmit={onFormSubmit} result={result} amount={amount} selectedCurrency={selectedCurrency} />
        </form>
    );
};

export default Form;
