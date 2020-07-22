const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    userType: { type: String, default: "client" },
    avatar: { type: String }
})

// viết hook trước khi tạo model
UserSchema.pre("save", function save(next) {
    const user = this;
    
    // kiểm tra nếu pass ko thay đổi sẽ ko hash
    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10)
        .then(salt => bcrypt.hash( user.password, salt))
        .then(hash => {
            user.password = hash;
            next()
    })
})

const User = mongoose.model("User", UserSchema, "User")

module.exports = {
    UserSchema, User
}