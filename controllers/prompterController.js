const { Prompter } = require('../models/index');

//signup function
const signup = async (req, res) => {
    console.log('this it the sign up controller');
    console.log(req.body);
    const { name, email, password } = req.body;
    try {
        const [newPrompter, wasCreated] = await Prompter.findOrCreate({

            where: { email },
            defaults: {
                name,
                email,
                password
            }
        })
        if (wasCreated) {
            res.json({ message: 'signed up' })
        } else {
            res.json({ message: 'email taken' })
        }
    } catch (error) {
        console.log('error signing up new prompter', error);
        res.json({ message: 'internal server error', error });
    }

}

const login = async (req, res) => {
    console.log('this is the log in controller');
    console.log(req.body);
    const { email, password } = req.body;
    try {
        const isPrompter = await Prompter.findOne({
            where: { email }
        })
        if (!isPrompter) {
            res.json({ message: 'This email has no associated Ghost account' })
        } else if (!!Prompter) {
            const isPasswordCorrect = await Prompter.findOne({
                where: { email, password }
            })
            if (!isPasswordCorrect) {
                res.json({ message: 'password is incorret' });
            } else if (!!isPasswordCorrect) {
                res.json('logged in');
            }
        }
    } catch (error) {
        console.log('error trying to log in prompter', error);
        res.json({ message: 'internal server error' });
    }
}

module.exports = { signup, login };