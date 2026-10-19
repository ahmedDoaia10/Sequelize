import { Router } from "express";
import * as bs from "./blog.service.js";
import { successResponse } from "../../common/utils/response.js";
export let blogRouter = Router();

blogRouter.post("/", async (req, res) => {
  let data  = await bs.CreateBlog(req.body);
  successResponse({
    res , data , message : "Blog Created successfully"
  })
  
});




blogRouter.get("/", async (req, res) => {
  let data = await bs.getAllBlogs(req.query);
  successResponse({
    res , data , message : "Blog fetched"
  })
});



blogRouter.get("/userBlogs/:userId", async (req, res) => {
  let data = await bs.getUserBlogs(req.params.userId);
  successResponse({
    res , data , message : "Blogs fetched"
  })
});




blogRouter.put("/:userId/:blogId", async (req, res) => {
  let [data] = await bs.updateBlog(req.params.userId , req.params.blogId , req.body);
  successResponse({
    res , data , message : `Blogs ${data ? "updated" : "not found"} ` , status : data ? 200 : 404
  })
});


blogRouter.delete("/:userId/:blogId", async (req, res) => {
  let data = await bs.deleteBlog(req.params.userId , req.params.blogId);
  successResponse({
    res , data , message : `Blogs ${data ? "deleted" : "not found"} ` , status : data ? 200 : 404
  })
});


blogRouter.delete("/hard/:userId/:blogId", async (req, res) => {
  let data = await bs.hardDeleteBlog(req.params.userId , req.params.blogId);
  successResponse({
    res , data , message : `Blogs ${data ? "deleted" : "not found"} ` , status : data ? 200 : 404
  })
});




blogRouter.patch("/restore/:userId/:blogId", async (req, res) => {
  let data = await bs.restoreBlog(req.params.userId , req.params.blogId);
  successResponse({
    res , data , message : `Blogs ${data ? "restored" : "not found"} ` , status : data ? 200 : 404
  })
});





// blogRouter.delete("/:id", async (req, res) => {
//   let result = await bs.deleteUser(req.params.id);
//   res.status(result ? 200 : 404).json({
//     message: `user ${result ? "deleted" : "not found"}`,
//     data: result,
//   });
// });



// blogRouter.delete("/hard-Delete/:id", async (req, res) => {
//   let result = await bs.HardDeleteUser(req.params.id);
//   res.status(result ? 200 : 404).json({
//     message: `user ${result ? "deleted" : "not found"}`,
//     data: result,
//   });
// });



// blogRouter.patch("/:id", async (req, res) => {
//   let result = await bs.restoreUser(req.params.id , req.body);
//   res.status(result ? 200 : 404).json({
//     message: `user ${result ? "restore" : "not found"}`,
//     data: result,
//   });
// });
