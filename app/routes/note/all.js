module.exports = (req, res) => {
  const notes = [];

  res.status(200).json({ notes });
};
