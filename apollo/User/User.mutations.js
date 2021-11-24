import prisma from '../../prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export default {
    Mutation: {
        createAccount: async (_, {
            username,
            email,
            password
        }) => {
            try {
                const existingUser = await prisma.user.findFirst({
                    where: {
                        OR: [{
                            username
                        }, {
                            email
                        }]
                    }
                })
                if (existingUser)
                    throw new Error("The username or email are already taken.")

                const salt = await bcrypt.genSalt(10);
                password = await bcrypt.hash(password, salt);
                return prisma.user.create({
                    data: {
                        username,
                        email,
                        password
                    }
                })
            } catch (e) {
                return e;
            }
        },
        loginUser: async (_, {
            username,
            password
        }) => {
            try {
                const user = await prisma.user.findUnique({
                    where: {
                        username
                    },
                })
                if (!user) {
                    throw Error("Username doesn't exist.")
                }
                const passwordIsCorrect = await bcrypt.compare(password, user.password);
                if (!passwordIsCorrect) {
                    throw Error("Username or Password incorrect, please try again.");
                }
                const token = jwt.sign({id: user.id, username: user.username},process.env.PRIVATE_KEY)
                return {
                    ok: true,
                    token
                }

            } catch (error) {
                if (error instanceof Error) {
                    return {
                        ok: false,
                        error: error.message
                    };
                }

            }
        },
        updateUser: async (_, {
            id,
            username,
            email,
            password
        }) => {
            data = {
                username,
                email
            }
            if (password) {
                const salt = await bcrypt.genSalt(10);
                password = await bcrypt.hash(password, salt);
                data = {
                    ...data,
                    password
                }
            }
            return prisma.user.update({
                where: {
                    id
                },
                data
            })
        },
        deleteUser: (_, {
            id
        }) => prisma.user.delete({
            where: {
                id
            }
        })
    }
}