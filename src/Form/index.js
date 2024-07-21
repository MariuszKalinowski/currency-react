import "./style.css";
import Result from "./Result"

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>
                <label><span className="form__labelText"> Wpisz kwotę w PLN*</span>
                    <input type="number" min="0,01" max="9999999" step="0.01" className="form__input" required />
                </label>
            </p>
            <p>
                <label className="form__label"> <span className="form__labelText">Wybierz walutę</span>
                    <select className="form__select" name="selectCurrency">
                        <option value="EUR">Euro</option>
                        <option value="USD">Dolar amerykański</option>
                        <option value="GBP">Funt brytyjski</option>
                    </select>
                </label>
            </p>
        </fieldset>
        <button className="form__button"> Przelicz!</button>
        <Result />
    </form>
);

export default Form;
