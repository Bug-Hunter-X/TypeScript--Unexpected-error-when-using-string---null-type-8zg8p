# TypeScript: Unexpected error when using string | null type

This example demonstrates an unexpected TypeScript error when passing `undefined` to a function parameter of type `string | null`.  The function correctly handles `null` values, but throws a type error for `undefined`, even though `undefined` can be seen as the absence of a value, similar to `null`.

## Bug Report

The `printName` function is designed to handle both strings and `null` values. When called with `null`, it behaves as expected. However, when calling it with `undefined`, TypeScript throws an error, claiming that 'undefined' is not assignable to 'string | null'.

## Solution

To correct this behavior, you can modify the function's type to include `undefined`, making it `string | null | undefined`.