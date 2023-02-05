export const getKeys = <T extends object>(obj: T): (keyof T)[] => {
	return Object.keys(obj) as Array<keyof T>
}
