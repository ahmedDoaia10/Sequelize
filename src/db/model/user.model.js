import mongoose, { Schema } from "mongoose";

let userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      minLength: [2, `{VALUE} is to short as a first Name `],
      maxLength: [20, "{VALUE} is to short as a first Name "],
      trim: true,
      validator: (data) => {
        console.log(data, "data here");
        return false;
      },
    },
    lastName: {
      type: String,
      required: true,
      minLength: [2, `{VALUE} is to short as a first Name `],
      maxLength: [20, "{VALUE} is to short as a first Name "],
      trim: true,
    },
    email: {
      type: String,
      required: true,
      minLength: [2, `{VALUE} is to short as a first Name `],
      maxLength: [20, "{VALUE} is to short as a first Name "],
      trim: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      minLength: 11,
      maxLength: 11,
      unique: true,
    },
  },
  {
     timestamps: true

  },
);


// export userSchema