/**
 * Docs for `baz` module
 * @packageDocumentation
 */

/**
 * Docs for `baz` function.
 */
export function baz(): BazInt {
    console.log("Baz");
    return { baz: true };
}

export interface BazInt {
    baz: true;
}
