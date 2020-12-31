//Get all transcations
//GET /api/v1/transactions
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

//add transcations
//POST /api/v1/transactions
exports.addTransactions = (req, res, next) => {
    res.send('POST transactions');
}

//delete transcations
//delete /api/v1/transactions:id
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transactions');
}