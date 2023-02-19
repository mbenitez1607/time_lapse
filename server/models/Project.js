import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    user: {
        type: String,
        require: true
    },

    images: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Singlefile',
        },
    ],

    timelapse: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Timelapse',
        },
    ]


}, { timestamps: true });

export default mongoose.model('Project', ProjectSchema);