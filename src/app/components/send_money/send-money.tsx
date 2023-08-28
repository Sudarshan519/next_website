'use client'
import { useState } from "react";
import YouSend from "./request_money_receiver_currency_select";
import ReceiverGets from "./request_money_sender_currency";
// const changeBuyPrice = (e: any) => {
//     let value = e.target.value
//     console.log(value);

// }

export default function SendMoney() {
    const [numberValue, setNumberValue] = useState(0);

    // const handleNumberChange = (event: any) => {
    //     const newValue = parseInt(event.target.value, 10); // Parse the input value as an integer
    //     try {
    //         setNumberValue(newValue);
    //     } catch (error) {
    //         setNumberValue(0);
    //     }
    // };
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const handleInputChange1 = (event: any) => {
        const newValue = event.target.value;
        setInputValue1(newValue);
        setInputValue2(newValue);
    };

    const handleInputChange2 = (event: any) => {
        const newValue = event.target.value;
        setInputValue1(newValue);
        setInputValue2(newValue);
    };


    return (
        <div className="tab-pane fade show active" id="send-money" role="tabpanel"
            aria-labelledby="send-money-tab">
            <form id="form-send-money" method="post">
                <div className="mb-3">
                    <label htmlFor="youSend" className="form-label">You Send</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" data-bv-field="youSend" id="youSend"
                            placeholder="" />
                        {/*  onChange={handleNumberChange}  */}

                        <YouSend />

                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="recipientGets" className="form-label">Recipient Gets</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" data-bv-field="recipientGets" id="recipientGets"
                            value={numberValue} placeholder="" onChange={handleInputChange2} />

                        <ReceiverGets />

                    </div>
                </div>
                <p className="text-muted mb-1">Total fees - <span className="fw-500">7.21 USD</span></p>
                <p className="text-muted">The current exchange rate is <span className="fw-500">1 USD = 1.42030 AUD</span>
                </p>
                <div className="d-grid"><button className="btn btn-primary">Continue</button></div>
            </form>
        </div>
    )
}


