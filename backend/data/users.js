import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdim: true,
  },
  {
    name: "Hassan",
    email: "hassan@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdim: true,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdim: false,
  },
];

export default users;
