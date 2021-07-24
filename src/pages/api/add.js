module.exports = (req, res) => {
    const { num1 = 0, num2 = 0 } = req.query;
    const num1Int = parseInt(num1) || 0;
    const num2Int = parseInt(num2) || 0;
    res.status(200).send({
        result: num1Int + num2Int,
    });
};