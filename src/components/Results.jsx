import { useState } from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ input }) {

    //const [calculation, setCalculation] = useState();
    const calculationResults = calculateInvestmentResults(input);
    const initialInvestment = calculationResults[0].valueEndOfYear - calculationResults[0].interest - calculationResults[0].annualInvestment;

    console.log("cal===> ", calculationResults);

    // function handleCalculation() {
    //     setCalculation(() => {
    //         calculation = calculateInvestmentResults(input);
    //         console.log("cal===> ", calculationResults);
    //         return cal;
    //     })
    // }

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Invested (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {calculationResults.map(yearData=>{

                const totalInterest = yearData.valueEndOfYear - 
                (yearData.annualInvestment * yearData.year) - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear  - totalInterest;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}