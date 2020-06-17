import { isNullOrUndefined } from "util"

export function getEnv(name: string) {
	const envValue = process.env[name]

	if(isNullOrUndefined(envValue)) throw Error(`${name} not found`)

	return envValue
}