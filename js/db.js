const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "shop_db"
});

db.connect(err => {
    if (err) {
        console.log("❌ Lỗi DB");
    } else {
        console.log("✅ MySQL OK");
    }
});

module.exports = db;
app.get("/api/products", (req, res) => {

    db.query("SELECT * FROM products", (err, data) => {
        res.json(data);
    });

});
app.post("/api/orders", (req, res) => {

    let { name, phone, address, cart } = req.body;

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    db.query(
        "INSERT INTO orders(name,phone,address,status,total) VALUES (?,?,?,?,?)",
        [name, phone, address, "pending", total],
        (err, result) => {

            let orderId = result.insertId;

            cart.forEach(item => {

                db.query(
                    "INSERT INTO order_items(order_id,product_id,quantity,price) VALUES (?,?,?,?)",
                    [orderId, item.id, item.quantity, item.price]
                );

            });

            res.json({ message: "Đặt hàng thành công" });
        }
    );
});
app.get("/api/orders", (req, res) => {

    db.query(`
        SELECT orders.*, users.email
        FROM orders
        LEFT JOIN users ON orders.user_id = users.id
    `, (err, data) => {
        res.json(data);
    });

});
app.put("/api/orders/:id", (req, res) => {

    let id = req.params.id;
    let { status } = req.body;

    db.query(
        "UPDATE orders SET status=? WHERE id=?",
        [status, id],
        () => res.json({ message: "Updated" })
    );
});