//"Dzisiaj jest sobota, 25 lipca, 17:02:45"
//"Tue Aug 06 2024 19:40:41 GMT+0200"

import "./style.css"


const Data = () => {

    const date = new Date();

    return (<p>Dziś jest {date.toLocaleString("pl-PL",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        })
    }
    </p>
    );
};

export default Data;