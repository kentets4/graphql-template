import { MapperKind, mapSchema, getDirective } from "@graphql-tools/utils";
import { GraphQLError, GraphQLSchema, defaultFieldResolver } from "graphql";
import jwt from 'jsonwebtoken'
import { Context } from "../context";

export function authDirective(directiveName: string, getUserFn: (token: string) => { hasRole: (role: string) => boolean }) {
    const typeDirectiveArgumentMaps: Record<string, any> = {}
    return {
      authDirectiveTypeDefs: `directive @${directiveName}(
        requires: Role = ADMIN,
      ) on OBJECT | FIELD_DEFINITION
   
      enum Role {
        ADMIN
        USER
      }`,
      authDirectiveTransformer: (schema: GraphQLSchema) =>
        mapSchema(schema, {
          [MapperKind.TYPE]: type => {
            const authDirective = getDirective(schema, type, directiveName)?.[0]
            if (authDirective) {
              typeDirectiveArgumentMaps[type.name] = authDirective
            }
            return undefined
          },
          [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
            const authDirective =
              getDirective(schema, fieldConfig, directiveName)?.[0] ?? typeDirectiveArgumentMaps[typeName]
            if (authDirective) {
              const { requires } = authDirective
              if (requires) {
                const { resolve = defaultFieldResolver } = fieldConfig
                fieldConfig.resolve = function (source, args, context, info) {
                  const user = getUserFn(context.authorization);
                  const isResolver = typeName === "Query" || typeName === "Mutation";
                  if (!user.hasRole(requires)) {
                    throw new GraphQLError(`You don't have access to ${isResolver ? typeName.toLowerCase() : "field"} [${_fieldName}]`)
                  }
                  return resolve(source, args, context, info)
                }
                return fieldConfig
              }
            }
          }
        })
    }
  }