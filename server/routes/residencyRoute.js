import  Express  from 'express';
import { createResidency, getAllResidencies, getResidency } from '../controllers/residencyController.js';
import jwtCheck from '../config/auth0Config.js';

const router  = Express.Router();

router.post("/create",jwtCheck,createResidency)
router.get("/allresd",getAllResidencies)
router.get("/:id",getResidency)
export{router as residencyRoute}