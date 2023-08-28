import RequestMoneyOptionsMyCountry from "./request-money-my-country-options";
import RequestMoneySenderOptions from "./request-money-sender-country-options";

export default function RequestMoney() {
    return (
        <div className="tab-pane fade" id="request-money" role="tabpanel" aria-labelledby="request-money-tab" >
            <form id="form-request-money" method="post">
                <div className="mb-3">
                    <label htmlFor="myCountrie" className="form-label">I am in</label>
                    <RequestMoneyOptionsMyCountry />
                </div>
                <div className="mb-3">
                    <label htmlFor="mypayerCountrie" className="form-label">My payer is in</label>
                    <RequestMoneyOptionsMyCountry />
                </div>
                <div className="mb-4">
                    <label htmlFor="wantTorequest" className="form-label">I want to request</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" data-bv-field="wantTorequest" id="wantTorequest"
                            value="1,000" placeholder="" />
                        <span className="input-group-text p-0">
                            {/* <RequestMoneySenderOptions /> */}
                        </span>
                    </div>
                </div>
                <div className="d-grid"><button className="btn btn-primary">Continue</button></div>
            </form>
        </div>
    )
}