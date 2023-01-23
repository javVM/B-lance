import mongoose from 'mongoose';
const { Schema } = mongoose;

const dayBalanceSchema = new Schema({
    
});

exports.DayBalance = mongoose.model('DayBalance', dayBalanceSchema);