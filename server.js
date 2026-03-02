const http = require("http");

const server = http.createServer();

server.listen(3000, ()=> {
    console.log("Express rodando na porta 3000...")
});

app.use((req, res, next)=> {
    const error = new Error("Not Found...");
    error.status = 404;
    next(error);
});

module.exports = app;

exports.execute = (query, params = [], var_pool = pool) => {
    return new Promise((resolve, reject) => {
        var_pool.query(query, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}