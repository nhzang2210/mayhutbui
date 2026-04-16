const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

/* ================= MYSQL CONNECTION ================= */
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456", 
    database: "shop_db"
});

db.connect(err => {
    if (err) {
        console.log("❌ Lỗi MySQL:", err);
    } else {
        console.log("✅ MySQL Connected!");
    }
});

/* ================= AUTHENTICATION ================= */
app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;
    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'user')";
    db.query(sql, [name, email, password], (err) => {
        if (err) return res.json({ message: "Lỗi đăng ký!" });
        res.json({ message: "Đăng ký thành công!" });
    });
});

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT id, name, email, role FROM users WHERE email=? AND password=?";
    db.query(sql, [email, password], (err, result) => {
        if (err) return res.status(500).json({ message: "Lỗi server" });
        if (result.length === 0) return res.json({ message: "Sai tài khoản!" });
        res.json({ message: "Đăng nhập thành công!", user: result[0] });
    });
});

/* ================= ORDERS SYSTEM ================= */
/* ================= ORDERS SYSTEM (SỬA LỖI COLUMN EMAIL) ================= */
app.post("/api/orders", (req, res) => {
    // Đảm bảo lấy đúng trường email từ req.body
    const { name, phone, address, email, total, cart } = req.body;

    const sqlOrder = "INSERT INTO orders (name, phone, address, email, total) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlOrder, [name, phone, address, email, total], (err, result) => {
        if (err) {
            console.error("Lỗi MySQL:", err.message);
            return res.status(500).json({ message: "Lỗi tạo đơn" });
        }
        // ... (phần lưu vào order_items giữ nguyên)
        res.json({ message: "Thành công!", orderId: result.insertId });
    });
});

/* ================= ADMIN & SHIPPER API ================= */

app.get("/api/stats", (req, res) => {
    const sql = "SELECT SUM(total) as revenue, COUNT(id) as totalOrders FROM orders";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ revenue: result[0].revenue || 0, totalOrders: result[0].totalOrders || 0 });
    });
});

app.get("/api/chart", (req, res) => {
    const sql = "SELECT DATE(created_at) as date, SUM(total) as total FROM orders GROUP BY DATE(created_at) ORDER BY date ASC LIMIT 10";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
});

// Trong server.js
app.get("/api/admin/orders-full", (req, res) => {
    // Phải có "status" trong danh sách SELECT
    const sql = "SELECT id, name, email, phone, address, total, shipper_name, status, order_date FROM orders ORDER BY id DESC";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.get("/api/shippers", (req, res) => {
    db.query("SELECT * FROM shippers", (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
});

app.post("/api/assign-shipper", (req, res) => {
    const { orderId, shipperId } = req.body;
    db.query("UPDATE orders SET shipper_id = ? WHERE id = ?", [shipperId, orderId], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Thành công!" });
    });
});

/* ================= START SERVER ================= */
app.listen(3000, () => {
    console.log("🚀 Server đang chạy tại: http://localhost:3000");
});
// API cập nhật trạng thái đơn hàng (Sửa lỗi hoặc cập nhật)

app.put("/api/admin/orders/:id/status", (req, res) => {
    const orderId = req.params.id;
    const { status } = req.body; // Lấy chữ 'completed' từ giao diện gửi lên

    const sql = "UPDATE orders SET status = ? WHERE id = ?";
    
    db.query(sql, [status, orderId], (err, result) => {
        if (err) {
            console.error("Lỗi cập nhật Database:", err);
            return res.status(500).json({ message: "Lỗi Server" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
        }
        res.json({ message: "Cập nhật thành công" });
    });
});
app.get("/api/my-orders", (req, res) => {
    const { email } = req.query;
    // Đảm bảo có cột status trong câu lệnh SELECT
    const sql = "SELECT id, name, total, status, created_at FROM orders WHERE email = ? ORDER BY id DESC";
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});