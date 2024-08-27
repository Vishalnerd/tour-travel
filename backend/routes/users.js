import express from "express";
import { updateUser,deleteUser,getSingleUser,getAllUser } from "../controller/userController.js";
const router=express.Router();
import { verifyAdmin,verifyUser } from "../utils/verifyToken.js";

router.put('/:id',verifyUser, updateUser);
router.delete('/:id',verifyUser,deleteUser);
router.get('/:id',verifyUser,getSingleUser);
router.get('/',verifyAdmin,getAllUser);

export default router;