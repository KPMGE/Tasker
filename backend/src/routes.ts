import { Router } from "express";

// tasks controllers
import { GetAllTasksController } from "./controllers/tasks/GetAllTasksController";
import { CreateTaskController } from "./controllers/tasks/CreateTaskController";
import { GetTaskByIdController } from "./controllers/tasks/GetTaskByIdController";
import { UpdateTaskController } from "./controllers/tasks/UpdateTaskController";
import { DeleteTaskController } from "./controllers/tasks/DeleteTaskController";

// lists controllers
import { CreateListController } from "./controllers/lists/CreateListController";
import { GetAllListsController } from "./controllers/lists/GetAllListsController";
import { DeleteListController } from "./controllers/lists/DeleteListController";

// instances of controllers for tasks
const getAllTasksController = new GetAllTasksController();
const createTaskController = new CreateTaskController();
const getTaskByIdController = new GetTaskByIdController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();

// instances of controllers for lists
const createListController = new CreateListController();
const getAllListsController = new GetAllListsController();
const deleteListController = new DeleteListController();

const routes = Router();

// routes for tasks
routes.get("/tasks", getAllTasksController.handle);
routes.get("/tasks/:id", getTaskByIdController.handle);
routes.post("/tasks/new", createTaskController.handle);
routes.put("/tasks/update/:id", updateTaskController.handle);
routes.delete("/tasks/delete/:id", deleteTaskController.handle);

// routes for lists
routes.get("/lists", getAllListsController.handle);
routes.post("/lists/new", createListController.handle);
routes.delete("/lists/delete/:id", deleteListController.handle);

export default routes;
