var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;

    for (let word of words) {
        let consistent = true;

        for (let char of word) {
            if (!allowedSet.has(char)) {
                consistent = false;
                break;
            }
        }

        if (consistent) {
            count++;
        }
    }

    return count;
};