import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export async function signup(req, res, next) {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User created succesfully" });
  } catch (err) {
    next(err);
  }
}
