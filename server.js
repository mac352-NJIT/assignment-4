const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/images', express.static('images'));


const items = [
    { id: 1, name: 'Ruler', price: 2.99, description: 'A 12-inch ruler for measuring.', image: '/images/ruler.jpg' },
    { id: 2, name: 'Notebook', price: 5.49, description: 'A spiral-bound notebook for taking notes.', image: '/images/notebook.jpg' },
    { id: 3, name: 'Pen', price: 1.29, description: 'A blue ink ballpoint pen.', image: '/images/pen.jpg' },
    { id: 4, name: 'Eraser', price: 0.99, description: 'A small eraser for correcting mistakes.', image: '/images/eraser.jpg' }
];

let itemsSelected = [];

app.get('/api/products', (req, res) => {
    res.json(items);
})

app.post('/api/select-product', (req, res) => {
    itemsSelected.push(req.body);
    res.json({ message: 'Products were selected successfully' });
});

app.get('/api/selected-product', (req, res) => {
    res.json(itemsSelected);
});

app.post('/api/submit-review', (req, res) => {
    const review = req.body;
    console.log('Review submitted:', review);
    res.json({ message: 'Your item will be delivered soon' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});