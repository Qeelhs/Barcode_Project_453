const fetch = require('node-fetch');

exports.checkAllergens = async (req, res) => {
    const { nutritionalFacts } = req.body;
    try {
        const response = await fetch('https://api.spoonacular.com/food/products/detect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nutritionalFacts })
        });
        const data = await response.json();
        const allergens = data.allergens;
        res.json({ allergens });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
