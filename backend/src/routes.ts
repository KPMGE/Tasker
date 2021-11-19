import { Router } from "express";
import { GetAllTasksController } from "./controllers/GetAllTasksController";
import { CreateTaskController } from "./controllers/CreateTaskController";

const getAllTasksController = new GetAllTasksController();
const createTaskController = new CreateTaskController();

const routes = Router();

routes.get("/tasks", getAllTasksController.handle);
routes.post("/tasks/new", createTaskController.handle);

export default routes;
