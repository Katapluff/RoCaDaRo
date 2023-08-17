import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

// Obtener un usuario por su ID
const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

// Create User
const createUser = async (req, res) => {
  console.log("req", req.body);
  const { name, email, password } = req.body;

  try {
    const saltRound = 12;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedSaltedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedSaltedPassword;

    const newUser = User(req.body);
    console.log("newUser", newUser);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ email });

    // Verificar si el usuario existe
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    // Verificar si la contraseña es correcta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Crear y firmar el token JWT
    const token = jwt.sign({ userId: user._id }, "mi_secreto");
    res
      .cookie("authToken", token, {
        httpOnly: true,
        // ... Weitere Optionen für das Cookie ...
      })
      .json({ message: "Anmeldung erfolgreich", token });
    // Enviar el token al cliente
    // res.json({ message: "hat geklappt" });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ message: "Error en el inicio de sesión" });
  }
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser, login };
