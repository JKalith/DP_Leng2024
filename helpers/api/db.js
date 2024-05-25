import getConfig from 'next/config';
import mongoose from 'mongoose';
import { date } from 'yup';

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString);
mongoose.Promise = global.Promise;

export const db = {
    User: userModel(),
    Car: carModel(),
    Activities: activityModel(),
    Person: PersonModel()
};

// mongoose models with schema definitions

function userModel() {
    const schema = new Schema({
        username: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.User || mongoose.model('User', schema);
}
function carModel() {
    const schema = new Schema({
        idCar: { type: String, unique: true, required: true },
        brand: { type: String, required: true },
        carType: { type: String, required: true },
        year: { type: String, required: true }
        
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.Car || mongoose.model('Car', schema);
}
function activityModel() {
    const schema = new Schema({
        idActivity: { type: Number, unique: true, required: true },
        nameActivity: { type: String, required: true },
        place: { type: String, required: true },
        email: { type: String, required: true },
        instagram: { type: String, required: true },
        facebook: { type: String, required: true },
        phone: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        activityDescription: { type: String, required: true },
        activityCategory: { type: String, required: true },
        allowRegistration: { type: Boolean, default: false },
        maxPersonRegistration: { type: Number, default: 0 },
        latitude: { type: String },
        altitude: { type: String },
        imageUrl:[{type: String}]
        
    
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });
  
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.Activities || mongoose.model('Activities', schema);
}
function PersonModel() {
    const schema = new Schema({
        idPerson: { type: String, unique: true, required: true },
        idActivity:{type: String,required: true},
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        secondLastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });

    return mongoose.models.Person || mongoose.model('Person', schema);
}
