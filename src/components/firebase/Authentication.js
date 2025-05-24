import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";

const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User Registered:", userCredential.user);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Logged in:", userCredential.user);
  } catch (error) {
    console.error("Login Error:", error.message);
  }
};

const logoutUser = async () => {
  await signOut(auth);
  console.log("User Logged Out");
};
