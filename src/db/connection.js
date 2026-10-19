import mongoose from "mongoose";
import configService from "../config/config.service.js"
import {userModel} from "./model/user.model.js"

export const DBconnect = async ()=>{
  try {
    await mongoose.connect(configService.DB_URI)
    console.log("DB connected")
    await mongoose.syncIndexes()
  } catch (error) {
    throw error
  }
}
