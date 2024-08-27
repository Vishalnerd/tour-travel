import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//register
export const register = async (req, res) => {
  const { username, email, password, photo } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Username, email, and password are required",
    });
  }

  try {
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword, // Save the hashed password
      photo,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User successfully created",
      data: {
        username: newUser.username,
        email: newUser.email,
        photo: newUser.photo,
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create user. Please try again later.",
    });
  }
};

//login

export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const { password, role, ...rest} = user._doc;

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" } // Token expiration
    );

    // Set token in browser cookies
    res.cookie("accessToken", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Cookie expiration set to 15 days
    }).status(200).json({
      success: true,
      message: "Successful login",
      token,
      data: {...rest},
      role,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to login. Please try again.",
    });
  }
};


