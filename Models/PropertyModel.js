const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    propertyname: {
        type: String,    
    }, 
    status: {
        type: String,
        enum: ['Booked', 'Available'], // Enum for property status
        default: "Available"
    },
    description: {
        type: String,
        default: null, // Optional field for property description
    },
    address: {
        type: String,
    },
    managerId:{
        type: String,
       } , 
      agentId:{
        type: String,
       } , 
    photos: [
        {
          publicId: { type: String },
          url: { type: String },
          originalname: { type: String },
          mimetype: { type: String },
        },
      ],
      status: {
        type: Number,
        enum: [0, 1,], // 0 = inactive, 1 = active, 2 = hold
        default: 0 // Default to 'active'
    },
       type:{
        type: String,//sell,resell,rent
       } ,
       visit_date:{
        type: Date,
        default: Date.now, 
       },
    updatedAt: {
        type: Date,
        default: Date.now, 
      }// Automatically set to the current date
    } ,{ timestamps: true, collection: "property" });
    
    module.exports= mongoose.model("Property",propertySchema);
    