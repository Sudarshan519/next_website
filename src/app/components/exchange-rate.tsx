import RequestMoney from "./request_money/request-money"
import SendMoney from "./send_money/send-money"

export default function ExchangeRage() {
    return (
        <div className="col-lg-6 col-xl-5 my-auto" suppressHydrationWarning>
            <ul className="nav nav-tabs nav-justified alternate bg-white rounded-top" id="myTab" role="tablist">
                <li className="nav-item"> <a className="nav-link active" id="send-money-tab" data-bs-toggle="tab"
                    href="#send-money" role="tab" aria-controls="send-money" aria-selected="true">Send Money</a> </li>
                <li className="nav-item"> <a className="nav-link" id="request-money-tab" data-bs-toggle="tab"
                    href="#request-money" role="tab" aria-controls="request-money" aria-selected="false">Request
                    Money</a> </li>
            </ul>
            <div className="tab-content p-4 bg-white rounded-bottom" id="myTabContent">
                <SendMoney />
                <RequestMoney />

            </div>
        </div>
    )
}