import './Quotes.css';
import { useEffect, useState } from 'react';

function Quotes() {

    const [quote, setQuote] = useState({});

    const API_KEY = "zWbFdXe3BQWrlhFsnImSAw==HEDkeSdVW05kaUH7";
    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
            headers: { 'X-Api-Key': API_KEY },
            method: 'GET',
            contentType: 'application/json',
        }).then((response) => response.json()).then((result) => {
            if(result.error){
                setQuote({ quote: "An Error Occurred" })
            } else {
                setQuote(result[0]);
            }
        });
    }, []);

    return (
        !quote.quote ?
            (<div className="quotes">
                <div className="spinner-box">
                    <div className="configure-border-1">
                        <div className="configure-core"></div>
                    </div>
                    <div className="configure-border-2">
                        <div className="configure-core"></div>
                    </div>
                </div>
            </div>
            )
            :
            (quote.author ?
                (<div className="quotes"><p className='quotes__quote'>{quote.quote}</p>
                    <p className='quotes__author'>&quot;{quote.author}&quot;</p></div>) : (<div className="quotes"><p>{quote.quote}</p></div>)
            )
    )
}

export default Quotes;
