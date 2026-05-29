const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "https://user-crud-gamma.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

let users = [
  { id: 1, name: "Fatima", email: "fatima@gmail.com" },
  { id: 2, name: "Ali", email: "ali@gmail.com" },
];

// ROOT ROUTE
app.get("/" , (req,res)=> {
  res.send("Backend is running");
});

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET one user
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  res.json(user);
});

// CREATE user
app.post("/users", (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

// UPDATE user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);

  res.json({ message: "Utilisateur supprimé" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});