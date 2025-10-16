import { ethers } from "ethers";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const nonces = {}; // temporary store for demo

export const getNonce = async (req, res) => {
  const { address } = req.params;
  const nonce = Math.floor(Math.random() * 1e6).toString();
  nonces[address] = nonce;
  res.json({ nonce });
};

export const verifySignature = async (req, res) => {
  const { address, signature } = req.body;
  const nonce = nonces[address];
  if (!nonce) return res.status(400).json({ error: "Nonce not found" });

  const recovered = ethers.verifyMessage(nonce, signature);
  if (recovered.toLowerCase() !== address.toLowerCase())
    return res.status(401).json({ error: "Invalid signature" });

  let user = await User.findOne({ wallet: address });
  if (!user) user = await User.create({ wallet: address });

  const token = jwt.sign({ id: user._id, wallet: address }, process.env.JWT_SECRET, { expiresIn: "1h" });

  delete nonces[address];
  res.json({ token, user });
};
