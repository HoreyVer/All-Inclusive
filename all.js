function containAllRots(strng, arr) {
    if (!strng.length) {
        return true;
    }

    const rotations = [];
    const strCopy = [...strng];
    for (let i = 0; i < strng.length; i++) {
        const l = strCopy.shift();
        const candidate = [l, ...strCopy].join("");
        strCopy.push(l);
        if (!rotations.includes(candidate)) {
            rotations.push(candidate);
        }
    }
    const res = arr.filter((s) => rotations.includes(s));

    return res.length === rotations.length;
}