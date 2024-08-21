import "./style.css"
import { useState, useEffect } from "react";


const Data = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (<div className="form__date">Dziś jest {date.toLocaleString("pl-PL",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
    }
    </div>);
};

export default Data;