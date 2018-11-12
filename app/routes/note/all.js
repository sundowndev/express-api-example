module.exports = (req, res) => {
  const users = [];

  res.status(200).json({ users });
};
