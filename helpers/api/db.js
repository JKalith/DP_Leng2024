import getConfig from "next/config";
import mongoose from "mongoose";
import { string } from "prop-types";

const { serverRuntimeConfig } = getConfig();
const { Schema } = mongoose;
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Conexión a MongoDB
mongoose.connect(
  process.env.MONGODB_URI || serverRuntimeConfig.connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.Promise = global.Promise;

const userModel = () => {
  const schema = new Schema(
    {
      username: { type: String, unique: true, required: true },
      hash: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.User || mongoose.model("User", schema);
};



const activityModel = () => {
  const activitySchema = new Schema(
    {
      nameActivity: { type: String, required: true },
      userId:{type: String, required: true},
      place: { type: String, required: true },
      email: { type: String, required: true },
      instagram: { type: String, required: true },
      facebook: { type: String, required: true },
      phone: { type: String, required: true },
      startDate: { type: String, required: true },
      endDate: { type: String, required: true },
      startTime: { type: String, required: true },
      endTime: { type: String, required: true },
      activityDescription: { type: String, required: true },
      activityCategory: [{ type: String, required: true }],
      allowRegistration: { type: Boolean, default: false },
      maxPersonRegistration: { type: Number, default: 0 },
      latitude: { type: String },
      longitude: { type: String },
      imageUrl: [{ type: String }],
      indiceImagenPrincipal: { type: Number },
    },
    {
      timestamps: true,
    }
  );

  activitySchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Activity || mongoose.model("Activity", activitySchema);
};

const personModel = () => {
  const schema = new Schema(
    {
      idActivity: { type: String },
      identification: { type: String, required: true },
      name: { type: String, required: true },
      lastName: { type: String, required: true },
      secondLastName: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: (doc, ret) => {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.Person || mongoose.model("Person", schema);
};

export const db = {
  User: userModel(),
  Activity: activityModel(),
  Person: personModel(),
};
