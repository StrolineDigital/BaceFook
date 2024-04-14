const { Thought, User, Reaction } = require('../models');
const { Types } = require('mongoose');

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },

    async getThoughtById({ params }, res) {
        try {
            const thought = await Thought.findOne({ _id: params.id });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            res.status(201).json(thought);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.id });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            await User.findOneAndUpdate(
                { _id: thought.userId },
                { $pull: { thoughts: thought._id } }
            );
            res.json({ message: 'Thought deleted!' });
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },

    async updateThoughtById(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },

    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },

    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    }
};

module.exports = thoughtController;
