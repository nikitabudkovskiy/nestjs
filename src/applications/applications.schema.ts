import * as mongoose from 'mongoose'

export const applicationSchema = new mongoose.Schema({
    id: Number,
    isAvailable: Boolean,
    nameApplication: String,
    stateChangedDateTime: Number,
})
