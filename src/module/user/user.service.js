import {userModel} from "../../db/model/user.model.js"
export const createUser =async (data)=>{
  let user = await userModel.create(data)
  return user
}