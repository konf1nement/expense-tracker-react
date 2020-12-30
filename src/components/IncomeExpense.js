import React from 'react'

export const IncomeExpense = () => {
    return (
        <div className="inc-exp-container">
            <div className="">
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+$0.00</p>
            </div>
            <div className="">
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-$0.00</p>
            </div>
        </div>
    )
}