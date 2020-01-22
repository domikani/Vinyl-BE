const login = async (req, res) => {
    const user = await User
        .findOne({email: req.body.email})
        .exec();

    //If there is no user with this email //to return stamatei kai den paei parakato
    if (user === null) {
        return res.json({
            message: 'Wrong credentials0'
        });

    }

    if (user.verifyPasswordSync(req.body.password)) {
        //Success login
        return res.json(user);
    } else {
        //login failed
        return res.json({
            message: 'Wrong credentials'
        });
    }


};



module.exports = {
    login
};
