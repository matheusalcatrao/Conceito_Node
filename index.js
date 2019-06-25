const express = require('express');

const app = express();

app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    return res.json({mensagem: `Buscando usuario ${id}` });
})


app.listen(3000);