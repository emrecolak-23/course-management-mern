import mongoose from "mongoose";
import { Password } from "../services/password";

// An interface that describe the properties that
// are required to create a new User
interface UserAttrs {
    displayName: string,
    email: string,
    password: string,
}

// An interface that describe the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
    displayName: string
    email: string,
    password: string,
    role: string
}

const userSchema = new mongoose.Schema({
    displayName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "teacher"],
        default: "admin"
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.password
            delete ret.__v
        } 
    }
})

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'))
        this.set('password', hashed)
    }
})

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export {User}
