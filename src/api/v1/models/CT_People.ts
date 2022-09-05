import * as mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  IdPersonBK: { type: String, required: true },
  Name: { type: String, required: true },
  LastName: { type: String, required: true },
  BirthDate: { type: Date },
  RFC: { type: String },
  CURP: { type: String },
  Gender: { type: String },
  Alias: { type: String },
  Type: { type: mongoose.Schema.Types.ObjectId, ref: 'CT_Types' },
  Addresses: [
    {
      _id: false,
      Street: { type: String },
      OutdoorNumber: { type: String },
      IndoorNumber: { type: String },
      Neighborhood: { type: String },
      BetweenStreet1: { type: String },
      BetweenStreet2: { type: String },
      City: { type: String },
      Municipality: { type: String },
      State: { type: String },
      Country: { type: String },
      ZipCode: { type: String },
      IsMain: { type: Boolean },
      Type: { type: mongoose.Schema.Types.ObjectId, ref: 'CT_Types' },
      DetailRow: {
        RegisterDate: { type: Date },
        RegisterUser: { type: String },
        LastUpdated: { type: Date },
        LastUpdatedUser: { type: String },
        Active: { type: Boolean },
      },
    },
  ],
  Phones: [
    {
      _id: false,
      Code: { type: String },
      Number: { type: String },
      IsMain: { type: Boolean },
      Type: { type: mongoose.Schema.Types.ObjectId, ref: 'CT_Types' },
      DetailRow: {
        RegisterDate: { type: Date },
        RegisterUser: { type: String },
        LastUpdated: { type: Date },
        LastUpdatedUser: { type: String },
        Active: { type: Boolean },
      },
    },
  ],
  WebAddresses: [
    {
      _id: false,
      Address: { type: String },
      Description: { type: String },
      IsMain: { type: Boolean },
      Type: { type: mongoose.Schema.Types.ObjectId, ref: 'CT_Types' },
      DetailRow: {
        RegisterDate: { type: Date },
        RegisterUser: { type: String },
        LastUpdated: { type: Date },
        LastUpdatedUser: { type: String },
        Active: { type: Boolean },
      },
    },
  ],
  DetailRow: {
    RegisterDate: { type: Date },
    RegisterUser: { type: String },
    LastUpdated: { type: Date },
    LastUpdatedUser: { type: String },
    Active: { type: Boolean },
  },
});

export default mongoose.model('CT_People', personSchema, 'CT_People');
