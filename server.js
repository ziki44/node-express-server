import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        messages: [
            {
                id:1,
                author: "Daniel",
                message: "Fajny kurs11"
            }
        ]
    })
})

app.listen(5000, () => {
    console.log(`Server id running on port 5000`);
})