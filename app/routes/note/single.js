module.exports = (req, res) => {
  const note = req.model;

  res.status(200).json({ note });
};
