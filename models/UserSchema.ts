import mongoose, {Document, model, models, Schema} from "mongoose";

const userSchema = new Schema({
    clerkUserId: {type: String, unique: true, required: true},
    emailAddress: {type: String, required: true},
}, {timestamps: true});

const User = models.User || model('User', userSchema);

export default User;