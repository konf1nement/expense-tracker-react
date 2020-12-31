import React, {useContext, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';
import {numberWithCommas} from '../utils/format';

export const TransactionList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);
    //console.log(context)

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}></Transaction>))}
            </ul>
        </div>
    )
}
