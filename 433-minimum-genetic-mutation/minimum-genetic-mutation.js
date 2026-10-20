/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    if (startGene === endGene) {
        return 0;
    }

    const bankSet = new Set(bank);

    if (!bankSet.has(endGene)) {
        return -1;
    }

    const genes = ["A", "C", "G", "T"];
    const queue = [[startGene, 0]];
    let head = 0;

    const visited = new Set([startGene]);

    while (head < queue.length) {
        const [current, mutations] = queue[head++];

        for (let i = 0; i < current.length; i++) {
            for (const gene of genes) {
                if (current[i] === gene) {
                    continue;
                }

                const next =
                    current.slice(0, i) +
                    gene +
                    current.slice(i + 1);

                if (
                    bankSet.has(next) &&
                    !visited.has(next)
                ) {
                    if (next === endGene) {
                        return mutations + 1;
                    }

                    visited.add(next);
                    queue.push([next, mutations + 1]);
                }
            }
        }
    }

    return -1;
};