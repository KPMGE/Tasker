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
import { GetListByIdController } from "./controllers/lists/GetListByIdController";
import { UpdateListController } from "./controllers/lists/UpdateListController";
import { GetTasksFromListController } from "./controllers/lists/GetTasksFromListController";

// instances of controllers for tasks
const getAllTasksController = new GetAllTasksController();
const createTaskController = new CreateTaskController();
const getTaskByIdController = new GetTaskByIdController();
const updateTaskController = new UpdateTaskController();
const deleteTaskController = new DeleteTaskController();
const getListByIdController = new GetListByIdController();

// instances of controllers for lists
const createListController = new CreateListController();
const getAllListsController = new GetAllListsController();
const deleteListController = new DeleteListController();
const updateListController = new UpdateListController();
const getTasksFromListController = new GetTasksFromListController();

const routes = Router();

// routes for tasks
routes.get("/tasks", getAllTasksController.handle);
routes.get("/tasks/:id", getTaskByIdController.handle);
routes.post("/tasks/new", createTaskController.handle);
routes.put("/tasks/update/:id", updateTaskController.handle);
routes.delete("/tasks/delete/:id", deleteTaskController.handle);

// routes for lists
routes.get("/lists", getAllListsController.handle);
routes.get("/lists/:id", getListByIdController.handle);
routes.get("/list/tasks/:id", getTasksFromListController.handle);
routes.post("/lists/new", createListController.handle);
routes.delete("/lists/delete/:id", deleteListController.handle);
routes.put("/lists/update", updateListController.handle);

export default routes;
