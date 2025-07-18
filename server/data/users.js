import bcrypt from "bcryptjs"

const users = [{
        name: "Kanhiya",
        email: "kanhoiya@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Manish",
        email: "manish@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Admin",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
]

export default users