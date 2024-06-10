import express from "express";
import { postLog } from "../middleware/posts.middleware.js";
import * as controller  from '../controller/controller.posts.js';



const router = express.Router();



  // Obtener todos los posts
  router.get('/posts', postLog,controller.getPost)
  
  // Crear un nuevo post
  router.post('/posts', postLog,controller.agregarPost)
 
  
  // Dar like a un post
  router.put('/posts/like/:id',postLog,controller.like)
  
  
  // Eliminar un post
  router.delete('/posts/:id', postLog,controller.eliminarPost)


  // Cualquier otra Ruta
  router.all('*',controller.notFund)
  
 export default router;

 
