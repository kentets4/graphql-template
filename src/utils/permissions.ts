const { shield, rule } = require('graphql-shield')

const rules = {
    isAuthenticatedUser: rule({ cache: 'contextual' })((parent: any, args: any, ctx: any) => {
        if (!ctx.verify && !ctx.verify.id && ctx.verify.role !== 'user') {
            return false
        }
        return true
    }),
}

export const permissions = shield(
    {
        Query: {
            // findManyAdmin: rules.isAuthenticatedUser,
        },
    },
    {
        allowExternalErrors: true,
        fallbackError: 'not authorized'
    }
)