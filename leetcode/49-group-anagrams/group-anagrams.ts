function groupAnagrams(strs: string[]): string[][] {
	const map = new Map<string, string[]>();
	const getKey = (s: string) => s.split("").sort().join("");

	strs.forEach((s) => {
		const k = getKey(s);
		map.set(k, [...(map.get(k) || []), s]);
	});

	return [...map.values()];
};
