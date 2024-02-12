  const express=require("express");
  //to create route we need router
  const router=express.Router();
  //import controller
  const {login,signup}=require("../controllers/auth");
  //define api routes
  //this is the way to create post route
  //this way we map createTodo controller with route
  router.post("/login",login);
  router.post("/signup",signup);
    module.exports=router;