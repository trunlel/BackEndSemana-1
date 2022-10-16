import { v4 as uuidv4 } from "uuid";

export function findMany(request, response) {
  response.json([]);
}

export function findOne(request, response) {
  const { id } = request.params;

  const solicitation = solicitations.find(
    (solicitation) => solicitation.id === id
  );

  return response.json(solicitation);
}

export function create(request, response) {
  const {
    name_client,
    document_client,
    contact_client,
    address_client,
    payment_method,
    observations,
    pizzas,
  } = request.body;

  const soliciation = {
    id: uuidv4(),
    name_client,
    document_client,
    contact_client,
    address_client,
    payment_method,
    observations,
    pizzas,
    order: "EM PRODUÇÃO",
  };

  solicitations.push(soliciation);

  response.status(201).json(soliciation);
}
