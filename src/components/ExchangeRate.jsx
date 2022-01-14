function ExchangeRate({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) {
    return (
        <div className="exchange">
            <h3>Excahnge Rate</h3>
            <h1>{exchangeRate}</h1>
            <p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
        </div>
    )
}

export default ExchangeRate
