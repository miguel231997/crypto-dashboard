import ExchangeRate from "./ExchangeRate"
import { useState } from 'react';
import axios from "axios";

function CurrencyConverter() {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
    const [chosenPrimaryCurrency, SetChosenPrimaryCurrency] = useState('BTC');
    const [chosenSecondaryCurrency, SetChosenSecondaryCurrency] = useState('BTC');
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0)

    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://localhost:8000/convert',
            params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
        };

        axios.request(options).then((response) => {
            console.log(response.data);
            setResult(response.data * amount)

            setExchangeRate({
                primaryCurremcy: chosenPrimaryCurrency,
                secondaryCurrency: chosenSecondaryCurrency,
                exchangeRate: response.data
            })
        }).catch((error) => {
            console.error(error)
        })
            }

    return (
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>

            <div className = "input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency:</td>
                            <td>
                                <input 
                                    type = 'number'
                                    name = 'currency-amount-1'
                                    value = {amount}
                                    onChange={(event) => setAmount(event.target.value)}
                                    />
                            </td>
                            <td>
                                <select
                                    value = {chosenPrimaryCurrency}
                                    name = "currency-option-1"
                                    className = "currency-option"
                                    onChange={(event) => SetChosenPrimaryCurrency(event.target.value)}
                                    >
                                    {currencies.map((currency, _index) => (<option key = {_index}>{currency}</option>))}

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Seconday Currency:</td>
                            <td>
                                <input 
                                    type = 'number'
                                    name = 'currency-amount-2'
                                    value = {result}
                                    disabled = {true}
                                    />
                            </td>
                            <td>
                                <select
                                    value = {chosenSecondaryCurrency}
                                    name = "currency-option-2"
                                    className = "currency-option"
                                    onChange={(event) => SetChosenSecondaryCurrency(event.target.value) }
                                    >
                                    {currencies.map((currency, _index) => (<option key = {_index}>{currency}</option>))}

                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button id = "convert-button" onClick={convert}>
                    Convert
                </button>
            </div>
            <ExchangeRate exchangeRate = {exchangeRate} chosenPrimaryCurrency = {chosenPrimaryCurrency} 
            chosenSecondaryCurrency = {chosenSecondaryCurrency}
            />
        </div>
    )
}

export default CurrencyConverter
