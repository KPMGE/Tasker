import { Router } from "express";
import { GetAllTasksController } from "./controllers/GetAllTasksController";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { GetTaskByIdController } from "./controllers/GetTaskByIdController";
import { UpdateTaskController } from "./controllers/UpdateTaskController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";

// instances of controllers
const getAllTasksController = new GetAllTasksController();
const createTaskController = new CreateTaskController();
const getTaskByIdController = new GetTaskByIdController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

const routes = Router();

// routes
routes.get("/tasks", getAllTasksController.handle);
routes.get("/tasks/:id", getTaskByIdController.handle);
routes.post("/tasks/new", createTaskController.handle);
routes.put("/tasks/update/:id", updateTaskController.handle);
routes.delete("/tasks/delete/:id", deleteTaskController.handle);

export default routes;
