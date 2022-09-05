import * as mongoose from 'mongoose';

const generalTypesSchema = new mongoose.Schema({
  Name: { type: String, required: true, unique: true },
  Description: { type: String },
  DetailRow: {
    RegisterDate: { type: Date },
    RegisterUser: { type: String },
    LastUpdated: { type: Date },
    LastUpdatedUser: { type: String },
    Active: { type: Boolean },
  },
});

export default mongoose.model('CT_GeneralTypes', generalTypesSchema, 'CT_GeneralTypes');
