
import Project from '../models/Project.js';
import User from '../models/User.js'
// import Timelapse from '../models/Timelapse.js';

export const createProject = async (req, res, next) => {
    try {
        const project = new Project({
            name: req.body.name,
            days: req.body.days,
            description: req.body.description,
            user: "63ef0f84c72473760d654405"
        });

        await project.save();

        await User.findOneAndUpdate(
            { _id: '63ef0f84c72473760d654405' },
            { $addToSet: { project: project._id } },
            { new: true }
        );

        res.status(200).send('Project successfully created');
    } catch (error) {
        res.status(500).send(error.message);
    }
}


export const getAllProjects = async (req, res, next) => {
    try {
        const filter = { user: "63ef0f84c72473760d654405" }
        const allUserProjects = await Project.find(filter)
        res.status(200).send(allUserProjects);
    }

    catch (error) {

        console.log(error)
        res.status(500).send(error.message);

    }

}


