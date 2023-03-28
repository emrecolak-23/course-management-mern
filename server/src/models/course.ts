import mongoose from "mongoose";

// An interface that describe the properties that
// are required to create a new Course
interface CourseAttrs {
   name: string,
   description: string,
   category: string
}

// An interface that describe the properties
// that a CourseModel has
interface CourseModel extends mongoose.Model<CourseDoc> {
    build(attrs: CourseAttrs): CourseDoc
}

// An interface that describes the properties
// that a Course Document has
interface CourseDoc extends mongoose.Document {
   name: string,
   description: string,
   category: string
}

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    },
    timestamps: true
})

courseSchema.statics.build = (attrs: CourseAttrs) => {
    return new Course(attrs)
} 

const Course = mongoose.model<CourseDoc, CourseModel>('Course', courseSchema)

export {Course}