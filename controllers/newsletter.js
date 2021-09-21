const Subscriber = require('../models/subscribers');

const subCtrl = {
    subscribe: async (req, res) => {
        try {
            const {firstname, lastname, email} = req.body;
            
            if(!email) return res.status(400).json({msg: 'You did not enter an email.'});

            if(!validateEmail(email)) return res.status(400).json({msg: 'Invalid email address'});

            const user = await Subscriber.findOne({email});
            if(user) return res.status(400).json({msg: "This email already exists"});

            const newSubscriber = new Subscriber({
                firstname, lastname, email
            });

            await newSubscriber.save();

            res.json({msg: 'Subscribed'})
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },
    unsubscribe: async (req, res) => {
        try {
            const {existingEmail} = req.body;
            console.log(req.body);

            if(!existingEmail) return res.status(400).json({msg: 'You did not enter an email.'});

            if(!validateEmail(existingEmail)) return res.status(400).json({msg: 'Invalid email address'});

            const user = await Subscriber.findOne({email: existingEmail});
            if(!user) return res.status(400).json({msg: "This email is not subscribed to us."});

            await Subscriber.findOneAndRemove({email: existingEmail}).exec();

            res.json({msg: 'You have unsubscribed'});

        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

module.exports = subCtrl;