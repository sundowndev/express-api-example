module.exports = (req, res) => {
  const user = req.model;

  res.status(200).json({ user });
};
