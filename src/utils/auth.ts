import { PrismaClient } from "@prisma/client"

const jwt = require('jsonwebtoken')

export const checkRole = async (authorization: string | undefined, role: string, prisma: PrismaClient, require: boolean) => {
    if (!authorization) {
        throw new Error('Not access')
    }
    let error = false
    const verify = await jwt.verify(
        authorization,
        process.env[`${role.toUpperCase()}_SECRET`],
        async (err: Error, decoded: Object) => {
            if (err) {
                if (require) {
                    throw new Error('Not access')
                } else {
                    error = true
                    return null
                }
            }
            return { ...decoded, role }
        }
    )

    if (error) return null

    return verify
}