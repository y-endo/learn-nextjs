export default (req, res) => {
  res.status(200).json({
    quote: 'Write tests',
    author: 'Yuki'
  });
};
