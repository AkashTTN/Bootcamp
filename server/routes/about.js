module.exports = app => {
    app.get('/about', (req, res) => {
        res.status(200).end(JSON.stringify('Some Content'))
    })
}