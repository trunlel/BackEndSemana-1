const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

let pizzas = []
app.use(express.json())


app.get("/pizzas", (request, response) => {
    const nameQuery = request.query.name || ""
    const pizzasFiltered = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()))
    response.json(pizzasFiltered)
})


app.post("/pizzas", (request, response) => {
    const {name, description, price, ingredients, url} = request.body

    const pizzaExists = pizzas.find(pizza => pizza.name === name)

    if(pizzaExists) {
        return response.status(401).json({error: "Pizza já cadastrada"})
    }

    const pizza = {
        id: uuidv4(),
        name,
        description,
        url,
        price,
        ingredients
    }

    pizzas.push(pizza)
    response.status(201).json(pizza)
})

app.listen(3333, () => {
    console.log("Server On")
})