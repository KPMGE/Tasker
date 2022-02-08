import { Router } from "express";
import { CreateListController } from "./controllers/CreateListController";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { GetAllListsController } from "./controllers/GetAllListsController";

const router = Router();

// lists
router.get("/lists", new GetAllListsController().handle);
router.post("/lists/new", new CreateListController().handle);

// tasks
router.get("/tasks", new GetAllListsController().handle);
router.post("/tasks/new", new CreateTaskController().handle);

export { router };
