import { calculateInvestmentResults, formatter } from "../util/investment"

const Results = ({ input }) => {
    const resultsData = calculateInvestmentResults(input); 
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearResult) => {
                    const totalInterest = yearResult.valueEndOfYear - yearResult.annualInvestment * yearResult.year - initialInvestment;
                    const totalAmountInvested = yearResult.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearResult.year}>
                            <td>{yearResult.year}</td>
                            <td>{formatter.format(yearResult.valueEndOfYear)}</td>
                            <td>{formatter.format(yearResult.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                        )
                })}
            </tbody>
        </table>
    )
}

export default Results