export default function swapKeysAndValues(obj: Record<string, number>): Record<number, string> {
    const swapped: Record<number, string> = {}

    for (const key in obj) {
        swapped[obj[key]] = key;
    }

    return swapped
}
