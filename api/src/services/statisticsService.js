export function computeStats(values, lowerLimit, upperLimit) {
    const inRangeValues = values.filter(v => v >= lowerLimit && v <= upperLimit);

    const mean = inRangeValues.reduce((a, b) => a + b, 0) / inRangeValues.length;
    const sorted = [...inRangeValues].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ?
        sorted[mid] :
        (sorted[mid - 1] + sorted[mid]) / 2;
    const variance = inRangeValues.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / inRangeValues.length;
    const stdDeviation = Math.sqrt(variance);
    const outOfSpecCount = values.filter(v => v < lowerLimit || v > upperLimit).length;

    return {
        mean,
        median,
        variance,
        stdDeviation,
        outOfSpecCount
    };
}