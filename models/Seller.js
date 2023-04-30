import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Shopname: { type:String, required: true},
    addres: { type: String, required: true},
    Phoneno: {type:String, required: true},
    Shopetype: {type:String, required: true},
  },
  {
    timestamps: true,
  }
);

const Seller = mongoose.models.Seller || mongoose.model('Seller', sellerSchema);
export default Seller;