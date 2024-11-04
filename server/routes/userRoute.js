import  Express  from 'express';
import { bookVisit, cancelBookings, createUser, favAdd, getAllBookings, getAllFav } from "../controllers/userController.js";

const router  = Express.Router();

router.post("/register" ,createUser); // first any user has to pass the jwt middle ware if pass then only he will has the option to create user
router.post("/bookVisit/:id",bookVisit);
router.post("/allBookings",getAllBookings);
router.post("/removeBooking/:id",cancelBookings)
router.post("/fav/:rid",favAdd)
router.get("/getFavResidency/",getAllFav)
export{router as userRoute}