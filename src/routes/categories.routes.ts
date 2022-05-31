import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { Category } from "../module/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const category: Category = {
        name,
        description,
        id: uuidv4(),
        created_at: new Date()
    };

    categories.push(category);

    return response.status(201).send();
});

export { categoriesRoutes };