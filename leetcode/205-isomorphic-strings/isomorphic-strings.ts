function isIsomorphic(s: string, t: string): boolean {
  if(s.length !== t.length) return false;

  const sToTMapping = new Map<string, string>();
  const tToSMapping = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sToTMapping.has(charS)) {
      if (sToTMapping.get(charS) !== charT) {
          return false;
      }
    } else {
      if (tToSMapping.has(charT) && tToSMapping.get(charT) !== charS) {
          return false;
      }
      sToTMapping.set(charS, charT);
      tToSMapping.set(charT, charS);
    }
  }

  return true;
};