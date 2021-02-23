// === Server ===
// --- Require and create Express app ---
const express = require("express");
const app = express();

// --- Set Express PORT ---
const PORT = process.env.PORT || 3001;

// --- Express Middleware ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- Server Routes ---
app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});

// --- Listen on designated port ---
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

