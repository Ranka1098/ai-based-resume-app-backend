const logout = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "Lax", // ya jo bhi aap use karte ho
    secure: false, // local dev ke liye false, production me true
  });

  res.status(200).json({ message: "Logout successful" });
};

export default logout;
