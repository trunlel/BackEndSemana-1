import { v4 as uuidv4 } from "uuid";

export function findMany(request, response) {
  const nameQuery = request.query.name || "";
  const pizzasFiltered = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(nameQuery.toLowerCase())
  );
  response.json(pizzasFiltered);
}

export function create(request, response) {
  const { name, description, price, url, ingredients } = request.body;

  const pizzaExists = pizzas.find((pizza) => pizza.name === name);

  if (pizzaExists) {
    return response
      .status(401)
      .json({ error: "Pizza já encontra-se cadastrada" });
  }

  const pizza = {
    id: uuidv4(),
    name,
    url,
    description,
    price,
    ingredients,
  };

  pizzas.push(pizza);

  response.status(201).json(pizza);
}
