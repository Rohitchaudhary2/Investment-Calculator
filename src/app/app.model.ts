export interface Data {
    initialInvestment: number,
    duration: number, 
    annualInvestment: number, 
    expectedReturn: number
}

export interface Result {
    year: number, 
    interest: number, 
    annualInvestment: number,
    totalAmountInvested: number, 
    totalInterest: number,
    valueEndOfYear: number
}

