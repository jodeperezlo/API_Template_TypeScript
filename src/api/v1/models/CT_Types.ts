import * as mongoose from 'mongoose';

const typesSchema = new mongoose.Schema({
  Name: { type: String, required: true, unique: true },
  Description: { type: String },
  GeneralType: { type: mongoose.Schema.Types.ObjectId, ref: 'CT_GeneralTypes' },
  DetailRow: {
    RegisterDate: { type: Date },
    RegisterUser: { type: String },
    LastUpdated: { type: Date },
    LastUpdatedUser: { type: String },
    Active: { type: Boolean },
  },
});

export default mongoose.model('CT_Types', typesSchema, 'CT_Types');
