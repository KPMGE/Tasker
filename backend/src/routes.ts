import { Router } from "express";
import { GetAllTasksController } from "./controllers/GetAllTasksController";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { GetTaskByIdController } from "./controllers/GetTaskByIdController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";

const getAllTasksController = new GetAllTasksController();
const createTaskController = new CreateTaskController();
const getTaskByIdController = new GetTaskByIdController();
const updateTaskController = new UpdateTaskController();

const routes = Router();

routes.get("/tasks", getAllTasksController.handle);
routes.get("/tasks/:id", getTaskByIdController.handle);
routes.post("/tasks/new", createTaskController.handle);
routes.put("/tasks/update/:id", updateTaskController.handle);

export default routes;
