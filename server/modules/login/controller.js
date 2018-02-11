const LOGIN_URL = "/";

export default app => {
    app.get(LOGIN_URL, function (req, res) {
        res.send("hola");
    });
}