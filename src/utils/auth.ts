import jwt from "jsonwebtoken";

export const checkRole = async (
	authorization: string | undefined,
	role: string,
	require: boolean,
) => {
	if (!authorization) {
		throw new Error("Not access");
	}
	let error = false;
	const verify = await jwt.verify(
		authorization,
		process.env[`${role.toUpperCase()}_SECRET`],
		async (err: Error, decoded: Object) => {
			if (err) {
				if (require) {
					throw new Error("Not access");
				} else {
					error = true;
					return null;
				}
			}
			return { ...decoded, role };
		},
	);

	if (error) return null;

	return verify;
};

export const getUserJWT = (token) => {
	const { role }: any = jwt.verify(
		token,
		process.env["USER_SECRET"] || "secret",
	);

	return {
		hasRole: (requiredRole) => requiredRole === role,
	};
};
