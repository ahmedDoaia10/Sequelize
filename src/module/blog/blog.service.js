import { Op } from "sequelize";
import { blogModel, userModel } from "../../db/model/index.js";

export const CreateBlog = async (data) => {
  return await blogModel.create(data);
};

export const getAllBlogs = async (data) => {
  return await blogModel.findAll({
    include: [{ model: userModel }],
  });
};

export const getUserBlogs = async (userId) => {
  return await blogModel.findAll({
    where: {
      authorId: userId,
    },
  });
};

export const updateBlog = async (userId, blogId, data) => {
  return await blogModel.update(data, {
    where: {
      id: blogId,
      authorId: userId,
    },
  });
};

export const deleteBlog = async (userId, blogId) => {
  return await blogModel.destroy({
    where: {
      id: blogId,
      authorId: userId,
    },
  });
};

export const restoreBlog = async (userId, blogId) => {
  return await blogModel.restore({
    where: {
      id: blogId,
      authorId: userId,
    },
  });
};

export const hardDeleteBlog = async (userId, blogId) => {
  return await blogModel.destroy({
    where: {
      id: blogId,
      authorId: userId,
    },
    force: true,
  });
};









// db.users.insertMany([{name:"ali",age:27},{name:"ali",age:"01234987654"}])
















// db.createCollection("users", {
//   validator: { $and: [{ name: { $type: "string" } }, { age: { $type: 16 } }] },
// });

// db.createCollection("users", {validator:{ $and:[{name: {$type:"string"}},{age:{$type:16}}]}})

