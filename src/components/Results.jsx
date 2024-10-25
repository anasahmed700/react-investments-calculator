import { calculateInvestmentResults } from "../util/investment"

const Results = ({ input }) => {
    const resultsData = calculateInvestmentResults(input); 
    console.log(resultsData)
    return (
        <div>Results</div>
    )
}

export default Results