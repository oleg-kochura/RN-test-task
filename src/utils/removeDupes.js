export default (input, key = 'id') => input.filter((s1, pos, arr) => arr.findIndex(s2 => s2[key] === s1[key]) === pos);
