"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7185],{81468:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface Map<K, V> {\r
\r
    clear(): void;\r
    /**\r
     * @returns true if an element in the Map existed and has been removed, or false if the element does not exist.\r
     */\r
    delete(key: K): boolean;\r
    /**\r
     * Executes a provided function once per each key/value pair in the Map, in insertion order.\r
     */\r
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;\r
    /**\r
     * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.\r
     * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.\r
     */\r
    get(key: K): V | undefined;\r
    /**\r
     * @returns boolean indicating whether an element with the specified key exists or not.\r
     */\r
    has(key: K): boolean;\r
    /**\r
     * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.\r
     */\r
    set(key: K, value: V): this;\r
    /**\r
     * @returns the number of elements in the Map.\r
     */\r
    readonly size: number;\r
}\r
\r
interface MapConstructor {\r
    new(): Map<any, any>;\r
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;\r
    readonly prototype: Map<any, any>;\r
}\r
declare var Map: MapConstructor;\r
\r
interface ReadonlyMap<K, V> {\r
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;\r
    get(key: K): V | undefined;\r
    has(key: K): boolean;\r
    readonly size: number;\r
}\r
\r
interface WeakMap<K extends object, V> {\r
    /**\r
     * Removes the specified element from the WeakMap.\r
     * @returns true if the element was successfully removed, or false if it was not present.\r
     */\r
    delete(key: K): boolean;\r
    /**\r
     * @returns a specified element.\r
     */\r
    get(key: K): V | undefined;\r
    /**\r
     * @returns a boolean indicating whether an element with the specified key exists or not.\r
     */\r
    has(key: K): boolean;\r
    /**\r
     * Adds a new element with a specified key and value.\r
     * @param key Must be an object.\r
     */\r
    set(key: K, value: V): this;\r
}\r
\r
interface WeakMapConstructor {\r
    new <K extends object = object, V = any>(entries?: readonly [K, V][] | null): WeakMap<K, V>;\r
    readonly prototype: WeakMap<object, any>;\r
}\r
declare var WeakMap: WeakMapConstructor;\r
\r
interface Set<T> {\r
    /**\r
     * Appends a new element with a specified value to the end of the Set.\r
     */\r
    add(value: T): this;\r
\r
    clear(): void;\r
    /**\r
     * Removes a specified value from the Set.\r
     * @returns Returns true if an element in the Set existed and has been removed, or false if the element does not exist.\r
     */\r
    delete(value: T): boolean;\r
    /**\r
     * Executes a provided function once per each value in the Set object, in insertion order.\r
     */\r
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;\r
    /**\r
     * @returns a boolean indicating whether an element with the specified value exists in the Set or not.\r
     */\r
    has(value: T): boolean;\r
    /**\r
     * @returns the number of (unique) elements in Set.\r
     */\r
    readonly size: number;\r
}\r
\r
interface SetConstructor {\r
    new <T = any>(values?: readonly T[] | null): Set<T>;\r
    readonly prototype: Set<any>;\r
}\r
declare var Set: SetConstructor;\r
\r
interface ReadonlySet<T> {\r
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;\r
    has(value: T): boolean;\r
    readonly size: number;\r
}\r
\r
interface WeakSet<T extends object> {\r
    /**\r
     * Appends a new object to the end of the WeakSet.\r
     */\r
    add(value: T): this;\r
    /**\r
     * Removes the specified element from the WeakSet.\r
     * @returns Returns true if the element existed and has been removed, or false if the element does not exist.\r
     */\r
    delete(value: T): boolean;\r
    /**\r
     * @returns a boolean indicating whether an object exists in the WeakSet or not.\r
     */\r
    has(value: T): boolean;\r
}\r
\r
interface WeakSetConstructor {\r
    new <T extends object = object>(values?: readonly T[] | null): WeakSet<T>;\r
    readonly prototype: WeakSet<object>;\r
}\r
declare var WeakSet: WeakSetConstructor;\r
`},76878:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface Array<T> {\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;\r
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: T, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
}\r
\r
interface ArrayConstructor {\r
    /**\r
     * Creates an array from an array-like object.\r
     * @param arrayLike An array-like object to convert to an array.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>): T[];\r
\r
    /**\r
     * Creates an array from an iterable object.\r
     * @param arrayLike An array-like object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of<T>(...items: T[]): T[];\r
}\r
\r
interface DateConstructor {\r
    new (value: number | string | Date): Date;\r
}\r
\r
interface Function {\r
    /**\r
     * Returns the name of the function. Function names are read-only and can not be changed.\r
     */\r
    readonly name: string;\r
}\r
\r
interface Math {\r
    /**\r
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.\r
     * @param x A numeric expression.\r
     */\r
    clz32(x: number): number;\r
\r
    /**\r
     * Returns the result of 32-bit multiplication of two numbers.\r
     * @param x First number\r
     * @param y Second number\r
     */\r
    imul(x: number, y: number): number;\r
\r
    /**\r
     * Returns the sign of the x, indicating whether x is positive, negative or zero.\r
     * @param x The numeric expression to test\r
     */\r
    sign(x: number): number;\r
\r
    /**\r
     * Returns the base 10 logarithm of a number.\r
     * @param x A numeric expression.\r
     */\r
    log10(x: number): number;\r
\r
    /**\r
     * Returns the base 2 logarithm of a number.\r
     * @param x A numeric expression.\r
     */\r
    log2(x: number): number;\r
\r
    /**\r
     * Returns the natural logarithm of 1 + x.\r
     * @param x A numeric expression.\r
     */\r
    log1p(x: number): number;\r
\r
    /**\r
     * Returns the result of (e^x - 1), which is an implementation-dependent approximation to\r
     * subtracting 1 from the exponential function of x (e raised to the power of x, where e\r
     * is the base of the natural logarithms).\r
     * @param x A numeric expression.\r
     */\r
    expm1(x: number): number;\r
\r
    /**\r
     * Returns the hyperbolic cosine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    cosh(x: number): number;\r
\r
    /**\r
     * Returns the hyperbolic sine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    sinh(x: number): number;\r
\r
    /**\r
     * Returns the hyperbolic tangent of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    tanh(x: number): number;\r
\r
    /**\r
     * Returns the inverse hyperbolic cosine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    acosh(x: number): number;\r
\r
    /**\r
     * Returns the inverse hyperbolic sine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    asinh(x: number): number;\r
\r
    /**\r
     * Returns the inverse hyperbolic tangent of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    atanh(x: number): number;\r
\r
    /**\r
     * Returns the square root of the sum of squares of its arguments.\r
     * @param values Values to compute the square root for.\r
     *     If no arguments are passed, the result is +0.\r
     *     If there is only one argument, the result is the absolute value.\r
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.\r
     *     If any argument is NaN, the result is NaN.\r
     *     If all arguments are either +0 or \u22120, the result is +0.\r
     */\r
    hypot(...values: number[]): number;\r
\r
    /**\r
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.\r
     * If x is already an integer, the result is x.\r
     * @param x A numeric expression.\r
     */\r
    trunc(x: number): number;\r
\r
    /**\r
     * Returns the nearest single precision float representation of a number.\r
     * @param x A numeric expression.\r
     */\r
    fround(x: number): number;\r
\r
    /**\r
     * Returns an implementation-dependent approximation to the cube root of number.\r
     * @param x A numeric expression.\r
     */\r
    cbrt(x: number): number;\r
}\r
\r
interface NumberConstructor {\r
    /**\r
     * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1\r
     * that is representable as a Number value, which is approximately:\r
     * 2.2204460492503130808472633361816 x 10\u200D\u2212\u200D16.\r
     */\r
    readonly EPSILON: number;\r
\r
    /**\r
     * Returns true if passed value is finite.\r
     * Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a\r
     * number. Only finite values of the type number, result in true.\r
     * @param number A numeric value.\r
     */\r
    isFinite(number: unknown): boolean;\r
\r
    /**\r
     * Returns true if the value passed is an integer, false otherwise.\r
     * @param number A numeric value.\r
     */\r
    isInteger(number: unknown): boolean;\r
\r
    /**\r
     * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a\r
     * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter\r
     * to a number. Only values of the type number, that are also NaN, result in true.\r
     * @param number A numeric value.\r
     */\r
    isNaN(number: unknown): boolean;\r
\r
    /**\r
     * Returns true if the value passed is a safe integer.\r
     * @param number A numeric value.\r
     */\r
    isSafeInteger(number: unknown): boolean;\r
\r
    /**\r
     * The value of the largest integer n such that n and n + 1 are both exactly representable as\r
     * a Number value.\r
     * The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 \u2212 1.\r
     */\r
    readonly MAX_SAFE_INTEGER: number;\r
\r
    /**\r
     * The value of the smallest integer n such that n and n \u2212 1 are both exactly representable as\r
     * a Number value.\r
     * The value of Number.MIN_SAFE_INTEGER is \u22129007199254740991 (\u2212(2^53 \u2212 1)).\r
     */\r
    readonly MIN_SAFE_INTEGER: number;\r
\r
    /**\r
     * Converts a string to a floating-point number.\r
     * @param string A string that contains a floating-point number.\r
     */\r
    parseFloat(string: string): number;\r
\r
    /**\r
     * Converts A string to an integer.\r
     * @param string A string to convert into a number.\r
     * @param radix A value between 2 and 36 that specifies the base of the number in \`string\`.\r
     * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.\r
     * All other strings are considered decimal.\r
     */\r
    parseInt(string: string, radix?: number): number;\r
}\r
\r
interface ObjectConstructor {\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param source The source object from which to copy properties.\r
     */\r
    assign<T extends {}, U>(target: T, source: U): T & U;\r
\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param source1 The first source object from which to copy properties.\r
     * @param source2 The second source object from which to copy properties.\r
     */\r
    assign<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;\r
\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param source1 The first source object from which to copy properties.\r
     * @param source2 The second source object from which to copy properties.\r
     * @param source3 The third source object from which to copy properties.\r
     */\r
    assign<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;\r
\r
    /**\r
     * Copy the values of all of the enumerable own properties from one or more source objects to a\r
     * target object. Returns the target object.\r
     * @param target The target object to copy to.\r
     * @param sources One or more source objects from which to copy properties\r
     */\r
    assign(target: object, ...sources: any[]): any;\r
\r
    /**\r
     * Returns an array of all symbol properties found directly on object o.\r
     * @param o Object to retrieve the symbols from.\r
     */\r
    getOwnPropertySymbols(o: any): symbol[];\r
\r
    /**\r
     * Returns the names of the enumerable string properties and methods of an object.\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    keys(o: {}): string[];\r
\r
    /**\r
     * Returns true if the values are the same value, false otherwise.\r
     * @param value1 The first value.\r
     * @param value2 The second value.\r
     */\r
    is(value1: any, value2: any): boolean;\r
\r
    /**\r
     * Sets the prototype of a specified object o to object proto or null. Returns the object o.\r
     * @param o The object to change its prototype.\r
     * @param proto The value of the new prototype or null.\r
     */\r
    setPrototypeOf(o: any, proto: object | null): any;\r
}\r
\r
interface ReadonlyArray<T> {\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined;\r
    find(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Returns a string indicating the flags of the regular expression in question. This field is read-only.\r
     * The characters in this string are sequenced and concatenated in the following order:\r
     *\r
     *    - "g" for global\r
     *    - "i" for ignoreCase\r
     *    - "m" for multiline\r
     *    - "u" for unicode\r
     *    - "y" for sticky\r
     *\r
     * If no flags are set, the value is the empty string.\r
     */\r
    readonly flags: string;\r
\r
    /**\r
     * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular\r
     * expression. Default is false. Read-only.\r
     */\r
    readonly sticky: boolean;\r
\r
    /**\r
     * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular\r
     * expression. Default is false. Read-only.\r
     */\r
    readonly unicode: boolean;\r
}\r
\r
interface RegExpConstructor {\r
    new (pattern: RegExp | string, flags?: string): RegExp;\r
    (pattern: RegExp | string, flags?: string): RegExp;\r
}\r
\r
interface String {\r
    /**\r
     * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\r
     * value of the UTF-16 encoded code point starting at the string element at position pos in\r
     * the String resulting from converting this object to a String.\r
     * If there is no element at that position, the result is undefined.\r
     * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.\r
     */\r
    codePointAt(pos: number): number | undefined;\r
\r
    /**\r
     * Returns true if searchString appears as a substring of the result of converting this\r
     * object to a String, at one or more positions that are\r
     * greater than or equal to position; otherwise, returns false.\r
     * @param searchString search string\r
     * @param position If position is undefined, 0 is assumed, so as to search all of the String.\r
     */\r
    includes(searchString: string, position?: number): boolean;\r
\r
    /**\r
     * Returns true if the sequence of elements of searchString converted to a String is the\r
     * same as the corresponding elements of this object (converted to a String) starting at\r
     * endPosition \u2013 length(this). Otherwise returns false.\r
     */\r
    endsWith(searchString: string, endPosition?: number): boolean;\r
\r
    /**\r
     * Returns the String value result of normalizing the string into the normalization form\r
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\r
     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\r
     * is "NFC"\r
     */\r
    normalize(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;\r
\r
    /**\r
     * Returns the String value result of normalizing the string into the normalization form\r
     * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\r
     * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\r
     * is "NFC"\r
     */\r
    normalize(form?: string): string;\r
\r
    /**\r
     * Returns a String value that is made from count copies appended together. If count is 0,\r
     * the empty string is returned.\r
     * @param count number of copies to append\r
     */\r
    repeat(count: number): string;\r
\r
    /**\r
     * Returns true if the sequence of elements of searchString converted to a String is the\r
     * same as the corresponding elements of this object (converted to a String) starting at\r
     * position. Otherwise returns false.\r
     */\r
    startsWith(searchString: string, position?: number): boolean;\r
\r
    /**\r
     * Returns an \`<a>\` HTML anchor element and sets the name attribute to the text value\r
     * @deprecated A legacy feature for browser compatibility\r
     * @param name\r
     */\r
    anchor(name: string): string;\r
\r
    /**\r
     * Returns a \`<big>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    big(): string;\r
\r
    /**\r
     * Returns a \`<blink>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    blink(): string;\r
\r
    /**\r
     * Returns a \`<b>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    bold(): string;\r
\r
    /**\r
     * Returns a \`<tt>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fixed(): string;\r
\r
    /**\r
     * Returns a \`<font>\` HTML element and sets the color attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fontcolor(color: string): string;\r
\r
    /**\r
     * Returns a \`<font>\` HTML element and sets the size attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fontsize(size: number): string;\r
\r
    /**\r
     * Returns a \`<font>\` HTML element and sets the size attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    fontsize(size: string): string;\r
\r
    /**\r
     * Returns an \`<i>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    italics(): string;\r
\r
    /**\r
     * Returns an \`<a>\` HTML element and sets the href attribute value\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    link(url: string): string;\r
\r
    /**\r
     * Returns a \`<small>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    small(): string;\r
\r
    /**\r
     * Returns a \`<strike>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    strike(): string;\r
\r
    /**\r
     * Returns a \`<sub>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    sub(): string;\r
\r
    /**\r
     * Returns a \`<sup>\` HTML element\r
     * @deprecated A legacy feature for browser compatibility\r
     */\r
    sup(): string;\r
}\r
\r
interface StringConstructor {\r
    /**\r
     * Return the String value whose elements are, in order, the elements in the List elements.\r
     * If length is 0, the empty string is returned.\r
     */\r
    fromCodePoint(...codePoints: number[]): string;\r
\r
    /**\r
     * String.raw is usually used as a tag function of a Tagged Template String. When called as\r
     * such, the first argument will be a well formed template call site object and the rest\r
     * parameter will contain the substitution values. It can also be called directly, for example,\r
     * to interleave strings and values from your own tag function, and in this case the only thing\r
     * it needs from the first argument is the raw property.\r
     * @param template A well-formed template string call site representation.\r
     * @param substitutions A set of substitution values.\r
     */\r
    raw(template: { raw: readonly string[] | ArrayLike<string>}, ...substitutions: any[]): string;\r
}\r
`},96627:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es5" />\r
/// <reference lib="es2015.core" />\r
/// <reference lib="es2015.collection" />\r
/// <reference lib="es2015.iterable" />\r
/// <reference lib="es2015.generator" />\r
/// <reference lib="es2015.promise" />\r
/// <reference lib="es2015.proxy" />\r
/// <reference lib="es2015.reflect" />\r
/// <reference lib="es2015.symbol" />\r
/// <reference lib="es2015.symbol.wellknown" />\r
`},5812:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.iterable" />\r
\r
interface Generator<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {\r
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.\r
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;\r
    return(value: TReturn): IteratorResult<T, TReturn>;\r
    throw(e: any): IteratorResult<T, TReturn>;\r
    [Symbol.iterator](): Generator<T, TReturn, TNext>;\r
}\r
\r
interface GeneratorFunction {\r
    /**\r
     * Creates a new Generator object.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new (...args: any[]): Generator;\r
    /**\r
     * Creates a new Generator object.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    (...args: any[]): Generator;\r
    /**\r
     * The length of the arguments.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns the name of the function.\r
     */\r
    readonly name: string;\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: Generator;\r
}\r
\r
interface GeneratorFunctionConstructor {\r
    /**\r
     * Creates a new Generator function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new (...args: string[]): GeneratorFunction;\r
    /**\r
     * Creates a new Generator function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    (...args: string[]): GeneratorFunction;\r
    /**\r
     * The length of the arguments.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns the name of the function.\r
     */\r
    readonly name: string;\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: GeneratorFunction;\r
}\r
`},73406:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.symbol" />\r
\r
interface SymbolConstructor {\r
    /**\r
     * A method that returns the default iterator for an object. Called by the semantics of the\r
     * for-of statement.\r
     */\r
    readonly iterator: unique symbol;\r
}\r
\r
interface IteratorYieldResult<TYield> {\r
    done?: false;\r
    value: TYield;\r
}\r
\r
interface IteratorReturnResult<TReturn> {\r
    done: true;\r
    value: TReturn;\r
}\r
\r
type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;\r
\r
interface Iterator<T, TReturn = any, TNext = undefined> {\r
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.\r
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;\r
    return?(value?: TReturn): IteratorResult<T, TReturn>;\r
    throw?(e?: any): IteratorResult<T, TReturn>;\r
}\r
\r
interface Iterable<T> {\r
    [Symbol.iterator](): Iterator<T>;\r
}\r
\r
interface IterableIterator<T> extends Iterator<T> {\r
    [Symbol.iterator](): IterableIterator<T>;\r
}\r
\r
interface Array<T> {\r
    /** Iterator */\r
    [Symbol.iterator](): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, T]>;\r
\r
    /**\r
     * Returns an iterable of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an iterable of values in the array\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface ArrayConstructor {\r
    /**\r
     * Creates an array from an iterable object.\r
     * @param iterable An iterable object to convert to an array.\r
     */\r
    from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];\r
\r
    /**\r
     * Creates an array from an iterable object.\r
     * @param iterable An iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];\r
}\r
\r
interface ReadonlyArray<T> {\r
    /** Iterator of values in the array. */\r
    [Symbol.iterator](): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, T]>;\r
\r
    /**\r
     * Returns an iterable of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an iterable of values in the array\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface IArguments {\r
    /** Iterator */\r
    [Symbol.iterator](): IterableIterator<any>;\r
}\r
\r
interface Map<K, V> {\r
    /** Returns an iterable of entries in the map. */\r
    [Symbol.iterator](): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the map.\r
     */\r
    entries(): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of keys in the map\r
     */\r
    keys(): IterableIterator<K>;\r
\r
    /**\r
     * Returns an iterable of values in the map\r
     */\r
    values(): IterableIterator<V>;\r
}\r
\r
interface ReadonlyMap<K, V> {\r
    /** Returns an iterable of entries in the map. */\r
    [Symbol.iterator](): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of key, value pairs for every entry in the map.\r
     */\r
    entries(): IterableIterator<[K, V]>;\r
\r
    /**\r
     * Returns an iterable of keys in the map\r
     */\r
    keys(): IterableIterator<K>;\r
\r
    /**\r
     * Returns an iterable of values in the map\r
     */\r
    values(): IterableIterator<V>;\r
}\r
\r
interface MapConstructor {\r
    new(): Map<any, any>;\r
    new <K, V>(iterable?: Iterable<readonly [K, V]> | null): Map<K, V>;\r
}\r
\r
interface WeakMap<K extends object, V> { }\r
\r
interface WeakMapConstructor {\r
    new <K extends object, V>(iterable: Iterable<readonly [K, V]>): WeakMap<K, V>;\r
}\r
\r
interface Set<T> {\r
    /** Iterates over values in the set. */\r
    [Symbol.iterator](): IterableIterator<T>;\r
    /**\r
     * Returns an iterable of [v,v] pairs for every value \`v\` in the set.\r
     */\r
    entries(): IterableIterator<[T, T]>;\r
    /**\r
     * Despite its name, returns an iterable of the values in the set.\r
     */\r
    keys(): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of values in the set.\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface ReadonlySet<T> {\r
    /** Iterates over values in the set. */\r
    [Symbol.iterator](): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of [v,v] pairs for every value \`v\` in the set.\r
     */\r
    entries(): IterableIterator<[T, T]>;\r
\r
    /**\r
     * Despite its name, returns an iterable of the values in the set.\r
     */\r
    keys(): IterableIterator<T>;\r
\r
    /**\r
     * Returns an iterable of values in the set.\r
     */\r
    values(): IterableIterator<T>;\r
}\r
\r
interface SetConstructor {\r
    new <T>(iterable?: Iterable<T> | null): Set<T>;\r
}\r
\r
interface WeakSet<T extends object> { }\r
\r
interface WeakSetConstructor {\r
    new <T extends object = object>(iterable: Iterable<T>): WeakSet<T>;\r
}\r
\r
interface Promise<T> { }\r
\r
interface PromiseConstructor {\r
    /**\r
     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r
     * resolve, or rejected when any Promise is rejected.\r
     * @param values An iterable of Promises.\r
     * @returns A new Promise.\r
     */\r
    all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;\r
\r
    /**\r
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved\r
     * or rejected.\r
     * @param values An iterable of Promises.\r
     * @returns A new Promise.\r
     */\r
    race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;\r
}\r
\r
interface String {\r
    /** Iterator */\r
    [Symbol.iterator](): IterableIterator<string>;\r
}\r
\r
interface Int8Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Int8ArrayConstructor {\r
    new (elements: Iterable<number>): Int8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int8Array;\r
}\r
\r
interface Uint8Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint8ArrayConstructor {\r
    new (elements: Iterable<number>): Uint8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8Array;\r
}\r
\r
interface Uint8ClampedArray {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint8ClampedArrayConstructor {\r
    new (elements: Iterable<number>): Uint8ClampedArray;\r
\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8ClampedArray;\r
}\r
\r
interface Int16Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Int16ArrayConstructor {\r
    new (elements: Iterable<number>): Int16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int16Array;\r
}\r
\r
interface Uint16Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint16ArrayConstructor {\r
    new (elements: Iterable<number>): Uint16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint16Array;\r
}\r
\r
interface Int32Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Int32ArrayConstructor {\r
    new (elements: Iterable<number>): Int32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int32Array;\r
}\r
\r
interface Uint32Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Uint32ArrayConstructor {\r
    new (elements: Iterable<number>): Uint32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint32Array;\r
}\r
\r
interface Float32Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Float32ArrayConstructor {\r
    new (elements: Iterable<number>): Float32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float32Array;\r
}\r
\r
interface Float64Array {\r
    [Symbol.iterator](): IterableIterator<number>;\r
    /**\r
     * Returns an array of key, value pairs for every entry in the array\r
     */\r
    entries(): IterableIterator<[number, number]>;\r
    /**\r
     * Returns an list of keys in the array\r
     */\r
    keys(): IterableIterator<number>;\r
    /**\r
     * Returns an list of values in the array\r
     */\r
    values(): IterableIterator<number>;\r
}\r
\r
interface Float64ArrayConstructor {\r
    new (elements: Iterable<number>): Float64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float64Array;\r
}\r
`},90748:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface PromiseConstructor {\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: Promise<any>;\r
\r
    /**\r
     * Creates a new Promise.\r
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:\r
     * a resolve callback used to resolve the promise with a value or the result of another promise,\r
     * and a reject callback used to reject the promise with a provided reason or error.\r
     */\r
    new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;\r
\r
    /**\r
     * Creates a Promise that is resolved with an array of results when all of the provided Promises\r
     * resolve, or rejected when any Promise is rejected.\r
     * @param values An array of Promises.\r
     * @returns A new Promise.\r
     */\r
    all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;\r
\r
    // see: lib.es2015.iterable.d.ts\r
    // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;\r
\r
    /**\r
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved\r
     * or rejected.\r
     * @param values An array of Promises.\r
     * @returns A new Promise.\r
     */\r
    race<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>;\r
\r
    // see: lib.es2015.iterable.d.ts\r
    // race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;\r
\r
    /**\r
     * Creates a new rejected promise for the provided reason.\r
     * @param reason The reason the promise was rejected.\r
     * @returns A new rejected Promise.\r
     */\r
    reject<T = never>(reason?: any): Promise<T>;\r
\r
    /**\r
     * Creates a new resolved promise.\r
     * @returns A resolved promise.\r
     */\r
    resolve(): Promise<void>;\r
    /**\r
     * Creates a new resolved promise for the provided value.\r
     * @param value A promise.\r
     * @returns A promise whose internal state matches the provided promise.\r
     */\r
    resolve<T>(value: T): Promise<Awaited<T>>;\r
    /**\r
     * Creates a new resolved promise for the provided value.\r
     * @param value A promise.\r
     * @returns A promise whose internal state matches the provided promise.\r
     */\r
    resolve<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;\r
}\r
\r
declare var Promise: PromiseConstructor;\r
`},62227:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface ProxyHandler<T extends object> {\r
    /**\r
     * A trap method for a function call.\r
     * @param target The original callable object which is being proxied.\r
     */\r
    apply?(target: T, thisArg: any, argArray: any[]): any;\r
\r
    /**\r
     * A trap for the \`new\` operator.\r
     * @param target The original object which is being proxied.\r
     * @param newTarget The constructor that was originally called.\r
     */\r
    construct?(target: T, argArray: any[], newTarget: Function): object;\r
\r
    /**\r
     * A trap for \`Object.defineProperty()\`.\r
     * @param target The original object which is being proxied.\r
     * @returns A \`Boolean\` indicating whether or not the property has been defined.\r
     */\r
    defineProperty?(target: T, property: string | symbol, attributes: PropertyDescriptor): boolean;\r
\r
    /**\r
     * A trap for the \`delete\` operator.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to delete.\r
     * @returns A \`Boolean\` indicating whether or not the property was deleted.\r
     */\r
    deleteProperty?(target: T, p: string | symbol): boolean;\r
\r
    /**\r
     * A trap for getting a property value.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to get.\r
     * @param receiver The proxy or an object that inherits from the proxy.\r
     */\r
    get?(target: T, p: string | symbol, receiver: any): any;\r
\r
    /**\r
     * A trap for \`Object.getOwnPropertyDescriptor()\`.\r
     * @param target The original object which is being proxied.\r
     * @param p The name of the property whose description should be retrieved.\r
     */\r
    getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;\r
\r
    /**\r
     * A trap for the \`[[GetPrototypeOf]]\` internal method.\r
     * @param target The original object which is being proxied.\r
     */\r
    getPrototypeOf?(target: T): object | null;\r
\r
    /**\r
     * A trap for the \`in\` operator.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to check for existence.\r
     */\r
    has?(target: T, p: string | symbol): boolean;\r
\r
    /**\r
     * A trap for \`Object.isExtensible()\`.\r
     * @param target The original object which is being proxied.\r
     */\r
    isExtensible?(target: T): boolean;\r
\r
    /**\r
     * A trap for \`Reflect.ownKeys()\`.\r
     * @param target The original object which is being proxied.\r
     */\r
    ownKeys?(target: T): ArrayLike<string | symbol>;\r
\r
    /**\r
     * A trap for \`Object.preventExtensions()\`.\r
     * @param target The original object which is being proxied.\r
     */\r
    preventExtensions?(target: T): boolean;\r
\r
    /**\r
     * A trap for setting a property value.\r
     * @param target The original object which is being proxied.\r
     * @param p The name or \`Symbol\` of the property to set.\r
     * @param receiver The object to which the assignment was originally directed.\r
     * @returns A \`Boolean\` indicating whether or not the property was set.\r
     */\r
    set?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;\r
\r
    /**\r
     * A trap for \`Object.setPrototypeOf()\`.\r
     * @param target The original object which is being proxied.\r
     * @param newPrototype The object's new prototype or \`null\`.\r
     */\r
    setPrototypeOf?(target: T, v: object | null): boolean;\r
}\r
\r
interface ProxyConstructor {\r
    /**\r
     * Creates a revocable Proxy object.\r
     * @param target A target object to wrap with Proxy.\r
     * @param handler An object whose properties define the behavior of Proxy when an operation is attempted on it.\r
     */\r
    revocable<T extends object>(target: T, handler: ProxyHandler<T>): { proxy: T; revoke: () => void; };\r
\r
    /**\r
     * Creates a Proxy object. The Proxy object allows you to create an object that can be used in place of the\r
     * original object, but which may redefine fundamental Object operations like getting, setting, and defining\r
     * properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs.\r
     * @param target A target object to wrap with Proxy.\r
     * @param handler An object whose properties define the behavior of Proxy when an operation is attempted on it.\r
     */\r
    new <T extends object>(target: T, handler: ProxyHandler<T>): T;\r
}\r
declare var Proxy: ProxyConstructor;\r
`},4211:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


declare namespace Reflect {\r
    /**\r
     * Calls the function with the specified object as the this value\r
     * and the elements of specified array as the arguments.\r
     * @param target The function to call.\r
     * @param thisArgument The object to be used as the this object.\r
     * @param argumentsList An array of argument values to be passed to the function.\r
     */\r
    function apply<T, A extends readonly any[], R>(\r
        target: (this: T, ...args: A) => R,\r
        thisArgument: T,\r
        argumentsList: Readonly<A>,\r
    ): R;\r
    function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;\r
\r
    /**\r
     * Constructs the target with the elements of specified array as the arguments\r
     * and the specified constructor as the \`new.target\` value.\r
     * @param target The constructor to invoke.\r
     * @param argumentsList An array of argument values to be passed to the constructor.\r
     * @param newTarget The constructor to be used as the \`new.target\` object.\r
     */\r
    function construct<A extends readonly any[], R>(\r
        target: new (...args: A) => R,\r
        argumentsList: Readonly<A>,\r
        newTarget?: new (...args: any) => any,\r
    ): R;\r
    function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;\r
\r
    /**\r
     * Adds a property to an object, or modifies attributes of an existing property.\r
     * @param target Object on which to add or modify the property. This can be a native JavaScript object\r
     *        (that is, a user-defined object or a built in object) or a DOM object.\r
     * @param propertyKey The property name.\r
     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.\r
     */\r
    function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): boolean;\r
\r
    /**\r
     * Removes a property from an object, equivalent to \`delete target[propertyKey]\`,\r
     * except it won't throw if \`target[propertyKey]\` is non-configurable.\r
     * @param target Object from which to remove the own property.\r
     * @param propertyKey The property name.\r
     */\r
    function deleteProperty(target: object, propertyKey: PropertyKey): boolean;\r
\r
    /**\r
     * Gets the property of target, equivalent to \`target[propertyKey]\` when \`receiver === target\`.\r
     * @param target Object that contains the property on itself or in its prototype chain.\r
     * @param propertyKey The property name.\r
     * @param receiver The reference to use as the \`this\` value in the getter function,\r
     *        if \`target[propertyKey]\` is an accessor property.\r
     */\r
    function get<T extends object, P extends PropertyKey>(\r
        target: T,\r
        propertyKey: P,\r
        receiver?: unknown,\r
    ): P extends keyof T ? T[P] : any;\r
\r
    /**\r
     * Gets the own property descriptor of the specified object.\r
     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.\r
     * @param target Object that contains the property.\r
     * @param propertyKey The property name.\r
     */\r
    function getOwnPropertyDescriptor<T extends object, P extends PropertyKey>(\r
        target: T,\r
        propertyKey: P,\r
    ): TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined;\r
\r
    /**\r
     * Returns the prototype of an object.\r
     * @param target The object that references the prototype.\r
     */\r
    function getPrototypeOf(target: object): object | null;\r
\r
    /**\r
     * Equivalent to \`propertyKey in target\`.\r
     * @param target Object that contains the property on itself or in its prototype chain.\r
     * @param propertyKey Name of the property.\r
     */\r
    function has(target: object, propertyKey: PropertyKey): boolean;\r
\r
    /**\r
     * Returns a value that indicates whether new properties can be added to an object.\r
     * @param target Object to test.\r
     */\r
    function isExtensible(target: object): boolean;\r
\r
    /**\r
     * Returns the string and symbol keys of the own properties of an object. The own properties of an object\r
     * are those that are defined directly on that object, and are not inherited from the object's prototype.\r
     * @param target Object that contains the own properties.\r
     */\r
    function ownKeys(target: object): (string | symbol)[];\r
\r
    /**\r
     * Prevents the addition of new properties to an object.\r
     * @param target Object to make non-extensible.\r
     * @return Whether the object has been made non-extensible.\r
     */\r
    function preventExtensions(target: object): boolean;\r
\r
    /**\r
     * Sets the property of target, equivalent to \`target[propertyKey] = value\` when \`receiver === target\`.\r
     * @param target Object that contains the property on itself or in its prototype chain.\r
     * @param propertyKey Name of the property.\r
     * @param receiver The reference to use as the \`this\` value in the setter function,\r
     *        if \`target[propertyKey]\` is an accessor property.\r
     */\r
    function set<T extends object, P extends PropertyKey>(\r
        target: T,\r
        propertyKey: P,\r
        value: P extends keyof T ? T[P] : any,\r
        receiver?: any,\r
    ): boolean;\r
    function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;\r
\r
    /**\r
     * Sets the prototype of a specified object o to object proto or null.\r
     * @param target The object to change its prototype.\r
     * @param proto The value of the new prototype or null.\r
     * @return Whether setting the prototype was successful.\r
     */\r
    function setPrototypeOf(target: object, proto: object | null): boolean;\r
}\r
`},12771:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface SymbolConstructor {\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: Symbol;\r
\r
    /**\r
     * Returns a new unique Symbol value.\r
     * @param  description Description of the new Symbol object.\r
     */\r
    (description?: string | number): symbol;\r
\r
    /**\r
     * Returns a Symbol object from the global symbol registry matching the given key if found.\r
     * Otherwise, returns a new symbol with this key.\r
     * @param key key to search for.\r
     */\r
    for(key: string): symbol;\r
\r
    /**\r
     * Returns a key from the global symbol registry matching the given Symbol if found.\r
     * Otherwise, returns a undefined.\r
     * @param sym Symbol to find the key for.\r
     */\r
    keyFor(sym: symbol): string | undefined;\r
}\r
\r
declare var Symbol: SymbolConstructor;`},16691:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.symbol" />\r
\r
interface SymbolConstructor {\r
    /**\r
     * A method that determines if a constructor object recognizes an object as one of the\r
     * constructor\u2019s instances. Called by the semantics of the instanceof operator.\r
     */\r
    readonly hasInstance: unique symbol;\r
\r
    /**\r
     * A Boolean value that if true indicates that an object should flatten to its array elements\r
     * by Array.prototype.concat.\r
     */\r
    readonly isConcatSpreadable: unique symbol;\r
\r
    /**\r
     * A regular expression method that matches the regular expression against a string. Called\r
     * by the String.prototype.match method.\r
     */\r
    readonly match: unique symbol;\r
\r
    /**\r
     * A regular expression method that replaces matched substrings of a string. Called by the\r
     * String.prototype.replace method.\r
     */\r
    readonly replace: unique symbol;\r
\r
    /**\r
     * A regular expression method that returns the index within a string that matches the\r
     * regular expression. Called by the String.prototype.search method.\r
     */\r
    readonly search: unique symbol;\r
\r
    /**\r
     * A function valued property that is the constructor function that is used to create\r
     * derived objects.\r
     */\r
    readonly species: unique symbol;\r
\r
    /**\r
     * A regular expression method that splits a string at the indices that match the regular\r
     * expression. Called by the String.prototype.split method.\r
     */\r
    readonly split: unique symbol;\r
\r
    /**\r
     * A method that converts an object to a corresponding primitive value.\r
     * Called by the ToPrimitive abstract operation.\r
     */\r
    readonly toPrimitive: unique symbol;\r
\r
    /**\r
     * A String value that is used in the creation of the default string description of an object.\r
     * Called by the built-in method Object.prototype.toString.\r
     */\r
    readonly toStringTag: unique symbol;\r
\r
    /**\r
     * An Object whose own property names are property names that are excluded from the 'with'\r
     * environment bindings of the associated objects.\r
     */\r
    readonly unscopables: unique symbol;\r
}\r
\r
interface Symbol {\r
    /**\r
     * Converts a Symbol object to a symbol.\r
     */\r
    [Symbol.toPrimitive](hint: string): symbol;\r
\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Array<T> {\r
    /**\r
     * Returns an object whose properties have the value 'true'\r
     * when they will be absent when used in a 'with' statement.\r
     */\r
    [Symbol.unscopables](): {\r
        copyWithin: boolean;\r
        entries: boolean;\r
        fill: boolean;\r
        find: boolean;\r
        findIndex: boolean;\r
        keys: boolean;\r
        values: boolean;\r
    };\r
}\r
\r
interface Date {\r
    /**\r
     * Converts a Date object to a string.\r
     */\r
    [Symbol.toPrimitive](hint: "default"): string;\r
    /**\r
     * Converts a Date object to a string.\r
     */\r
    [Symbol.toPrimitive](hint: "string"): string;\r
    /**\r
     * Converts a Date object to a number.\r
     */\r
    [Symbol.toPrimitive](hint: "number"): number;\r
    /**\r
     * Converts a Date object to a string or number.\r
     *\r
     * @param hint The strings "number", "string", or "default" to specify what primitive to return.\r
     *\r
     * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".\r
     * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".\r
     */\r
    [Symbol.toPrimitive](hint: string): string | number;\r
}\r
\r
interface Map<K, V> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface WeakMap<K extends object, V> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Set<T> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface WeakSet<T extends object> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface JSON {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Function {\r
    /**\r
     * Determines whether the given value inherits from this function if this function was used\r
     * as a constructor function.\r
     *\r
     * A constructor function can control which objects are recognized as its instances by\r
     * 'instanceof' by overriding this method.\r
     */\r
    [Symbol.hasInstance](value: any): boolean;\r
}\r
\r
interface GeneratorFunction {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Math {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Promise<T> {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface PromiseConstructor {\r
    readonly [Symbol.species]: PromiseConstructor;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Matches a string with this regular expression, and returns an array containing the results of\r
     * that search.\r
     * @param string A string to search within.\r
     */\r
    [Symbol.match](string: string): RegExpMatchArray | null;\r
\r
    /**\r
     * Replaces text in a string, using this regular expression.\r
     * @param string A String object or string literal whose contents matching against\r
     *               this regular expression will be replaced\r
     * @param replaceValue A String object or string literal containing the text to replace for every\r
     *                     successful match of this regular expression.\r
     */\r
    [Symbol.replace](string: string, replaceValue: string): string;\r
\r
    /**\r
     * Replaces text in a string, using this regular expression.\r
     * @param string A String object or string literal whose contents matching against\r
     *               this regular expression will be replaced\r
     * @param replacer A function that returns the replacement text.\r
     */\r
    [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;\r
\r
    /**\r
     * Finds the position beginning first substring match in a regular expression search\r
     * using this regular expression.\r
     *\r
     * @param string The string to search within.\r
     */\r
    [Symbol.search](string: string): number;\r
\r
    /**\r
     * Returns an array of substrings that were delimited by strings in the original input that\r
     * match against this regular expression.\r
     *\r
     * If the regular expression contains capturing parentheses, then each time this\r
     * regular expression matches, the results (including any undefined results) of the\r
     * capturing parentheses are spliced.\r
     *\r
     * @param string string value to split\r
     * @param limit if not undefined, the output array is truncated so that it contains no more\r
     * than 'limit' elements.\r
     */\r
    [Symbol.split](string: string, limit?: number): string[];\r
}\r
\r
interface RegExpConstructor {\r
    readonly [Symbol.species]: RegExpConstructor;\r
}\r
\r
interface String {\r
    /**\r
     * Matches a string or an object that supports being matched against, and returns an array\r
     * containing the results of that search, or null if no matches are found.\r
     * @param matcher An object that supports being matched against.\r
     */\r
    match(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null;\r
\r
    /**\r
     * Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\r
     * @param searchValue An object that supports searching for and replacing matches within a string.\r
     * @param replaceValue The replacement text.\r
     */\r
    replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;\r
\r
    /**\r
     * Replaces text in a string, using an object that supports replacement within a string.\r
     * @param searchValue A object can search for and replace matches within a string.\r
     * @param replacer A function that returns the replacement text.\r
     */\r
    replace(searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string;\r
\r
    /**\r
     * Finds the first substring match in a regular expression search.\r
     * @param searcher An object which supports searching within a string.\r
     */\r
    search(searcher: { [Symbol.search](string: string): number; }): number;\r
\r
    /**\r
     * Split a string into substrings using the specified separator and return them as an array.\r
     * @param splitter An object that can split a string.\r
     * @param limit A value used to limit the number of elements returned in the array.\r
     */\r
    split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];\r
}\r
\r
interface ArrayBuffer {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface DataView {\r
    readonly [Symbol.toStringTag]: string;\r
}\r
\r
interface Int8Array {\r
    readonly [Symbol.toStringTag]: "Int8Array";\r
}\r
\r
interface Uint8Array {\r
    readonly [Symbol.toStringTag]: "Uint8Array";\r
}\r
\r
interface Uint8ClampedArray {\r
    readonly [Symbol.toStringTag]: "Uint8ClampedArray";\r
}\r
\r
interface Int16Array {\r
    readonly [Symbol.toStringTag]: "Int16Array";\r
}\r
\r
interface Uint16Array {\r
    readonly [Symbol.toStringTag]: "Uint16Array";\r
}\r
\r
interface Int32Array {\r
    readonly [Symbol.toStringTag]: "Int32Array";\r
}\r
\r
interface Uint32Array {\r
    readonly [Symbol.toStringTag]: "Uint32Array";\r
}\r
\r
interface Float32Array {\r
    readonly [Symbol.toStringTag]: "Float32Array";\r
}\r
\r
interface Float64Array {\r
    readonly [Symbol.toStringTag]: "Float64Array";\r
}\r
\r
interface ArrayConstructor {\r
    readonly [Symbol.species]: ArrayConstructor;\r
}\r
interface MapConstructor {\r
    readonly [Symbol.species]: MapConstructor;\r
}\r
interface SetConstructor {\r
    readonly [Symbol.species]: SetConstructor;\r
}\r
interface ArrayBufferConstructor {\r
    readonly [Symbol.species]: ArrayBufferConstructor;\r
}\r
`},25385:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface Array<T> {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: T, fromIndex?: number): boolean;\r
}\r
\r
interface ReadonlyArray<T> {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: T, fromIndex?: number): boolean;\r
}\r
\r
interface Int8Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Uint8Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Uint8ClampedArray {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Int16Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Uint16Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Int32Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Uint32Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Float32Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}\r
\r
interface Float64Array {\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: number, fromIndex?: number): boolean;\r
}`},1902:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015" />\r
/// <reference lib="es2016.array.include" />`},40453:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2016" />\r
/// <reference lib="es2017.object" />\r
/// <reference lib="es2017.sharedmemory" />\r
/// <reference lib="es2017.string" />\r
/// <reference lib="es2017.intl" />\r
/// <reference lib="es2017.typedarrays" />\r
`},63799:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


declare namespace Intl {\r
\r
    interface DateTimeFormatPartTypesRegistry {\r
        day: any\r
        dayPeriod: any\r
        era: any\r
        hour: any\r
        literal: any\r
        minute: any\r
        month: any\r
        second: any\r
        timeZoneName: any\r
        weekday: any\r
        year: any\r
    }\r
\r
    type DateTimeFormatPartTypes = keyof DateTimeFormatPartTypesRegistry;\r
\r
    interface DateTimeFormatPart {\r
        type: DateTimeFormatPartTypes;\r
        value: string;\r
    }\r
\r
    interface DateTimeFormat {\r
        formatToParts(date?: Date | number): DateTimeFormatPart[];\r
    }\r
}\r
`},76100:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface ObjectConstructor {\r
    /**\r
     * Returns an array of values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];\r
\r
    /**\r
     * Returns an array of values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    values(o: {}): any[];\r
\r
    /**\r
     * Returns an array of key/values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];\r
\r
    /**\r
     * Returns an array of key/values of the enumerable properties of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    entries(o: {}): [string, any][];\r
\r
    /**\r
     * Returns an object containing all own property descriptors of an object\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };\r
}\r
`},36860:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.symbol" />\r
/// <reference lib="es2015.symbol.wellknown" />\r
\r
interface SharedArrayBuffer {\r
    /**\r
     * Read-only. The length of the ArrayBuffer (in bytes).\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * Returns a section of an SharedArrayBuffer.\r
     */\r
    slice(begin: number, end?: number): SharedArrayBuffer;\r
    readonly [Symbol.species]: SharedArrayBuffer;\r
    readonly [Symbol.toStringTag]: "SharedArrayBuffer";\r
}\r
\r
interface SharedArrayBufferConstructor {\r
    readonly prototype: SharedArrayBuffer;\r
    new (byteLength: number): SharedArrayBuffer;\r
}\r
declare var SharedArrayBuffer: SharedArrayBufferConstructor;\r
\r
interface ArrayBufferTypes {\r
    SharedArrayBuffer: SharedArrayBuffer;\r
}\r
\r
interface Atomics {\r
    /**\r
     * Adds a value to the value at the given position in the array, returning the original value.\r
     * Until this atomic operation completes, any other read or write operation against the array\r
     * will block.\r
     */\r
    add(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Stores the bitwise AND of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or\r
     * write operation against the array will block.\r
     */\r
    and(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Replaces the value at the given position in the array if the original value equals the given\r
     * expected value, returning the original value. Until this atomic operation completes, any\r
     * other read or write operation against the array will block.\r
     */\r
    compareExchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, expectedValue: number, replacementValue: number): number;\r
\r
    /**\r
     * Replaces the value at the given position in the array, returning the original value. Until\r
     * this atomic operation completes, any other read or write operation against the array will\r
     * block.\r
     */\r
    exchange(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Returns a value indicating whether high-performance algorithms can use atomic operations\r
     * (\`true\`) or must use locks (\`false\`) for the given number of bytes-per-element of a typed\r
     * array.\r
     */\r
    isLockFree(size: number): boolean;\r
\r
    /**\r
     * Returns the value at the given position in the array. Until this atomic operation completes,\r
     * any other read or write operation against the array will block.\r
     */\r
    load(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number): number;\r
\r
    /**\r
     * Stores the bitwise OR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    or(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Stores a value at the given position in the array, returning the new value. Until this\r
     * atomic operation completes, any other read or write operation against the array will block.\r
     */\r
    store(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * Subtracts a value from the value at the given position in the array, returning the original\r
     * value. Until this atomic operation completes, any other read or write operation against the\r
     * array will block.\r
     */\r
    sub(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    /**\r
     * If the value at the given position in the array is equal to the provided value, the current\r
     * agent is put to sleep causing execution to suspend until the timeout expires (returning\r
     * \`"timed-out"\`) or until the agent is awoken (returning \`"ok"\`); otherwise, returns\r
     * \`"not-equal"\`.\r
     */\r
    wait(typedArray: Int32Array, index: number, value: number, timeout?: number): "ok" | "not-equal" | "timed-out";\r
\r
    /**\r
     * Wakes up sleeping agents that are waiting on the given index of the array, returning the\r
     * number of agents that were awoken.\r
     * @param typedArray A shared Int32Array.\r
     * @param index The position in the typedArray to wake up on.\r
     * @param count The number of sleeping agents to notify. Defaults to +Infinity.\r
     */\r
    notify(typedArray: Int32Array, index: number, count?: number): number;\r
\r
    /**\r
     * Stores the bitwise XOR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    xor(typedArray: Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array, index: number, value: number): number;\r
\r
    readonly [Symbol.toStringTag]: "Atomics";\r
}\r
\r
declare var Atomics: Atomics;\r
`},36412:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface String {\r
    /**\r
     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r
     * The padding is applied from the start (left) of the current string.\r
     *\r
     * @param maxLength The length of the resulting string once the current string has been padded.\r
     *        If this parameter is smaller than the current string's length, the current string will be returned as it is.\r
     *\r
     * @param fillString The string to pad the current string with.\r
     *        If this string is too long, it will be truncated and the left-most part will be applied.\r
     *        The default value for this parameter is " " (U+0020).\r
     */\r
    padStart(maxLength: number, fillString?: string): string;\r
\r
    /**\r
     * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\r
     * The padding is applied from the end (right) of the current string.\r
     *\r
     * @param maxLength The length of the resulting string once the current string has been padded.\r
     *        If this parameter is smaller than the current string's length, the current string will be returned as it is.\r
     *\r
     * @param fillString The string to pad the current string with.\r
     *        If this string is too long, it will be truncated and the left-most part will be applied.\r
     *        The default value for this parameter is " " (U+0020).\r
     */\r
    padEnd(maxLength: number, fillString?: string): string;\r
}\r
`},41831:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface Int8ArrayConstructor {\r
    new (): Int8Array;\r
}\r
\r
interface Uint8ArrayConstructor {\r
    new (): Uint8Array;\r
}\r
\r
interface Uint8ClampedArrayConstructor {\r
    new (): Uint8ClampedArray;\r
}\r
\r
interface Int16ArrayConstructor {\r
    new (): Int16Array;\r
}\r
\r
interface Uint16ArrayConstructor {\r
    new (): Uint16Array;\r
}\r
\r
interface Int32ArrayConstructor {\r
    new (): Int32Array;\r
}\r
\r
interface Uint32ArrayConstructor {\r
    new (): Uint32Array;\r
}\r
\r
interface Float32ArrayConstructor {\r
    new (): Float32Array;\r
}\r
\r
interface Float64ArrayConstructor {\r
    new (): Float64Array;\r
}\r
`},24855:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2018.asynciterable" />\r
\r
interface AsyncGenerator<T = unknown, TReturn = any, TNext = unknown> extends AsyncIterator<T, TReturn, TNext> {\r
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.\r
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;\r
    return(value: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;\r
    throw(e: any): Promise<IteratorResult<T, TReturn>>;\r
    [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;\r
}\r
\r
interface AsyncGeneratorFunction {\r
    /**\r
     * Creates a new AsyncGenerator object.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new (...args: any[]): AsyncGenerator;\r
    /**\r
     * Creates a new AsyncGenerator object.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    (...args: any[]): AsyncGenerator;\r
    /**\r
     * The length of the arguments.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns the name of the function.\r
     */\r
    readonly name: string;\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: AsyncGenerator;\r
}\r
\r
interface AsyncGeneratorFunctionConstructor {\r
    /**\r
     * Creates a new AsyncGenerator function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new (...args: string[]): AsyncGeneratorFunction;\r
    /**\r
     * Creates a new AsyncGenerator function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    (...args: string[]): AsyncGeneratorFunction;\r
    /**\r
     * The length of the arguments.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns the name of the function.\r
     */\r
    readonly name: string;\r
    /**\r
     * A reference to the prototype.\r
     */\r
    readonly prototype: AsyncGeneratorFunction;\r
}\r
`},12555:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.symbol" />\r
/// <reference lib="es2015.iterable" />\r
\r
interface SymbolConstructor {\r
    /**\r
     * A method that returns the default async iterator for an object. Called by the semantics of\r
     * the for-await-of statement.\r
     */\r
    readonly asyncIterator: unique symbol;\r
}\r
\r
interface AsyncIterator<T, TReturn = any, TNext = undefined> {\r
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.\r
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;\r
    return?(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;\r
    throw?(e?: any): Promise<IteratorResult<T, TReturn>>;\r
}\r
\r
interface AsyncIterable<T> {\r
    [Symbol.asyncIterator](): AsyncIterator<T>;\r
}\r
\r
interface AsyncIterableIterator<T> extends AsyncIterator<T> {\r
    [Symbol.asyncIterator](): AsyncIterableIterator<T>;\r
}`},9080:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2017" />\r
/// <reference lib="es2018.asynciterable" />\r
/// <reference lib="es2018.asyncgenerator" />\r
/// <reference lib="es2018.promise" />\r
/// <reference lib="es2018.regexp" />\r
/// <reference lib="es2018.intl" />\r
`},19463:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


declare namespace Intl {\r
\r
    // http://cldr.unicode.org/index/cldr-spec/plural-rules#TOC-Determining-Plural-Categories\r
    type LDMLPluralRule = "zero" | "one" | "two" | "few" | "many" | "other";\r
    type PluralRuleType = "cardinal" | "ordinal";\r
\r
    interface PluralRulesOptions {\r
        localeMatcher?: "lookup" | "best fit" | undefined;\r
        type?: PluralRuleType | undefined;\r
        minimumIntegerDigits?: number | undefined;\r
        minimumFractionDigits?: number | undefined;\r
        maximumFractionDigits?: number | undefined;\r
        minimumSignificantDigits?: number | undefined;\r
        maximumSignificantDigits?: number | undefined;\r
    }\r
\r
    interface ResolvedPluralRulesOptions {\r
        locale: string;\r
        pluralCategories: LDMLPluralRule[];\r
        type: PluralRuleType;\r
        minimumIntegerDigits: number;\r
        minimumFractionDigits: number;\r
        maximumFractionDigits: number;\r
        minimumSignificantDigits?: number;\r
        maximumSignificantDigits?: number;\r
    }\r
\r
    interface PluralRules {\r
        resolvedOptions(): ResolvedPluralRulesOptions;\r
        select(n: number): LDMLPluralRule;\r
    }\r
\r
    const PluralRules: {\r
        new (locales?: string | string[], options?: PluralRulesOptions): PluralRules;\r
        (locales?: string | string[], options?: PluralRulesOptions): PluralRules;\r
\r
        supportedLocalesOf(locales: string | string[], options?: { localeMatcher?: "lookup" | "best fit" }): string[];\r
    };\r
\r
    // We can only have one definition for 'type' in TypeScript, and so you can learn where the keys come from here:\r
    type ES2018NumberFormatPartType = "literal" | "nan" | "infinity" | "percent" | "integer" | "group" | "decimal" | "fraction" | "plusSign" | "minusSign" | "percentSign" | "currency" | "code" | "symbol" | "name";\r
    type ES2020NumberFormatPartType = "compact" | "exponentInteger" | "exponentMinusSign" | "exponentSeparator" | "unit" | "unknown";\r
    type NumberFormatPartTypes = ES2018NumberFormatPartType | ES2020NumberFormatPartType;\r
\r
    interface NumberFormatPart {\r
        type: NumberFormatPartTypes;\r
        value: string;\r
    }\r
\r
    interface NumberFormat {\r
        formatToParts(number?: number | bigint): NumberFormatPart[];\r
    }\r
}\r
`},22656:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/**\r
 * Represents the completion of an asynchronous operation\r
 */\r
interface Promise<T> {\r
    /**\r
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The\r
     * resolved value cannot be modified from the callback.\r
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).\r
     * @returns A Promise for the completion of the callback.\r
     */\r
    finally(onfinally?: (() => void) | undefined | null): Promise<T>\r
}\r
`},42192:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface RegExpMatchArray {\r
    groups?: {\r
        [key: string]: string\r
    }\r
}\r
\r
interface RegExpExecArray {\r
    groups?: {\r
        [key: string]: string\r
    }\r
}\r
\r
interface RegExp {\r
    /**\r
     * Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.\r
     * Default is false. Read-only.\r
     */\r
    readonly dotAll: boolean;\r
}`},34518:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


type FlatArray<Arr, Depth extends number> = {\r
    "done": Arr,\r
    "recur": Arr extends ReadonlyArray<infer InnerArr>\r
        ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>\r
        : Arr\r
}[Depth extends -1 ? "done" : "recur"];\r
\r
interface ReadonlyArray<T> {\r
\r
    /**\r
     * Calls a defined callback function on each element of an array. Then, flattens the result into\r
     * a new array.\r
     * This is identical to a map followed by flat with depth 1.\r
     *\r
     * @param callback A function that accepts up to three arguments. The flatMap method calls the\r
     * callback function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callback function. If\r
     * thisArg is omitted, undefined is used as the this value.\r
     */\r
    flatMap<U, This = undefined> (\r
        callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,\r
        thisArg?: This\r
    ): U[]\r
\r
\r
    /**\r
     * Returns a new array with all sub-array elements concatenated into it recursively up to the\r
     * specified depth.\r
     *\r
     * @param depth The maximum recursion depth\r
     */\r
    flat<A, D extends number = 1>(\r
        this: A,\r
        depth?: D\r
    ): FlatArray<A, D>[]\r
  }\r
\r
interface Array<T> {\r
\r
    /**\r
     * Calls a defined callback function on each element of an array. Then, flattens the result into\r
     * a new array.\r
     * This is identical to a map followed by flat with depth 1.\r
     *\r
     * @param callback A function that accepts up to three arguments. The flatMap method calls the\r
     * callback function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callback function. If\r
     * thisArg is omitted, undefined is used as the this value.\r
     */\r
    flatMap<U, This = undefined> (\r
        callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,\r
        thisArg?: This\r
    ): U[]\r
\r
    /**\r
     * Returns a new array with all sub-array elements concatenated into it recursively up to the\r
     * specified depth.\r
     *\r
     * @param depth The maximum recursion depth\r
     */\r
    flat<A, D extends number = 1>(\r
        this: A,\r
        depth?: D\r
    ): FlatArray<A, D>[]\r
}\r
`},72931:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2018" />\r
/// <reference lib="es2019.array" />\r
/// <reference lib="es2019.object" />\r
/// <reference lib="es2019.string" />\r
/// <reference lib="es2019.symbol" />\r
/// <reference lib="es2019.intl" />\r
`},88823:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.iterable" />\r
\r
interface ObjectConstructor {\r
    /**\r
     * Returns an object created by key-value entries for properties and methods\r
     * @param entries An iterable object that contains key-value entries for properties and methods.\r
     */\r
    fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T };\r
\r
    /**\r
     * Returns an object created by key-value entries for properties and methods\r
     * @param entries An iterable object that contains key-value entries for properties and methods.\r
     */\r
    fromEntries(entries: Iterable<readonly any[]>): any;\r
}\r
`},4092:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface String {\r
    /** Removes the trailing white space and line terminator characters from a string. */\r
    trimEnd(): string;\r
\r
    /** Removes the leading white space and line terminator characters from a string. */\r
    trimStart(): string;\r
\r
    /**\r
     * Removes the leading white space and line terminator characters from a string.\r
     * @deprecated A legacy feature for browser compatibility. Use \`trimStart\` instead\r
     */\r
    trimLeft(): string;\r
\r
    /**\r
     * Removes the trailing white space and line terminator characters from a string.\r
     * @deprecated A legacy feature for browser compatibility. Use \`trimEnd\` instead\r
     */\r
    trimRight(): string;\r
}\r
`},57495:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface Symbol {\r
    /**\r
     * Expose the [[Description]] internal slot of a symbol directly.\r
     */\r
    readonly description: string | undefined;\r
}\r
`},31582:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2020.intl" />\r
\r
interface BigIntToLocaleStringOptions {\r
    /**\r
     * The locale matching algorithm to use.The default is "best fit". For information about this option, see the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation Intl page}.\r
     */\r
    localeMatcher?: string;\r
    /**\r
     * The formatting style to use , the default is "decimal".\r
     */\r
    style?: string;\r
\r
    numberingSystem?: string;\r
    /**\r
     * The unit to use in unit formatting, Possible values are core unit identifiers, defined in UTS #35, Part 2, Section 6. A subset of units from the full list was selected for use in ECMAScript. Pairs of simple units can be concatenated with "-per-" to make a compound unit. There is no default value; if the style is "unit", the unit property must be provided.\r
     */\r
    unit?: string;\r
\r
    /**\r
     * The unit formatting style to use in unit formatting, the defaults is "short".\r
     */\r
    unitDisplay?: string;\r
\r
    /**\r
     * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB \u2014 see the Current currency & funds code list. There is no default value; if the style is "currency", the currency property must be provided. It is only used when [[Style]] has the value "currency".\r
     */\r
    currency?: string;\r
\r
    /**\r
     * How to display the currency in currency formatting. It is only used when [[Style]] has the value "currency". The default is "symbol".\r
     *\r
     * "symbol" to use a localized currency symbol such as \u20AC,\r
     *\r
     * "code" to use the ISO currency code,\r
     *\r
     * "name" to use a localized currency name such as "dollar"\r
     */\r
    currencyDisplay?: string;\r
\r
    /**\r
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. The default is true.\r
     */\r
    useGrouping?: boolean;\r
\r
    /**\r
     * The minimum number of integer digits to use. Possible values are from 1 to 21; the default is 1.\r
     */\r
    minimumIntegerDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r
\r
    /**\r
     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the {@link http://www.currency-iso.org/en/home/tables/table-a1.html ISO 4217 currency codes list} (2 if the list doesn't provide that information).\r
     */\r
    minimumFractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;\r
\r
    /**\r
     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the {@link http://www.currency-iso.org/en/home/tables/table-a1.html ISO 4217 currency codes list} (2 if the list doesn't provide that information); the default for percent formatting is the larger of minimumFractionDigits and 0.\r
     */\r
    maximumFractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;\r
\r
    /**\r
     * The minimum number of significant digits to use. Possible values are from 1 to 21; the default is 1.\r
     */\r
    minimumSignificantDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r
\r
    /**\r
     * The maximum number of significant digits to use. Possible values are from 1 to 21; the default is 21.\r
     */\r
    maximumSignificantDigits?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;\r
\r
    /**\r
     * The formatting that should be displayed for the number, the defaults is "standard"\r
     *\r
     *     "standard" plain number formatting\r
     *\r
     *     "scientific" return the order-of-magnitude for formatted number.\r
     *\r
     *     "engineering" return the exponent of ten when divisible by three\r
     *\r
     *     "compact" string representing exponent, defaults is using the "short" form\r
     */\r
    notation?: string;\r
\r
    /**\r
     * used only when notation is "compact"\r
     */\r
    compactDisplay?: string;\r
}\r
\r
interface BigInt {\r
    /**\r
     * Returns a string representation of an object.\r
     * @param radix Specifies a radix for converting numeric values to strings.\r
     */\r
    toString(radix?: number): string;\r
\r
    /** Returns a string representation appropriate to the host environment's current locale. */\r
    toLocaleString(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): bigint;\r
\r
    readonly [Symbol.toStringTag]: "BigInt";\r
}\r
\r
interface BigIntConstructor {\r
    (value: bigint | boolean | number | string): bigint;\r
    readonly prototype: BigInt;\r
\r
    /**\r
     * Interprets the low bits of a BigInt as a 2's-complement signed integer.\r
     * All higher bits are discarded.\r
     * @param bits The number of low bits to use\r
     * @param int The BigInt whose bits to extract\r
     */\r
    asIntN(bits: number, int: bigint): bigint;\r
    /**\r
     * Interprets the low bits of a BigInt as an unsigned integer.\r
     * All higher bits are discarded.\r
     * @param bits The number of low bits to use\r
     * @param int The BigInt whose bits to extract\r
     */\r
    asUintN(bits: number, int: bigint): bigint;\r
}\r
\r
declare var BigInt: BigIntConstructor;\r
\r
/**\r
 * A typed array of 64-bit signed integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated, an exception is raised.\r
 */\r
interface BigInt64Array {\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /** The ArrayBuffer instance referenced by the array. */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /** The length in bytes of the array. */\r
    readonly byteLength: number;\r
\r
    /** The offset in bytes of the array. */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /** Yields index, value pairs for every entry in the array. */\r
    entries(): IterableIterator<[number, bigint]>;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns false,\r
     * or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: bigint, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: bigint, index: number, array: BigInt64Array) => any, thisArg?: any): BigInt64Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): bigint | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: bigint, index: number, array: BigInt64Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: bigint, fromIndex?: number): boolean;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    indexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /** Yields each index in the array. */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /** The length of the array. */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: bigint, index: number, array: BigInt64Array) => bigint, thisArg?: any): BigInt64Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array) => bigint): bigint;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array) => U, initialValue: U): U;\r
\r
    /** Reverses the elements in the array. */\r
    reverse(): this;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<bigint>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array.\r
     */\r
    slice(start?: number, end?: number): BigInt64Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls the\r
     * predicate function for each element in the array until the predicate returns true, or until\r
     * the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: bigint, index: number, array: BigInt64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts the array.\r
     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\r
     */\r
    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\r
\r
    /**\r
     * Gets a new BigInt64Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): BigInt64Array;\r
\r
    /** Converts the array to a string by using the current locale. */\r
    toLocaleString(): string;\r
\r
    /** Returns a string representation of the array. */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): BigInt64Array;\r
\r
    /** Yields each value in the array. */\r
    values(): IterableIterator<bigint>;\r
\r
    [Symbol.iterator](): IterableIterator<bigint>;\r
\r
    readonly [Symbol.toStringTag]: "BigInt64Array";\r
\r
    [index: number]: bigint;\r
}\r
\r
interface BigInt64ArrayConstructor {\r
    readonly prototype: BigInt64Array;\r
    new(length?: number): BigInt64Array;\r
    new(array: Iterable<bigint>): BigInt64Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigInt64Array;\r
\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: bigint[]): BigInt64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: ArrayLike<bigint>): BigInt64Array;\r
    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigInt64Array;\r
}\r
\r
declare var BigInt64Array: BigInt64ArrayConstructor;\r
\r
/**\r
 * A typed array of 64-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated, an exception is raised.\r
 */\r
interface BigUint64Array {\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /** The ArrayBuffer instance referenced by the array. */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /** The length in bytes of the array. */\r
    readonly byteLength: number;\r
\r
    /** The offset in bytes of the array. */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /** Yields index, value pairs for every entry in the array. */\r
    entries(): IterableIterator<[number, bigint]>;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns false,\r
     * or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: bigint, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: bigint, index: number, array: BigUint64Array) => any, thisArg?: any): BigUint64Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): bigint | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: bigint, index: number, array: BigUint64Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Determines whether an array includes a certain element, returning true or false as appropriate.\r
     * @param searchElement The element to search for.\r
     * @param fromIndex The position in this array at which to begin searching for searchElement.\r
     */\r
    includes(searchElement: bigint, fromIndex?: number): boolean;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    indexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /** Yields each index in the array. */\r
    keys(): IterableIterator<number>;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: bigint, fromIndex?: number): number;\r
\r
    /** The length of the array. */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: bigint, index: number, array: BigUint64Array) => bigint, thisArg?: any): BigUint64Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array) => bigint): bigint;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array) => U, initialValue: U): U;\r
\r
    /** Reverses the elements in the array. */\r
    reverse(): this;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<bigint>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array.\r
     */\r
    slice(start?: number, end?: number): BigUint64Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls the\r
     * predicate function for each element in the array until the predicate returns true, or until\r
     * the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: bigint, index: number, array: BigUint64Array) => boolean, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts the array.\r
     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.\r
     */\r
    sort(compareFn?: (a: bigint, b: bigint) => number | bigint): this;\r
\r
    /**\r
     * Gets a new BigUint64Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): BigUint64Array;\r
\r
    /** Converts the array to a string by using the current locale. */\r
    toLocaleString(): string;\r
\r
    /** Returns a string representation of the array. */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): BigUint64Array;\r
\r
    /** Yields each value in the array. */\r
    values(): IterableIterator<bigint>;\r
\r
    [Symbol.iterator](): IterableIterator<bigint>;\r
\r
    readonly [Symbol.toStringTag]: "BigUint64Array";\r
\r
    [index: number]: bigint;\r
}\r
\r
interface BigUint64ArrayConstructor {\r
    readonly prototype: BigUint64Array;\r
    new(length?: number): BigUint64Array;\r
    new(array: Iterable<bigint>): BigUint64Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): BigUint64Array;\r
\r
    /** The size in bytes of each element in the array. */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: bigint[]): BigUint64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from(arrayLike: ArrayLike<bigint>): BigUint64Array;\r
    from<U>(arrayLike: ArrayLike<U>, mapfn: (v: U, k: number) => bigint, thisArg?: any): BigUint64Array;\r
}\r
\r
declare var BigUint64Array: BigUint64ArrayConstructor;\r
\r
interface DataView {\r
    /**\r
     * Gets the BigInt64 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getBigInt64(byteOffset: number, littleEndian?: boolean): bigint;\r
\r
    /**\r
     * Gets the BigUint64 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getBigUint64(byteOffset: number, littleEndian?: boolean): bigint;\r
\r
    /**\r
     * Stores a BigInt64 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setBigInt64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores a BigUint64 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setBigUint64(byteOffset: number, value: bigint, littleEndian?: boolean): void;\r
}\r
\r
declare namespace Intl{\r
    interface NumberFormat {\r
        format(value: number | bigint): string;\r
        resolvedOptions(): ResolvedNumberFormatOptions;\r
    }\r
}\r
`},34607:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2019" />\r
/// <reference lib="es2020.bigint" />\r
/// <reference lib="es2020.date" />\r
/// <reference lib="es2020.number" />\r
/// <reference lib="es2020.promise" />\r
/// <reference lib="es2020.sharedmemory" />\r
/// <reference lib="es2020.string" />\r
/// <reference lib="es2020.symbol.wellknown" />\r
/// <reference lib="es2020.intl" />\r
`},66848:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2018.intl" />\r
declare namespace Intl {\r
\r
    /**\r
     * [Unicode BCP 47 Locale Identifiers](https://unicode.org/reports/tr35/#Unicode_Language_and_Locale_Identifiers) definition.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\r
     */\r
    type UnicodeBCP47LocaleIdentifier = string;\r
\r
    /**\r
     * Unit to use in the relative time internationalized message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#Parameters).\r
     */\r
    type RelativeTimeFormatUnit =\r
        | "year"\r
        | "years"\r
        | "quarter"\r
        | "quarters"\r
        | "month"\r
        | "months"\r
        | "week"\r
        | "weeks"\r
        | "day"\r
        | "days"\r
        | "hour"\r
        | "hours"\r
        | "minute"\r
        | "minutes"\r
        | "second"\r
        | "seconds";\r
\r
    /**\r
     * Value of the \`unit\` property in objects returned by\r
     * \`Intl.RelativeTimeFormat.prototype.formatToParts()\`. \`formatToParts\` and\r
     * \`format\` methods accept either singular or plural unit names as input,\r
     * but \`formatToParts\` only outputs singular (e.g. "day") not plural (e.g.\r
     * "days").\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts#Using_formatToParts).\r
     */\r
     type RelativeTimeFormatUnitSingular =\r
        | "year"\r
        | "quarter"\r
        | "month"\r
        | "week"\r
        | "day"\r
        | "hour"\r
        | "minute"\r
        | "second";\r
\r
    /**\r
     * The locale matching algorithm to use.\r
     *\r
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).\r
     */\r
    type RelativeTimeFormatLocaleMatcher = "lookup" | "best fit";\r
\r
    /**\r
     * The format of output message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\r
     */\r
    type RelativeTimeFormatNumeric = "always" | "auto";\r
\r
    /**\r
     * The length of the internationalized message.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\r
     */\r
    type RelativeTimeFormatStyle = "long" | "short" | "narrow";\r
\r
    /**\r
     * [BCP 47 language tag](http://tools.ietf.org/html/rfc5646) definition.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\r
     */\r
    type BCP47LanguageTag = string;\r
\r
    /**\r
     * The locale(s) to use\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\r
     */\r
    type LocalesArgument = UnicodeBCP47LocaleIdentifier | Locale | readonly (UnicodeBCP47LocaleIdentifier | Locale)[] | undefined;\r
\r
    /**\r
     * An object with some or all of properties of \`options\` parameter\r
     * of \`Intl.RelativeTimeFormat\` constructor.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\r
     */\r
    interface RelativeTimeFormatOptions {\r
        /** The locale matching algorithm to use. For information about this option, see [Intl page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation). */\r
        localeMatcher?: RelativeTimeFormatLocaleMatcher;\r
        /** The format of output message. */\r
        numeric?: RelativeTimeFormatNumeric;\r
        /** The length of the internationalized message. */\r
        style?: RelativeTimeFormatStyle;\r
    }\r
\r
    /**\r
     * An object with properties reflecting the locale\r
     * and formatting options computed during initialization\r
     * of the \`Intl.RelativeTimeFormat\` object\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#Description).\r
     */\r
    interface ResolvedRelativeTimeFormatOptions {\r
        locale: UnicodeBCP47LocaleIdentifier;\r
        style: RelativeTimeFormatStyle;\r
        numeric: RelativeTimeFormatNumeric;\r
        numberingSystem: string;\r
    }\r
\r
    /**\r
     * An object representing the relative time format in parts\r
     * that can be used for custom locale-aware formatting.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts#Using_formatToParts).\r
     */\r
    type RelativeTimeFormatPart =\r
        | {\r
              type: "literal";\r
              value: string;\r
          }\r
        | {\r
              type: Exclude<NumberFormatPartTypes, "literal">;\r
              value: string;\r
              unit: RelativeTimeFormatUnitSingular;\r
          };\r
\r
    interface RelativeTimeFormat {\r
        /**\r
         * Formats a value and a unit according to the locale\r
         * and formatting options of the given\r
         * [\`Intl.RelativeTimeFormat\`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)\r
         * object.\r
         *\r
         * While this method automatically provides the correct plural forms,\r
         * the grammatical form is otherwise as neutral as possible.\r
         *\r
         * It is the caller's responsibility to handle cut-off logic\r
         * such as deciding between displaying "in 7 days" or "in 1 week".\r
         * This API does not support relative dates involving compound units.\r
         * e.g "in 5 days and 4 hours".\r
         *\r
         * @param value -  Numeric value to use in the internationalized relative time message\r
         *\r
         * @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.\r
         *\r
         * @throws \`RangeError\` if \`unit\` was given something other than \`unit\` possible values\r
         *\r
         * @returns {string} Internationalized relative time message as string\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format).\r
         */\r
        format(value: number, unit: RelativeTimeFormatUnit): string;\r
\r
        /**\r
         *  Returns an array of objects representing the relative time format in parts that can be used for custom locale-aware formatting.\r
         *\r
         *  @param value - Numeric value to use in the internationalized relative time message\r
         *\r
         *  @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.\r
         *\r
         *  @throws \`RangeError\` if \`unit\` was given something other than \`unit\` possible values\r
         *\r
         *  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts).\r
         */\r
        formatToParts(value: number, unit: RelativeTimeFormatUnit): RelativeTimeFormatPart[];\r
\r
        /**\r
         * Provides access to the locale and options computed during initialization of this \`Intl.RelativeTimeFormat\` object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions).\r
         */\r
        resolvedOptions(): ResolvedRelativeTimeFormatOptions;\r
    }\r
\r
    /**\r
     * The [\`Intl.RelativeTimeFormat\`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)\r
     * object is a constructor for objects that enable language-sensitive relative time formatting.\r
     *\r
     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat#Browser_compatibility).\r
     */\r
    const RelativeTimeFormat: {\r
        /**\r
         * Creates [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) objects\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the locales argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)\r
         *  with some or all of options of \`RelativeTimeFormatOptions\`.\r
         *\r
         * @returns [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat).\r
         */\r
        new(\r
            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],\r
            options?: RelativeTimeFormatOptions,\r
        ): RelativeTimeFormat;\r
\r
        /**\r
         * Returns an array containing those of the provided locales\r
         * that are supported in date and time formatting\r
         * without having to fall back to the runtime's default locale.\r
         *\r
         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\r
         *  For the general form and interpretation of the locales argument,\r
         *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
         *\r
         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)\r
         *  with some or all of options of the formatting.\r
         *\r
         * @returns An array containing those of the provided locales\r
         *  that are supported in date and time formatting\r
         *  without having to fall back to the runtime's default locale.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf).\r
         */\r
        supportedLocalesOf(\r
            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],\r
            options?: RelativeTimeFormatOptions,\r
        ): UnicodeBCP47LocaleIdentifier[];\r
    };\r
\r
    interface NumberFormatOptions {\r
        compactDisplay?: "short" | "long" | undefined;\r
        notation?: "standard" | "scientific" | "engineering" | "compact" | undefined;\r
        signDisplay?: "auto" | "never" | "always" | "exceptZero" | undefined;\r
        unit?: string | undefined;\r
        unitDisplay?: "short" | "long" | "narrow" | undefined;\r
        currencyDisplay?: string | undefined;\r
        currencySign?: string | undefined;\r
    }\r
\r
    interface ResolvedNumberFormatOptions {\r
        compactDisplay?: "short" | "long";\r
        notation?: "standard" | "scientific" | "engineering" | "compact";\r
        signDisplay?: "auto" | "never" | "always" | "exceptZero";\r
        unit?: string;\r
        unitDisplay?: "short" | "long" | "narrow";\r
        currencyDisplay?: string;\r
        currencySign?: string;\r
    }\r
\r
    interface DateTimeFormatOptions {\r
        calendar?: string | undefined;\r
        dayPeriod?: "narrow" | "short" | "long" | undefined;\r
        numberingSystem?: string | undefined;\r
\r
        dateStyle?: "full" | "long" | "medium" | "short" | undefined;\r
        timeStyle?: "full" | "long" | "medium" | "short" | undefined;\r
        hourCycle?: "h11" | "h12" | "h23" | "h24" | undefined;\r
    }\r
\r
    type LocaleHourCycleKey = "h12" | "h23" | "h11" | "h24";\r
    type LocaleCollationCaseFirst = "upper" | "lower" | "false";\r
\r
    interface LocaleOptions {\r
        /** A string containing the language, and the script and region if available. */\r
        baseName?: string;\r
        /** The part of the Locale that indicates the locale's calendar era. */\r
        calendar?: string;\r
        /** Flag that defines whether case is taken into account for the locale's collation rules. */\r
        caseFirst?: LocaleCollationCaseFirst;\r
        /** The collation type used for sorting */\r
        collation?: string;\r
        /** The time keeping format convention used by the locale. */\r
        hourCycle?: LocaleHourCycleKey;\r
        /** The primary language subtag associated with the locale. */\r
        language?: string;\r
        /** The numeral system used by the locale. */\r
        numberingSystem?: string;\r
        /** Flag that defines whether the locale has special collation handling for numeric characters. */\r
        numeric?: boolean;\r
        /** The region of the world (usually a country) associated with the locale. Possible values are region codes as defined by ISO 3166-1. */\r
        region?: string;\r
        /** The script used for writing the particular language used in the locale. Possible values are script codes as defined by ISO 15924. */\r
        script?: string;\r
    }\r
\r
    interface Locale extends LocaleOptions {\r
        /** A string containing the language, and the script and region if available. */\r
        baseName: string;\r
        /** The primary language subtag associated with the locale. */\r
        language: string;\r
        /** Gets the most likely values for the language, script, and region of the locale based on existing values. */\r
        maximize(): Locale;\r
        /** Attempts to remove information about the locale that would be added by calling \`Locale.maximize()\`. */\r
        minimize(): Locale;\r
        /** Returns the locale's full locale identifier string. */\r
        toString(): BCP47LanguageTag;\r
    }\r
\r
    /**\r
     * Constructor creates [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)\r
     * objects\r
     *\r
     * @param tag - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646).\r
     *  For the general form and interpretation of the locales argument,\r
     *  see the [\`Intl\` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\r
     *\r
     * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#Parameters) with some or all of options of the locale.\r
     *\r
     * @returns [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) object.\r
     *\r
     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale).\r
     */\r
    const Locale: {\r
        new (tag: BCP47LanguageTag | Locale, options?: LocaleOptions): Locale;\r
    };\r
\r
    type DisplayNamesFallback =\r
        | "code"\r
        | "none";\r
\r
    type DisplayNamesType =\r
        | "language"\r
        | "region"\r
        | "script"\r
        | "calendar"\r
        | "dateTimeField"\r
        | "currency";\r
\r
    type DisplayNamesLanguageDisplay =\r
        | "dialect"\r
        | "standard";\r
\r
    interface DisplayNamesOptions {\r
        localeMatcher?: RelativeTimeFormatLocaleMatcher;\r
        style?: RelativeTimeFormatStyle;\r
        type: DisplayNamesType;\r
        languageDisplay?: DisplayNamesLanguageDisplay;\r
        fallback?: DisplayNamesFallback;\r
    }\r
\r
    interface ResolvedDisplayNamesOptions {\r
        locale: UnicodeBCP47LocaleIdentifier;\r
        style: RelativeTimeFormatStyle;\r
        type: DisplayNamesType;\r
        fallback: DisplayNamesFallback;\r
        languageDisplay?: DisplayNamesLanguageDisplay;\r
    }\r
\r
    interface DisplayNames {\r
        /**\r
         * Receives a code and returns a string based on the locale and options provided when instantiating\r
         * [\`Intl.DisplayNames()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)\r
         *\r
         * @param code The \`code\` to provide depends on the \`type\` passed to display name during creation:\r
         *  - If the type is \`"region"\`, code should be either an [ISO-3166 two letters region code](https://www.iso.org/iso-3166-country-codes.html),\r
         *    or a [three digits UN M49 Geographic Regions](https://unstats.un.org/unsd/methodology/m49/).\r
         *  - If the type is \`"script"\`, code should be an [ISO-15924 four letters script code](https://unicode.org/iso15924/iso15924-codes.html).\r
         *  - If the type is \`"language"\`, code should be a \`languageCode\` ["-" \`scriptCode\`] ["-" \`regionCode\` ] *("-" \`variant\` )\r
         *    subsequence of the unicode_language_id grammar in [UTS 35's Unicode Language and Locale Identifiers grammar](https://unicode.org/reports/tr35/#Unicode_language_identifier).\r
         *    \`languageCode\` is either a two letters ISO 639-1 language code or a three letters ISO 639-2 language code.\r
         *  - If the type is \`"currency"\`, code should be a [3-letter ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html).\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of).\r
         */\r
        of(code: string): string | undefined;\r
        /**\r
         * Returns a new object with properties reflecting the locale and style formatting options computed during the construction of the current\r
         * [\`Intl/DisplayNames\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) object.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions).\r
         */\r
        resolvedOptions(): ResolvedDisplayNamesOptions;\r
    }\r
\r
    /**\r
     * The [\`Intl.DisplayNames()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)\r
     * object enables the consistent translation of language, region and script display names.\r
     *\r
     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames#browser_compatibility).\r
     */\r
    const DisplayNames: {\r
        prototype: DisplayNames;\r
\r
        /**\r
         * @param locales A string with a BCP 47 language tag, or an array of such strings.\r
         *   For the general form and interpretation of the \`locales\` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)\r
         *   page.\r
         *\r
         * @param options An object for setting up a display name.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames).\r
         */\r
        new(locales: LocalesArgument, options: DisplayNamesOptions): DisplayNames;\r
\r
        /**\r
         * Returns an array containing those of the provided locales that are supported in display names without having to fall back to the runtime's default locale.\r
         *\r
         * @param locales A string with a BCP 47 language tag, or an array of such strings.\r
         *   For the general form and interpretation of the \`locales\` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)\r
         *   page.\r
         *\r
         * @param options An object with a locale matcher.\r
         *\r
         * @returns An array of strings representing a subset of the given locale tags that are supported in display names without having to fall back to the runtime's default locale.\r
         *\r
         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf).\r
         */\r
        supportedLocalesOf(locales?: LocalesArgument, options?: { localeMatcher?: RelativeTimeFormatLocaleMatcher }): BCP47LanguageTag[];\r
    };\r
\r
}\r
`},67780:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface PromiseFulfilledResult<T> {\r
    status: "fulfilled";\r
    value: T;\r
}\r
\r
interface PromiseRejectedResult {\r
    status: "rejected";\r
    reason: any;\r
}\r
\r
type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;\r
\r
interface PromiseConstructor {\r
    /**\r
     * Creates a Promise that is resolved with an array of results when all\r
     * of the provided Promises resolve or reject.\r
     * @param values An array of Promises.\r
     * @returns A new Promise.\r
     */\r
    allSettled<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: PromiseSettledResult<Awaited<T[P]>> }>;\r
\r
    /**\r
     * Creates a Promise that is resolved with an array of results when all\r
     * of the provided Promises resolve or reject.\r
     * @param values An array of Promises.\r
     * @returns A new Promise.\r
     */\r
    allSettled<T>(values: Iterable<T | PromiseLike<T>>): Promise<PromiseSettledResult<Awaited<T>>[]>;\r
}\r
`},95681:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


interface Atomics {\r
    /**\r
     * Adds a value to the value at the given position in the array, returning the original value.\r
     * Until this atomic operation completes, any other read or write operation against the array\r
     * will block.\r
     */\r
    add(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Stores the bitwise AND of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or\r
     * write operation against the array will block.\r
     */\r
    and(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Replaces the value at the given position in the array if the original value equals the given\r
     * expected value, returning the original value. Until this atomic operation completes, any\r
     * other read or write operation against the array will block.\r
     */\r
    compareExchange(typedArray: BigInt64Array | BigUint64Array, index: number, expectedValue: bigint, replacementValue: bigint): bigint;\r
\r
    /**\r
     * Replaces the value at the given position in the array, returning the original value. Until\r
     * this atomic operation completes, any other read or write operation against the array will\r
     * block.\r
     */\r
    exchange(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Returns the value at the given position in the array. Until this atomic operation completes,\r
     * any other read or write operation against the array will block.\r
     */\r
    load(typedArray: BigInt64Array | BigUint64Array, index: number): bigint;\r
\r
    /**\r
     * Stores the bitwise OR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    or(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Stores a value at the given position in the array, returning the new value. Until this\r
     * atomic operation completes, any other read or write operation against the array will block.\r
     */\r
    store(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * Subtracts a value from the value at the given position in the array, returning the original\r
     * value. Until this atomic operation completes, any other read or write operation against the\r
     * array will block.\r
     */\r
    sub(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
\r
    /**\r
     * If the value at the given position in the array is equal to the provided value, the current\r
     * agent is put to sleep causing execution to suspend until the timeout expires (returning\r
     * \`"timed-out"\`) or until the agent is awoken (returning \`"ok"\`); otherwise, returns\r
     * \`"not-equal"\`.\r
     */\r
    wait(typedArray: BigInt64Array, index: number, value: bigint, timeout?: number): "ok" | "not-equal" | "timed-out";\r
\r
    /**\r
     * Wakes up sleeping agents that are waiting on the given index of the array, returning the\r
     * number of agents that were awoken.\r
     * @param typedArray A shared BigInt64Array.\r
     * @param index The position in the typedArray to wake up on.\r
     * @param count The number of sleeping agents to notify. Defaults to +Infinity.\r
     */\r
    notify(typedArray: BigInt64Array, index: number, count?: number): number;\r
\r
    /**\r
     * Stores the bitwise XOR of a value with the value at the given position in the array,\r
     * returning the original value. Until this atomic operation completes, any other read or write\r
     * operation against the array will block.\r
     */\r
    xor(typedArray: BigInt64Array | BigUint64Array, index: number, value: bigint): bigint;\r
}\r
`},39977:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.iterable" />\r
\r
interface String {\r
    /**\r
     * Matches a string with a regular expression, and returns an iterable of matches\r
     * containing the results of that search.\r
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.\r
     */\r
    matchAll(regexp: RegExp): IterableIterator<RegExpMatchArray>;\r
}\r
`},83597:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/// <reference lib="es2015.iterable" />\r
/// <reference lib="es2015.symbol" />\r
\r
interface SymbolConstructor {\r
    /**\r
     * A regular expression method that matches the regular expression against a string. Called\r
     * by the String.prototype.matchAll method.\r
     */\r
    readonly matchAll: unique symbol;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Matches a string with this regular expression, and returns an iterable of matches\r
     * containing the results of that search.\r
     * @param string A string to search within.\r
     */\r
    [Symbol.matchAll](str: string): IterableIterator<RegExpMatchArray>;\r
}\r
`},52822:e=>{e.exports=`/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */



/// <reference no-default-lib="true"/>\r


/////////////////////////////\r
/// ECMAScript APIs\r
/////////////////////////////\r
\r
declare var NaN: number;\r
declare var Infinity: number;\r
\r
/**\r
 * Evaluates JavaScript code and executes it.\r
 * @param x A String value that contains valid JavaScript code.\r
 */\r
declare function eval(x: string): any;\r
\r
/**\r
 * Converts a string to an integer.\r
 * @param string A string to convert into a number.\r
 * @param radix A value between 2 and 36 that specifies the base of the number in \`string\`.\r
 * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.\r
 * All other strings are considered decimal.\r
 */\r
declare function parseInt(string: string, radix?: number): number;\r
\r
/**\r
 * Converts a string to a floating-point number.\r
 * @param string A string that contains a floating-point number.\r
 */\r
declare function parseFloat(string: string): number;\r
\r
/**\r
 * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).\r
 * @param number A numeric value.\r
 */\r
declare function isNaN(number: number): boolean;\r
\r
/**\r
 * Determines whether a supplied number is finite.\r
 * @param number Any numeric value.\r
 */\r
declare function isFinite(number: number): boolean;\r
\r
/**\r
 * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).\r
 * @param encodedURI A value representing an encoded URI.\r
 */\r
declare function decodeURI(encodedURI: string): string;\r
\r
/**\r
 * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).\r
 * @param encodedURIComponent A value representing an encoded URI component.\r
 */\r
declare function decodeURIComponent(encodedURIComponent: string): string;\r
\r
/**\r
 * Encodes a text string as a valid Uniform Resource Identifier (URI)\r
 * @param uri A value representing an unencoded URI.\r
 */\r
declare function encodeURI(uri: string): string;\r
\r
/**\r
 * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).\r
 * @param uriComponent A value representing an unencoded URI component.\r
 */\r
declare function encodeURIComponent(uriComponent: string | number | boolean): string;\r
\r
/**\r
 * Computes a new string in which certain characters have been replaced by a hexadecimal escape sequence.\r
 * @deprecated A legacy feature for browser compatibility\r
 * @param string A string value\r
 */\r
declare function escape(string: string): string;\r
\r
/**\r
 * Computes a new string in which hexadecimal escape sequences are replaced with the character that it represents.\r
 * @deprecated A legacy feature for browser compatibility\r
 * @param string A string value\r
 */\r
declare function unescape(string: string): string;\r
\r
interface Symbol {\r
    /** Returns a string representation of an object. */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): symbol;\r
}\r
\r
declare type PropertyKey = string | number | symbol;\r
\r
interface PropertyDescriptor {\r
    configurable?: boolean;\r
    enumerable?: boolean;\r
    value?: any;\r
    writable?: boolean;\r
    get?(): any;\r
    set?(v: any): void;\r
}\r
\r
interface PropertyDescriptorMap {\r
    [key: PropertyKey]: PropertyDescriptor;\r
}\r
\r
interface Object {\r
    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */\r
    constructor: Function;\r
\r
    /** Returns a string representation of an object. */\r
    toString(): string;\r
\r
    /** Returns a date converted to a string using the current locale. */\r
    toLocaleString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Object;\r
\r
    /**\r
     * Determines whether an object has a property with the specified name.\r
     * @param v A property name.\r
     */\r
    hasOwnProperty(v: PropertyKey): boolean;\r
\r
    /**\r
     * Determines whether an object exists in another object's prototype chain.\r
     * @param v Another object whose prototype chain is to be checked.\r
     */\r
    isPrototypeOf(v: Object): boolean;\r
\r
    /**\r
     * Determines whether a specified property is enumerable.\r
     * @param v A property name.\r
     */\r
    propertyIsEnumerable(v: PropertyKey): boolean;\r
}\r
\r
interface ObjectConstructor {\r
    new(value?: any): Object;\r
    (): any;\r
    (value: any): any;\r
\r
    /** A reference to the prototype for a class of objects. */\r
    readonly prototype: Object;\r
\r
    /**\r
     * Returns the prototype of an object.\r
     * @param o The object that references the prototype.\r
     */\r
    getPrototypeOf(o: any): any;\r
\r
    /**\r
     * Gets the own property descriptor of the specified object.\r
     * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.\r
     * @param o Object that contains the property.\r
     * @param p Name of the property.\r
     */\r
    getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;\r
\r
    /**\r
     * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly\r
     * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.\r
     * @param o Object that contains the own properties.\r
     */\r
    getOwnPropertyNames(o: any): string[];\r
\r
    /**\r
     * Creates an object that has the specified prototype or that has null prototype.\r
     * @param o Object to use as a prototype. May be null.\r
     */\r
    create(o: object | null): any;\r
\r
    /**\r
     * Creates an object that has the specified prototype, and that optionally contains specified properties.\r
     * @param o Object to use as a prototype. May be null\r
     * @param properties JavaScript object that contains one or more property descriptors.\r
     */\r
    create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;\r
\r
    /**\r
     * Adds a property to an object, or modifies attributes of an existing property.\r
     * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.\r
     * @param p The property name.\r
     * @param attributes Descriptor for the property. It can be for a data property or an accessor property.\r
     */\r
    defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;\r
\r
    /**\r
     * Adds one or more properties to an object, and/or modifies attributes of existing properties.\r
     * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.\r
     * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.\r
     */\r
    defineProperties<T>(o: T, properties: PropertyDescriptorMap & ThisType<any>): T;\r
\r
    /**\r
     * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.\r
     * @param o Object on which to lock the attributes.\r
     */\r
    seal<T>(o: T): T;\r
\r
    /**\r
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.\r
     * @param f Object on which to lock the attributes.\r
     */\r
    freeze<T extends Function>(f: T): T;\r
\r
    /**\r
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.\r
     * @param o Object on which to lock the attributes.\r
     */\r
    freeze<T extends {[idx: string]: U | null | undefined | object}, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;\r
\r
    /**\r
     * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.\r
     * @param o Object on which to lock the attributes.\r
     */\r
    freeze<T>(o: T): Readonly<T>;\r
\r
    /**\r
     * Prevents the addition of new properties to an object.\r
     * @param o Object to make non-extensible.\r
     */\r
    preventExtensions<T>(o: T): T;\r
\r
    /**\r
     * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.\r
     * @param o Object to test.\r
     */\r
    isSealed(o: any): boolean;\r
\r
    /**\r
     * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.\r
     * @param o Object to test.\r
     */\r
    isFrozen(o: any): boolean;\r
\r
    /**\r
     * Returns a value that indicates whether new properties can be added to an object.\r
     * @param o Object to test.\r
     */\r
    isExtensible(o: any): boolean;\r
\r
    /**\r
     * Returns the names of the enumerable string properties and methods of an object.\r
     * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.\r
     */\r
    keys(o: object): string[];\r
}\r
\r
/**\r
 * Provides functionality common to all JavaScript objects.\r
 */\r
declare var Object: ObjectConstructor;\r
\r
/**\r
 * Creates a new function.\r
 */\r
interface Function {\r
    /**\r
     * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.\r
     * @param thisArg The object to be used as the this object.\r
     * @param argArray A set of arguments to be passed to the function.\r
     */\r
    apply(this: Function, thisArg: any, argArray?: any): any;\r
\r
    /**\r
     * Calls a method of an object, substituting another object for the current object.\r
     * @param thisArg The object to be used as the current object.\r
     * @param argArray A list of arguments to be passed to the method.\r
     */\r
    call(this: Function, thisArg: any, ...argArray: any[]): any;\r
\r
    /**\r
     * For a given function, creates a bound function that has the same body as the original function.\r
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\r
     * @param thisArg An object to which the this keyword can refer inside the new function.\r
     * @param argArray A list of arguments to be passed to the new function.\r
     */\r
    bind(this: Function, thisArg: any, ...argArray: any[]): any;\r
\r
    /** Returns a string representation of a function. */\r
    toString(): string;\r
\r
    prototype: any;\r
    readonly length: number;\r
\r
    // Non-standard extensions\r
    arguments: any;\r
    caller: Function;\r
}\r
\r
interface FunctionConstructor {\r
    /**\r
     * Creates a new function.\r
     * @param args A list of arguments the function accepts.\r
     */\r
    new(...args: string[]): Function;\r
    (...args: string[]): Function;\r
    readonly prototype: Function;\r
}\r
\r
declare var Function: FunctionConstructor;\r
\r
/**\r
 * Extracts the type of the 'this' parameter of a function type, or 'unknown' if the function type has no 'this' parameter.\r
 */\r
type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;\r
\r
/**\r
 * Removes the 'this' parameter from a function type.\r
 */\r
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;\r
\r
interface CallableFunction extends Function {\r
    /**\r
     * Calls the function with the specified object as the this value and the elements of specified array as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args An array of argument values to be passed to the function.\r
     */\r
    apply<T, R>(this: (this: T) => R, thisArg: T): R;\r
    apply<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;\r
\r
    /**\r
     * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Argument values to be passed to the function.\r
     */\r
    call<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;\r
\r
    /**\r
     * For a given function, creates a bound function that has the same body as the original function.\r
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Arguments to bind to the parameters of the function.\r
     */\r
    bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;\r
    bind<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, thisArg: T, arg0: A0): (...args: A) => R;\r
    bind<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1): (...args: A) => R;\r
    bind<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R;\r
    bind<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R;\r
    bind<T, AX, R>(this: (this: T, ...args: AX[]) => R, thisArg: T, ...args: AX[]): (...args: AX[]) => R;\r
}\r
\r
interface NewableFunction extends Function {\r
    /**\r
     * Calls the function with the specified object as the this value and the elements of specified array as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args An array of argument values to be passed to the function.\r
     */\r
    apply<T>(this: new () => T, thisArg: T): void;\r
    apply<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, args: A): void;\r
\r
    /**\r
     * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Argument values to be passed to the function.\r
     */\r
    call<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A): void;\r
\r
    /**\r
     * For a given function, creates a bound function that has the same body as the original function.\r
     * The this object of the bound function is associated with the specified object, and has the specified initial parameters.\r
     * @param thisArg The object to be used as the this object.\r
     * @param args Arguments to bind to the parameters of the function.\r
     */\r
    bind<T>(this: T, thisArg: any): T;\r
    bind<A0, A extends any[], R>(this: new (arg0: A0, ...args: A) => R, thisArg: any, arg0: A0): new (...args: A) => R;\r
    bind<A0, A1, A extends any[], R>(this: new (arg0: A0, arg1: A1, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1): new (...args: A) => R;\r
    bind<A0, A1, A2, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2): new (...args: A) => R;\r
    bind<A0, A1, A2, A3, A extends any[], R>(this: new (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, thisArg: any, arg0: A0, arg1: A1, arg2: A2, arg3: A3): new (...args: A) => R;\r
    bind<AX, R>(this: new (...args: AX[]) => R, thisArg: any, ...args: AX[]): new (...args: AX[]) => R;\r
}\r
\r
interface IArguments {\r
    [index: number]: any;\r
    length: number;\r
    callee: Function;\r
}\r
\r
interface String {\r
    /** Returns a string representation of a string. */\r
    toString(): string;\r
\r
    /**\r
     * Returns the character at the specified index.\r
     * @param pos The zero-based index of the desired character.\r
     */\r
    charAt(pos: number): string;\r
\r
    /**\r
     * Returns the Unicode value of the character at the specified location.\r
     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\r
     */\r
    charCodeAt(index: number): number;\r
\r
    /**\r
     * Returns a string that contains the concatenation of two or more strings.\r
     * @param strings The strings to append to the end of the string.\r
     */\r
    concat(...strings: string[]): string;\r
\r
    /**\r
     * Returns the position of the first occurrence of a substring.\r
     * @param searchString The substring to search for in the string\r
     * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.\r
     */\r
    indexOf(searchString: string, position?: number): number;\r
\r
    /**\r
     * Returns the last occurrence of a substring in the string.\r
     * @param searchString The substring to search for.\r
     * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.\r
     */\r
    lastIndexOf(searchString: string, position?: number): number;\r
\r
    /**\r
     * Determines whether two strings are equivalent in the current locale.\r
     * @param that String to compare to target string\r
     */\r
    localeCompare(that: string): number;\r
\r
    /**\r
     * Matches a string with a regular expression, and returns an array containing the results of that search.\r
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.\r
     */\r
    match(regexp: string | RegExp): RegExpMatchArray | null;\r
\r
    /**\r
     * Replaces text in a string, using a regular expression or search string.\r
     * @param searchValue A string or regular expression to search for.\r
     * @param replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.\r
     */\r
    replace(searchValue: string | RegExp, replaceValue: string): string;\r
\r
    /**\r
     * Replaces text in a string, using a regular expression or search string.\r
     * @param searchValue A string to search for.\r
     * @param replacer A function that returns the replacement text.\r
     */\r
    replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;\r
\r
    /**\r
     * Finds the first substring match in a regular expression search.\r
     * @param regexp The regular expression pattern and applicable flags.\r
     */\r
    search(regexp: string | RegExp): number;\r
\r
    /**\r
     * Returns a section of a string.\r
     * @param start The index to the beginning of the specified portion of stringObj.\r
     * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\r
     * If this value is not specified, the substring continues to the end of stringObj.\r
     */\r
    slice(start?: number, end?: number): string;\r
\r
    /**\r
     * Split a string into substrings using the specified separator and return them as an array.\r
     * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\r
     * @param limit A value used to limit the number of elements returned in the array.\r
     */\r
    split(separator: string | RegExp, limit?: number): string[];\r
\r
    /**\r
     * Returns the substring at the specified location within a String object.\r
     * @param start The zero-based index number indicating the beginning of the substring.\r
     * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\r
     * If end is omitted, the characters from start through the end of the original string are returned.\r
     */\r
    substring(start: number, end?: number): string;\r
\r
    /** Converts all the alphabetic characters in a string to lowercase. */\r
    toLowerCase(): string;\r
\r
    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */\r
    toLocaleLowerCase(locales?: string | string[]): string;\r
\r
    /** Converts all the alphabetic characters in a string to uppercase. */\r
    toUpperCase(): string;\r
\r
    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */\r
    toLocaleUpperCase(locales?: string | string[]): string;\r
\r
    /** Removes the leading and trailing white space and line terminator characters from a string. */\r
    trim(): string;\r
\r
    /** Returns the length of a String object. */\r
    readonly length: number;\r
\r
    // IE extensions\r
    /**\r
     * Gets a substring beginning at the specified location and having the specified length.\r
     * @deprecated A legacy feature for browser compatibility\r
     * @param from The starting position of the desired substring. The index of the first character in the string is zero.\r
     * @param length The number of characters to include in the returned substring.\r
     */\r
    substr(from: number, length?: number): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): string;\r
\r
    readonly [index: number]: string;\r
}\r
\r
interface StringConstructor {\r
    new(value?: any): String;\r
    (value?: any): string;\r
    readonly prototype: String;\r
    fromCharCode(...codes: number[]): string;\r
}\r
\r
/**\r
 * Allows manipulation and formatting of text strings and determination and location of substrings within strings.\r
 */\r
declare var String: StringConstructor;\r
\r
interface Boolean {\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): boolean;\r
}\r
\r
interface BooleanConstructor {\r
    new(value?: any): Boolean;\r
    <T>(value?: T): boolean;\r
    readonly prototype: Boolean;\r
}\r
\r
declare var Boolean: BooleanConstructor;\r
\r
interface Number {\r
    /**\r
     * Returns a string representation of an object.\r
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.\r
     */\r
    toString(radix?: number): string;\r
\r
    /**\r
     * Returns a string representing a number in fixed-point notation.\r
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.\r
     */\r
    toFixed(fractionDigits?: number): string;\r
\r
    /**\r
     * Returns a string containing a number represented in exponential notation.\r
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.\r
     */\r
    toExponential(fractionDigits?: number): string;\r
\r
    /**\r
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.\r
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.\r
     */\r
    toPrecision(precision?: number): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): number;\r
}\r
\r
interface NumberConstructor {\r
    new(value?: any): Number;\r
    (value?: any): number;\r
    readonly prototype: Number;\r
\r
    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */\r
    readonly MAX_VALUE: number;\r
\r
    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */\r
    readonly MIN_VALUE: number;\r
\r
    /**\r
     * A value that is not a number.\r
     * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.\r
     */\r
    readonly NaN: number;\r
\r
    /**\r
     * A value that is less than the largest negative number that can be represented in JavaScript.\r
     * JavaScript displays NEGATIVE_INFINITY values as -infinity.\r
     */\r
    readonly NEGATIVE_INFINITY: number;\r
\r
    /**\r
     * A value greater than the largest number that can be represented in JavaScript.\r
     * JavaScript displays POSITIVE_INFINITY values as infinity.\r
     */\r
    readonly POSITIVE_INFINITY: number;\r
}\r
\r
/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */\r
declare var Number: NumberConstructor;\r
\r
interface TemplateStringsArray extends ReadonlyArray<string> {\r
    readonly raw: readonly string[];\r
}\r
\r
/**\r
 * The type of \`import.meta\`.\r
 *\r
 * If you need to declare that a given property exists on \`import.meta\`,\r
 * this type may be augmented via interface merging.\r
 */\r
interface ImportMeta {\r
}\r
\r
/**\r
 * The type for the optional second argument to \`import()\`.\r
 *\r
 * If your host environment supports additional options, this type may be\r
 * augmented via interface merging.\r
 */\r
interface ImportCallOptions {\r
    assert?: ImportAssertions;\r
}\r
\r
/**\r
 * The type for the \`assert\` property of the optional second argument to \`import()\`.\r
 */\r
interface ImportAssertions {\r
    [key: string]: string;\r
}\r
\r
interface Math {\r
    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */\r
    readonly E: number;\r
    /** The natural logarithm of 10. */\r
    readonly LN10: number;\r
    /** The natural logarithm of 2. */\r
    readonly LN2: number;\r
    /** The base-2 logarithm of e. */\r
    readonly LOG2E: number;\r
    /** The base-10 logarithm of e. */\r
    readonly LOG10E: number;\r
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */\r
    readonly PI: number;\r
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */\r
    readonly SQRT1_2: number;\r
    /** The square root of 2. */\r
    readonly SQRT2: number;\r
    /**\r
     * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\r
     * For example, the absolute value of -5 is the same as the absolute value of 5.\r
     * @param x A numeric expression for which the absolute value is needed.\r
     */\r
    abs(x: number): number;\r
    /**\r
     * Returns the arc cosine (or inverse cosine) of a number.\r
     * @param x A numeric expression.\r
     */\r
    acos(x: number): number;\r
    /**\r
     * Returns the arcsine of a number.\r
     * @param x A numeric expression.\r
     */\r
    asin(x: number): number;\r
    /**\r
     * Returns the arctangent of a number.\r
     * @param x A numeric expression for which the arctangent is needed.\r
     */\r
    atan(x: number): number;\r
    /**\r
     * Returns the angle (in radians) from the X axis to a point.\r
     * @param y A numeric expression representing the cartesian y-coordinate.\r
     * @param x A numeric expression representing the cartesian x-coordinate.\r
     */\r
    atan2(y: number, x: number): number;\r
    /**\r
     * Returns the smallest integer greater than or equal to its numeric argument.\r
     * @param x A numeric expression.\r
     */\r
    ceil(x: number): number;\r
    /**\r
     * Returns the cosine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    cos(x: number): number;\r
    /**\r
     * Returns e (the base of natural logarithms) raised to a power.\r
     * @param x A numeric expression representing the power of e.\r
     */\r
    exp(x: number): number;\r
    /**\r
     * Returns the greatest integer less than or equal to its numeric argument.\r
     * @param x A numeric expression.\r
     */\r
    floor(x: number): number;\r
    /**\r
     * Returns the natural logarithm (base e) of a number.\r
     * @param x A numeric expression.\r
     */\r
    log(x: number): number;\r
    /**\r
     * Returns the larger of a set of supplied numeric expressions.\r
     * @param values Numeric expressions to be evaluated.\r
     */\r
    max(...values: number[]): number;\r
    /**\r
     * Returns the smaller of a set of supplied numeric expressions.\r
     * @param values Numeric expressions to be evaluated.\r
     */\r
    min(...values: number[]): number;\r
    /**\r
     * Returns the value of a base expression taken to a specified power.\r
     * @param x The base value of the expression.\r
     * @param y The exponent value of the expression.\r
     */\r
    pow(x: number, y: number): number;\r
    /** Returns a pseudorandom number between 0 and 1. */\r
    random(): number;\r
    /**\r
     * Returns a supplied numeric expression rounded to the nearest integer.\r
     * @param x The value to be rounded to the nearest integer.\r
     */\r
    round(x: number): number;\r
    /**\r
     * Returns the sine of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    sin(x: number): number;\r
    /**\r
     * Returns the square root of a number.\r
     * @param x A numeric expression.\r
     */\r
    sqrt(x: number): number;\r
    /**\r
     * Returns the tangent of a number.\r
     * @param x A numeric expression that contains an angle measured in radians.\r
     */\r
    tan(x: number): number;\r
}\r
/** An intrinsic object that provides basic mathematics functionality and constants. */\r
declare var Math: Math;\r
\r
/** Enables basic storage and retrieval of dates and times. */\r
interface Date {\r
    /** Returns a string representation of a date. The format of the string depends on the locale. */\r
    toString(): string;\r
    /** Returns a date as a string value. */\r
    toDateString(): string;\r
    /** Returns a time as a string value. */\r
    toTimeString(): string;\r
    /** Returns a value as a string value appropriate to the host environment's current locale. */\r
    toLocaleString(): string;\r
    /** Returns a date as a string value appropriate to the host environment's current locale. */\r
    toLocaleDateString(): string;\r
    /** Returns a time as a string value appropriate to the host environment's current locale. */\r
    toLocaleTimeString(): string;\r
    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */\r
    valueOf(): number;\r
    /** Gets the time value in milliseconds. */\r
    getTime(): number;\r
    /** Gets the year, using local time. */\r
    getFullYear(): number;\r
    /** Gets the year using Universal Coordinated Time (UTC). */\r
    getUTCFullYear(): number;\r
    /** Gets the month, using local time. */\r
    getMonth(): number;\r
    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCMonth(): number;\r
    /** Gets the day-of-the-month, using local time. */\r
    getDate(): number;\r
    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */\r
    getUTCDate(): number;\r
    /** Gets the day of the week, using local time. */\r
    getDay(): number;\r
    /** Gets the day of the week using Universal Coordinated Time (UTC). */\r
    getUTCDay(): number;\r
    /** Gets the hours in a date, using local time. */\r
    getHours(): number;\r
    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */\r
    getUTCHours(): number;\r
    /** Gets the minutes of a Date object, using local time. */\r
    getMinutes(): number;\r
    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCMinutes(): number;\r
    /** Gets the seconds of a Date object, using local time. */\r
    getSeconds(): number;\r
    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCSeconds(): number;\r
    /** Gets the milliseconds of a Date, using local time. */\r
    getMilliseconds(): number;\r
    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */\r
    getUTCMilliseconds(): number;\r
    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */\r
    getTimezoneOffset(): number;\r
    /**\r
     * Sets the date and time value in the Date object.\r
     * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT.\r
     */\r
    setTime(time: number): number;\r
    /**\r
     * Sets the milliseconds value in the Date object using local time.\r
     * @param ms A numeric value equal to the millisecond value.\r
     */\r
    setMilliseconds(ms: number): number;\r
    /**\r
     * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).\r
     * @param ms A numeric value equal to the millisecond value.\r
     */\r
    setUTCMilliseconds(ms: number): number;\r
\r
    /**\r
     * Sets the seconds value in the Date object using local time.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setSeconds(sec: number, ms?: number): number;\r
    /**\r
     * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setUTCSeconds(sec: number, ms?: number): number;\r
    /**\r
     * Sets the minutes value in the Date object using local time.\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setMinutes(min: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setUTCMinutes(min: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the hour value in the Date object using local time.\r
     * @param hours A numeric value equal to the hours value.\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setHours(hours: number, min?: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the hours value in the Date object using Universal Coordinated Time (UTC).\r
     * @param hours A numeric value equal to the hours value.\r
     * @param min A numeric value equal to the minutes value.\r
     * @param sec A numeric value equal to the seconds value.\r
     * @param ms A numeric value equal to the milliseconds value.\r
     */\r
    setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;\r
    /**\r
     * Sets the numeric day-of-the-month value of the Date object using local time.\r
     * @param date A numeric value equal to the day of the month.\r
     */\r
    setDate(date: number): number;\r
    /**\r
     * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).\r
     * @param date A numeric value equal to the day of the month.\r
     */\r
    setUTCDate(date: number): number;\r
    /**\r
     * Sets the month value in the Date object using local time.\r
     * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.\r
     * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.\r
     */\r
    setMonth(month: number, date?: number): number;\r
    /**\r
     * Sets the month value in the Date object using Universal Coordinated Time (UTC).\r
     * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.\r
     * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.\r
     */\r
    setUTCMonth(month: number, date?: number): number;\r
    /**\r
     * Sets the year of the Date object using local time.\r
     * @param year A numeric value for the year.\r
     * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.\r
     * @param date A numeric value equal for the day of the month.\r
     */\r
    setFullYear(year: number, month?: number, date?: number): number;\r
    /**\r
     * Sets the year value in the Date object using Universal Coordinated Time (UTC).\r
     * @param year A numeric value equal to the year.\r
     * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.\r
     * @param date A numeric value equal to the day of the month.\r
     */\r
    setUTCFullYear(year: number, month?: number, date?: number): number;\r
    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */\r
    toUTCString(): string;\r
    /** Returns a date as a string value in ISO format. */\r
    toISOString(): string;\r
    /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */\r
    toJSON(key?: any): string;\r
}\r
\r
interface DateConstructor {\r
    new(): Date;\r
    new(value: number | string): Date;\r
    /**\r
     * Creates a new Date.\r
     * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.\r
     * @param monthIndex The month as a number between 0 and 11 (January to December).\r
     * @param date The date as a number between 1 and 31.\r
     * @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.\r
     * @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.\r
     * @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.\r
     * @param ms A number from 0 to 999 that specifies the milliseconds.\r
     */\r
    new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;\r
    (): string;\r
    readonly prototype: Date;\r
    /**\r
     * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.\r
     * @param s A date string\r
     */\r
    parse(s: string): number;\r
    /**\r
     * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date.\r
     * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.\r
     * @param monthIndex The month as a number between 0 and 11 (January to December).\r
     * @param date The date as a number between 1 and 31.\r
     * @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.\r
     * @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.\r
     * @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.\r
     * @param ms A number from 0 to 999 that specifies the milliseconds.\r
     */\r
    UTC(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;\r
    /** Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC). */\r
    now(): number;\r
}\r
\r
declare var Date: DateConstructor;\r
\r
interface RegExpMatchArray extends Array<string> {\r
    /**\r
     * The index of the search at which the result was found.\r
     */\r
    index?: number;\r
    /**\r
     * A copy of the search string.\r
     */\r
    input?: string;\r
    /**\r
     * The first match. This will always be present because \`null\` will be returned if there are no matches.\r
     */\r
    0: string;\r
}\r
\r
interface RegExpExecArray extends Array<string> {\r
    /**\r
     * The index of the search at which the result was found.\r
     */\r
    index: number;\r
    /**\r
     * A copy of the search string.\r
     */\r
    input: string;\r
    /**\r
     * The first match. This will always be present because \`null\` will be returned if there are no matches.\r
     */\r
    0: string;\r
}\r
\r
interface RegExp {\r
    /**\r
     * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.\r
     * @param string The String object or string literal on which to perform the search.\r
     */\r
    exec(string: string): RegExpExecArray | null;\r
\r
    /**\r
     * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.\r
     * @param string String on which to perform the search.\r
     */\r
    test(string: string): boolean;\r
\r
    /** Returns a copy of the text of the regular expression pattern. Read-only. The regExp argument is a Regular expression object. It can be a variable name or a literal. */\r
    readonly source: string;\r
\r
    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */\r
    readonly global: boolean;\r
\r
    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */\r
    readonly ignoreCase: boolean;\r
\r
    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */\r
    readonly multiline: boolean;\r
\r
    lastIndex: number;\r
\r
    // Non-standard extensions\r
    /** @deprecated A legacy feature for browser compatibility */\r
    compile(pattern: string, flags?: string): this;\r
}\r
\r
interface RegExpConstructor {\r
    new(pattern: RegExp | string): RegExp;\r
    new(pattern: string, flags?: string): RegExp;\r
    (pattern: RegExp | string): RegExp;\r
    (pattern: string, flags?: string): RegExp;\r
    readonly prototype: RegExp;\r
\r
    // Non-standard extensions\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $1: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $2: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $3: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $4: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $5: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $6: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $7: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $8: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $9: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    input: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    $_: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    lastMatch: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$&": string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    lastParen: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$+": string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    leftContext: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$\`": string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    rightContext: string;\r
    /** @deprecated A legacy feature for browser compatibility */\r
    "$'": string;\r
}\r
\r
declare var RegExp: RegExpConstructor;\r
\r
interface Error {\r
    name: string;\r
    message: string;\r
    stack?: string;\r
}\r
\r
interface ErrorConstructor {\r
    new(message?: string): Error;\r
    (message?: string): Error;\r
    readonly prototype: Error;\r
}\r
\r
declare var Error: ErrorConstructor;\r
\r
interface EvalError extends Error {\r
}\r
\r
interface EvalErrorConstructor extends ErrorConstructor {\r
    new(message?: string): EvalError;\r
    (message?: string): EvalError;\r
    readonly prototype: EvalError;\r
}\r
\r
declare var EvalError: EvalErrorConstructor;\r
\r
interface RangeError extends Error {\r
}\r
\r
interface RangeErrorConstructor extends ErrorConstructor {\r
    new(message?: string): RangeError;\r
    (message?: string): RangeError;\r
    readonly prototype: RangeError;\r
}\r
\r
declare var RangeError: RangeErrorConstructor;\r
\r
interface ReferenceError extends Error {\r
}\r
\r
interface ReferenceErrorConstructor extends ErrorConstructor {\r
    new(message?: string): ReferenceError;\r
    (message?: string): ReferenceError;\r
    readonly prototype: ReferenceError;\r
}\r
\r
declare var ReferenceError: ReferenceErrorConstructor;\r
\r
interface SyntaxError extends Error {\r
}\r
\r
interface SyntaxErrorConstructor extends ErrorConstructor {\r
    new(message?: string): SyntaxError;\r
    (message?: string): SyntaxError;\r
    readonly prototype: SyntaxError;\r
}\r
\r
declare var SyntaxError: SyntaxErrorConstructor;\r
\r
interface TypeError extends Error {\r
}\r
\r
interface TypeErrorConstructor extends ErrorConstructor {\r
    new(message?: string): TypeError;\r
    (message?: string): TypeError;\r
    readonly prototype: TypeError;\r
}\r
\r
declare var TypeError: TypeErrorConstructor;\r
\r
interface URIError extends Error {\r
}\r
\r
interface URIErrorConstructor extends ErrorConstructor {\r
    new(message?: string): URIError;\r
    (message?: string): URIError;\r
    readonly prototype: URIError;\r
}\r
\r
declare var URIError: URIErrorConstructor;\r
\r
interface JSON {\r
    /**\r
     * Converts a JavaScript Object Notation (JSON) string into an object.\r
     * @param text A valid JSON string.\r
     * @param reviver A function that transforms the results. This function is called for each member of the object.\r
     * If a member contains nested objects, the nested objects are transformed before the parent object is.\r
     */\r
    parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;\r
    /**\r
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\r
     * @param value A JavaScript value, usually an object or array, to be converted.\r
     * @param replacer A function that transforms the results.\r
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.\r
     */\r
    stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;\r
    /**\r
     * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.\r
     * @param value A JavaScript value, usually an object or array, to be converted.\r
     * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.\r
     * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.\r
     */\r
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;\r
}\r
\r
/**\r
 * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.\r
 */\r
declare var JSON: JSON;\r
\r
\r
/////////////////////////////\r
/// ECMAScript Array API (specially handled by compiler)\r
/////////////////////////////\r
\r
interface ReadonlyArray<T> {\r
    /**\r
     * Gets the length of the array. This is a number one higher than the highest element defined in an array.\r
     */\r
    readonly length: number;\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
    /**\r
     * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.\r
     */\r
    toLocaleString(): string;\r
    /**\r
     * Combines two or more arrays.\r
     * @param items Additional items to add to the end of array1.\r
     */\r
    concat(...items: ConcatArray<T>[]): T[];\r
    /**\r
     * Combines two or more arrays.\r
     * @param items Additional items to add to the end of array1.\r
     */\r
    concat(...items: (T | ConcatArray<T>)[]): T[];\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): T[];\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\r
     */\r
    indexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Returns the index of the last occurrence of a specified value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.\r
     */\r
    lastIndexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;\r
\r
    readonly [n: number]: T;\r
}\r
\r
interface ConcatArray<T> {\r
    readonly length: number;\r
    readonly [n: number]: T;\r
    join(separator?: string): string;\r
    slice(start?: number, end?: number): T[];\r
}\r
\r
interface Array<T> {\r
    /**\r
     * Gets or sets the length of the array. This is a number one higher than the highest index in the array.\r
     */\r
    length: number;\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
    /**\r
     * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.\r
     */\r
    toLocaleString(): string;\r
    /**\r
     * Removes the last element from an array and returns it.\r
     * If the array is empty, undefined is returned and the array is not modified.\r
     */\r
    pop(): T | undefined;\r
    /**\r
     * Appends new elements to the end of an array, and returns the new length of the array.\r
     * @param items New elements to add to the array.\r
     */\r
    push(...items: T[]): number;\r
    /**\r
     * Combines two or more arrays.\r
     * This method returns a new array without modifying any existing arrays.\r
     * @param items Additional arrays and/or items to add to the end of the array.\r
     */\r
    concat(...items: ConcatArray<T>[]): T[];\r
    /**\r
     * Combines two or more arrays.\r
     * This method returns a new array without modifying any existing arrays.\r
     * @param items Additional arrays and/or items to add to the end of the array.\r
     */\r
    concat(...items: (T | ConcatArray<T>)[]): T[];\r
    /**\r
     * Adds all the elements of an array into a string, separated by the specified separator string.\r
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
    /**\r
     * Reverses the elements in an array in place.\r
     * This method mutates the array and returns a reference to the same array.\r
     */\r
    reverse(): T[];\r
    /**\r
     * Removes the first element from an array and returns it.\r
     * If the array is empty, undefined is returned and the array is not modified.\r
     */\r
    shift(): T | undefined;\r
    /**\r
     * Returns a copy of a section of an array.\r
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.\r
     * For example, -2 refers to the second to last element of the array.\r
     * @param start The beginning index of the specified portion of the array.\r
     * If start is undefined, then the slice begins at index 0.\r
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     * If end is undefined, then the slice extends to the end of the array.\r
     */\r
    slice(start?: number, end?: number): T[];\r
    /**\r
     * Sorts an array in place.\r
     * This method mutates the array and returns a reference to the same array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: T, b: T) => number): this;\r
    /**\r
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\r
     * @param start The zero-based location in the array from which to start removing elements.\r
     * @param deleteCount The number of elements to remove.\r
     * @returns An array containing the elements that were deleted.\r
     */\r
    splice(start: number, deleteCount?: number): T[];\r
    /**\r
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\r
     * @param start The zero-based location in the array from which to start removing elements.\r
     * @param deleteCount The number of elements to remove.\r
     * @param items Elements to insert into the array in place of the deleted elements.\r
     * @returns An array containing the elements that were deleted.\r
     */\r
    splice(start: number, deleteCount: number, ...items: T[]): T[];\r
    /**\r
     * Inserts new elements at the start of an array, and returns the new length of the array.\r
     * @param items Elements to insert at the start of the array.\r
     */\r
    unshift(...items: T[]): number;\r
    /**\r
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\r
     */\r
    indexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.\r
     */\r
    lastIndexOf(searchElement: T, fromIndex?: number): number;\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;\r
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;\r
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;\r
\r
    [n: number]: T;\r
}\r
\r
interface ArrayConstructor {\r
    new(arrayLength?: number): any[];\r
    new <T>(arrayLength: number): T[];\r
    new <T>(...items: T[]): T[];\r
    (arrayLength?: number): any[];\r
    <T>(arrayLength: number): T[];\r
    <T>(...items: T[]): T[];\r
    isArray(arg: any): arg is any[];\r
    readonly prototype: any[];\r
}\r
\r
declare var Array: ArrayConstructor;\r
\r
interface TypedPropertyDescriptor<T> {\r
    enumerable?: boolean;\r
    configurable?: boolean;\r
    writable?: boolean;\r
    value?: T;\r
    get?: () => T;\r
    set?: (value: T) => void;\r
}\r
\r
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;\r
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;\r
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;\r
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;\r
\r
declare type PromiseConstructorLike = new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>;\r
\r
interface PromiseLike<T> {\r
    /**\r
     * Attaches callbacks for the resolution and/or rejection of the Promise.\r
     * @param onfulfilled The callback to execute when the Promise is resolved.\r
     * @param onrejected The callback to execute when the Promise is rejected.\r
     * @returns A Promise for the completion of which ever callback is executed.\r
     */\r
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;\r
}\r
\r
/**\r
 * Represents the completion of an asynchronous operation\r
 */\r
interface Promise<T> {\r
    /**\r
     * Attaches callbacks for the resolution and/or rejection of the Promise.\r
     * @param onfulfilled The callback to execute when the Promise is resolved.\r
     * @param onrejected The callback to execute when the Promise is rejected.\r
     * @returns A Promise for the completion of which ever callback is executed.\r
     */\r
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;\r
\r
    /**\r
     * Attaches a callback for only the rejection of the Promise.\r
     * @param onrejected The callback to execute when the Promise is rejected.\r
     * @returns A Promise for the completion of the callback.\r
     */\r
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;\r
}\r
\r
/**\r
 * Recursively unwraps the "awaited type" of a type. Non-promise "thenables" should resolve to \`never\`. This emulates the behavior of \`await\`.\r
 */\r
type Awaited<T> =\r
    T extends null | undefined ? T : // special case for \`null | undefined\` when not in \`--strictNullChecks\` mode\r
        T extends object & { then(onfulfilled: infer F, ...args: infer _): any } ? // \`await\` only unwraps object types with a callable \`then\`. Non-object types are not unwrapped\r
            F extends ((value: infer V, ...args: infer _) => any) ? // if the argument to \`then\` is callable, extracts the first argument\r
                Awaited<V> : // recursively unwrap the value\r
                never : // the argument to \`then\` was not callable\r
        T; // non-object or non-thenable\r
\r
interface ArrayLike<T> {\r
    readonly length: number;\r
    readonly [n: number]: T;\r
}\r
\r
/**\r
 * Make all properties in T optional\r
 */\r
type Partial<T> = {\r
    [P in keyof T]?: T[P];\r
};\r
\r
/**\r
 * Make all properties in T required\r
 */\r
type Required<T> = {\r
    [P in keyof T]-?: T[P];\r
};\r
\r
/**\r
 * Make all properties in T readonly\r
 */\r
type Readonly<T> = {\r
    readonly [P in keyof T]: T[P];\r
};\r
\r
/**\r
 * From T, pick a set of properties whose keys are in the union K\r
 */\r
type Pick<T, K extends keyof T> = {\r
    [P in K]: T[P];\r
};\r
\r
/**\r
 * Construct a type with a set of properties K of type T\r
 */\r
type Record<K extends keyof any, T> = {\r
    [P in K]: T;\r
};\r
\r
/**\r
 * Exclude from T those types that are assignable to U\r
 */\r
type Exclude<T, U> = T extends U ? never : T;\r
\r
/**\r
 * Extract from T those types that are assignable to U\r
 */\r
type Extract<T, U> = T extends U ? T : never;\r
\r
/**\r
 * Construct a type with the properties of T except for those in type K.\r
 */\r
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\r
\r
/**\r
 * Exclude null and undefined from T\r
 */\r
type NonNullable<T> = T & {};\r
\r
/**\r
 * Obtain the parameters of a function type in a tuple\r
 */\r
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;\r
\r
/**\r
 * Obtain the parameters of a constructor function type in a tuple\r
 */\r
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;\r
\r
/**\r
 * Obtain the return type of a function type\r
 */\r
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;\r
\r
/**\r
 * Obtain the return type of a constructor function type\r
 */\r
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;\r
\r
/**\r
 * Convert string literal type to uppercase\r
 */\r
type Uppercase<S extends string> = intrinsic;\r
\r
/**\r
 * Convert string literal type to lowercase\r
 */\r
type Lowercase<S extends string> = intrinsic;\r
\r
/**\r
 * Convert first character of string literal type to uppercase\r
 */\r
type Capitalize<S extends string> = intrinsic;\r
\r
/**\r
 * Convert first character of string literal type to lowercase\r
 */\r
type Uncapitalize<S extends string> = intrinsic;\r
\r
/**\r
 * Marker for contextual 'this' type\r
 */\r
interface ThisType<T> { }\r
\r
/**\r
 * Represents a raw buffer of binary data, which is used to store data for the\r
 * different typed arrays. ArrayBuffers cannot be read from or written to directly,\r
 * but can be passed to a typed array or DataView Object to interpret the raw\r
 * buffer as needed.\r
 */\r
interface ArrayBuffer {\r
    /**\r
     * Read-only. The length of the ArrayBuffer (in bytes).\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * Returns a section of an ArrayBuffer.\r
     */\r
    slice(begin: number, end?: number): ArrayBuffer;\r
}\r
\r
/**\r
 * Allowed ArrayBuffer types for the buffer of an ArrayBufferView and related Typed Arrays.\r
 */\r
interface ArrayBufferTypes {\r
    ArrayBuffer: ArrayBuffer;\r
}\r
type ArrayBufferLike = ArrayBufferTypes[keyof ArrayBufferTypes];\r
\r
interface ArrayBufferConstructor {\r
    readonly prototype: ArrayBuffer;\r
    new(byteLength: number): ArrayBuffer;\r
    isView(arg: any): arg is ArrayBufferView;\r
}\r
declare var ArrayBuffer: ArrayBufferConstructor;\r
\r
interface ArrayBufferView {\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    byteOffset: number;\r
}\r
\r
interface DataView {\r
    readonly buffer: ArrayBuffer;\r
    readonly byteLength: number;\r
    readonly byteOffset: number;\r
    /**\r
     * Gets the Float32 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getFloat32(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Float64 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getFloat64(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Int8 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     */\r
    getInt8(byteOffset: number): number;\r
\r
    /**\r
     * Gets the Int16 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getInt16(byteOffset: number, littleEndian?: boolean): number;\r
    /**\r
     * Gets the Int32 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getInt32(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Uint8 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     */\r
    getUint8(byteOffset: number): number;\r
\r
    /**\r
     * Gets the Uint16 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getUint16(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Gets the Uint32 value at the specified byte offset from the start of the view. There is\r
     * no alignment constraint; multi-byte values may be fetched from any offset.\r
     * @param byteOffset The place in the buffer at which the value should be retrieved.\r
     * @param littleEndian If false or undefined, a big-endian value should be read.\r
     */\r
    getUint32(byteOffset: number, littleEndian?: boolean): number;\r
\r
    /**\r
     * Stores an Float32 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setFloat32(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Float64 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setFloat64(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Int8 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     */\r
    setInt8(byteOffset: number, value: number): void;\r
\r
    /**\r
     * Stores an Int16 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setInt16(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Int32 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setInt32(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Uint8 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     */\r
    setUint8(byteOffset: number, value: number): void;\r
\r
    /**\r
     * Stores an Uint16 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setUint16(byteOffset: number, value: number, littleEndian?: boolean): void;\r
\r
    /**\r
     * Stores an Uint32 value at the specified byte offset from the start of the view.\r
     * @param byteOffset The place in the buffer at which the value should be set.\r
     * @param value The value to set.\r
     * @param littleEndian If false or undefined, a big-endian value should be written.\r
     */\r
    setUint32(byteOffset: number, value: number, littleEndian?: boolean): void;\r
}\r
\r
interface DataViewConstructor {\r
    readonly prototype: DataView;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, byteLength?: number): DataView;\r
}\r
declare var DataView: DataViewConstructor;\r
\r
/**\r
 * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested\r
 * number of bytes could not be allocated an exception is raised.\r
 */\r
interface Int8Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Int8Array) => any, thisArg?: any): Int8Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Int8Array) => number, thisArg?: any): Int8Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Int8Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Int8Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Int8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Int8Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Int8Array;\r
\r
    [index: number]: number;\r
}\r
interface Int8ArrayConstructor {\r
    readonly prototype: Int8Array;\r
    new(length: number): Int8Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Int8Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int8Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Int8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Int8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int8Array;\r
\r
\r
}\r
declare var Int8Array: Int8ArrayConstructor;\r
\r
/**\r
 * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint8Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint8Array) => any, thisArg?: any): Uint8Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Uint8Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint8Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint8Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint8Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint8Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint8Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint8ArrayConstructor {\r
    readonly prototype: Uint8Array;\r
    new(length: number): Uint8Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint8Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint8Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8Array;\r
\r
}\r
declare var Uint8Array: Uint8ArrayConstructor;\r
\r
/**\r
 * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0.\r
 * If the requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint8ClampedArray {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint8ClampedArray) => any, thisArg?: any): Uint8ClampedArray;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Uint8ClampedArray) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => number, thisArg?: any): Uint8ClampedArray;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint8ClampedArray;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint8ClampedArray;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint8ClampedArray) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint8ClampedArray;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint8ClampedArray;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint8ClampedArrayConstructor {\r
    readonly prototype: Uint8ClampedArray;\r
    new(length: number): Uint8ClampedArray;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint8ClampedArray;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint8ClampedArray;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint8ClampedArray;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint8ClampedArray;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint8ClampedArray;\r
}\r
declare var Uint8ClampedArray: Uint8ClampedArrayConstructor;\r
\r
/**\r
 * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Int16Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Int16Array) => any, thisArg?: any): Int16Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Int16Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Int16Array) => void, thisArg?: any): void;\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Int16Array) => number, thisArg?: any): Int16Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Int16Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Int16Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Int16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Int16Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Int16Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Int16ArrayConstructor {\r
    readonly prototype: Int16Array;\r
    new(length: number): Int16Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Int16Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int16Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Int16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Int16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int16Array;\r
\r
\r
}\r
declare var Int16Array: Int16ArrayConstructor;\r
\r
/**\r
 * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint16Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint16Array) => any, thisArg?: any): Uint16Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Uint16Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint16Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint16Array) => number, thisArg?: any): Uint16Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint16Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint16Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint16Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint16Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint16Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint16ArrayConstructor {\r
    readonly prototype: Uint16Array;\r
    new(length: number): Uint16Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint16Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint16Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint16Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint16Array;\r
\r
\r
}\r
declare var Uint16Array: Uint16ArrayConstructor;\r
/**\r
 * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Int32Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Int32Array) => any, thisArg?: any): Int32Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Int32Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Int32Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Int32Array) => number, thisArg?: any): Int32Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Int32Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Int32Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Int32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Int32Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Int32Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Int32ArrayConstructor {\r
    readonly prototype: Int32Array;\r
    new(length: number): Int32Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Int32Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Int32Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Int32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Int32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Int32Array;\r
\r
}\r
declare var Int32Array: Int32ArrayConstructor;\r
\r
/**\r
 * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the\r
 * requested number of bytes could not be allocated an exception is raised.\r
 */\r
interface Uint32Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Uint32Array) => any, thisArg?: any): Uint32Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Uint32Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Uint32Array) => void, thisArg?: any): void;\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Uint32Array) => number, thisArg?: any): Uint32Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Uint32Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Uint32Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Uint32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Uint32Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Uint32Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Uint32ArrayConstructor {\r
    readonly prototype: Uint32Array;\r
    new(length: number): Uint32Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Uint32Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Uint32Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Uint32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Uint32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Uint32Array;\r
\r
}\r
declare var Uint32Array: Uint32ArrayConstructor;\r
\r
/**\r
 * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number\r
 * of bytes could not be allocated an exception is raised.\r
 */\r
interface Float32Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Float32Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Float32Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Float32Array;\r
\r
    /**\r
     * Converts a number to a string by using the current locale.\r
     */\r
    toLocaleString(): string;\r
\r
    /**\r
     * Returns a string representation of an array.\r
     */\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Float32Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Float32ArrayConstructor {\r
    readonly prototype: Float32Array;\r
    new(length: number): Float32Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Float32Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float32Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Float32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Float32Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array;\r
\r
\r
}\r
declare var Float32Array: Float32ArrayConstructor;\r
\r
/**\r
 * A typed array of 64-bit float values. The contents are initialized to 0. If the requested\r
 * number of bytes could not be allocated an exception is raised.\r
 */\r
interface Float64Array {\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * The ArrayBuffer instance referenced by the array.\r
     */\r
    readonly buffer: ArrayBufferLike;\r
\r
    /**\r
     * The length in bytes of the array.\r
     */\r
    readonly byteLength: number;\r
\r
    /**\r
     * The offset in bytes of the array.\r
     */\r
    readonly byteOffset: number;\r
\r
    /**\r
     * Returns the this object after copying a section of the array identified by start and end\r
     * to the same array starting at position target\r
     * @param target If target is negative, it is treated as length+target where length is the\r
     * length of the array.\r
     * @param start If start is negative, it is treated as length+start. If end is negative, it\r
     * is treated as length+end.\r
     * @param end If not specified, length of the this object is used as its default value.\r
     */\r
    copyWithin(target: number, start: number, end?: number): this;\r
\r
    /**\r
     * Determines whether all the members of an array satisfy the specified test.\r
     * @param predicate A function that accepts up to three arguments. The every method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value false, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    every(predicate: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Changes all array elements from \`start\` to \`end\` index to a static \`value\` and returns the modified array\r
     * @param value value to fill array section with\r
     * @param start index to start filling the array at. If start is negative, it is treated as\r
     * length+start where length is the length of the array.\r
     * @param end index to stop filling the array at. If end is negative, it is treated as\r
     * length+end.\r
     */\r
    fill(value: number, start?: number, end?: number): this;\r
\r
    /**\r
     * Returns the elements of an array that meet the condition specified in a callback function.\r
     * @param predicate A function that accepts up to three arguments. The filter method calls\r
     * the predicate function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    filter(predicate: (value: number, index: number, array: Float64Array) => any, thisArg?: any): Float64Array;\r
\r
    /**\r
     * Returns the value of the first element in the array where predicate is true, and undefined\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found, find\r
     * immediately returns that element value. Otherwise, find returns undefined.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    find(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number | undefined;\r
\r
    /**\r
     * Returns the index of the first element in the array where predicate is true, and -1\r
     * otherwise.\r
     * @param predicate find calls predicate once for each element of the array, in ascending\r
     * order, until it finds one where predicate returns true. If such an element is found,\r
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.\r
     * @param thisArg If provided, it will be used as the this value for each invocation of\r
     * predicate. If it is not provided, undefined is used instead.\r
     */\r
    findIndex(predicate: (value: number, index: number, obj: Float64Array) => boolean, thisArg?: any): number;\r
\r
    /**\r
     * Performs the specified action for each element in an array.\r
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    forEach(callbackfn: (value: number, index: number, array: Float64Array) => void, thisArg?: any): void;\r
\r
    /**\r
     * Returns the index of the first occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     *  search starts at index 0.\r
     */\r
    indexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * Adds all the elements of an array separated by the specified separator string.\r
     * @param separator A string used to separate one element of an array from the next in the\r
     * resulting String. If omitted, the array elements are separated with a comma.\r
     */\r
    join(separator?: string): string;\r
\r
    /**\r
     * Returns the index of the last occurrence of a value in an array.\r
     * @param searchElement The value to locate in the array.\r
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the\r
     * search starts at index 0.\r
     */\r
    lastIndexOf(searchElement: number, fromIndex?: number): number;\r
\r
    /**\r
     * The length of the array.\r
     */\r
    readonly length: number;\r
\r
    /**\r
     * Calls a defined callback function on each element of an array, and returns an array that\r
     * contains the results.\r
     * @param callbackfn A function that accepts up to three arguments. The map method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    map(callbackfn: (value: number, index: number, array: Float64Array) => number, thisArg?: any): Float64Array;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;\r
    reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array. The return value of\r
     * the callback function is the accumulated result, and is provided as an argument in the next\r
     * call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the\r
     * callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an\r
     * argument instead of an array value.\r
     */\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number): number;\r
    reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue: number): number;\r
\r
    /**\r
     * Calls the specified callback function for all the elements in an array, in descending order.\r
     * The return value of the callback function is the accumulated result, and is provided as an\r
     * argument in the next call to the callback function.\r
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls\r
     * the callbackfn function one time for each element in the array.\r
     * @param initialValue If initialValue is specified, it is used as the initial value to start\r
     * the accumulation. The first call to the callbackfn function provides this value as an argument\r
     * instead of an array value.\r
     */\r
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;\r
\r
    /**\r
     * Reverses the elements in an Array.\r
     */\r
    reverse(): Float64Array;\r
\r
    /**\r
     * Sets a value or an array of values.\r
     * @param array A typed or untyped array of values to set.\r
     * @param offset The index in the current array at which the values are to be written.\r
     */\r
    set(array: ArrayLike<number>, offset?: number): void;\r
\r
    /**\r
     * Returns a section of an array.\r
     * @param start The beginning of the specified portion of the array.\r
     * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.\r
     */\r
    slice(start?: number, end?: number): Float64Array;\r
\r
    /**\r
     * Determines whether the specified callback function returns true for any element of an array.\r
     * @param predicate A function that accepts up to three arguments. The some method calls\r
     * the predicate function for each element in the array until the predicate returns a value\r
     * which is coercible to the Boolean value true, or until the end of the array.\r
     * @param thisArg An object to which the this keyword can refer in the predicate function.\r
     * If thisArg is omitted, undefined is used as the this value.\r
     */\r
    some(predicate: (value: number, index: number, array: Float64Array) => unknown, thisArg?: any): boolean;\r
\r
    /**\r
     * Sorts an array.\r
     * @param compareFn Function used to determine the order of the elements. It is expected to return\r
     * a negative value if first argument is less than second argument, zero if they're equal and a positive\r
     * value otherwise. If omitted, the elements are sorted in ascending order.\r
     * \`\`\`ts\r
     * [11,2,22,1].sort((a, b) => a - b)\r
     * \`\`\`\r
     */\r
    sort(compareFn?: (a: number, b: number) => number): this;\r
\r
    /**\r
     * at begin, inclusive, up to end, exclusive.\r
     * @param begin The index of the beginning of the array.\r
     * @param end The index of the end of the array.\r
     */\r
    subarray(begin?: number, end?: number): Float64Array;\r
\r
    toString(): string;\r
\r
    /** Returns the primitive value of the specified object. */\r
    valueOf(): Float64Array;\r
\r
    [index: number]: number;\r
}\r
\r
interface Float64ArrayConstructor {\r
    readonly prototype: Float64Array;\r
    new(length: number): Float64Array;\r
    new(array: ArrayLike<number> | ArrayBufferLike): Float64Array;\r
    new(buffer: ArrayBufferLike, byteOffset?: number, length?: number): Float64Array;\r
\r
    /**\r
     * The size in bytes of each element in the array.\r
     */\r
    readonly BYTES_PER_ELEMENT: number;\r
\r
    /**\r
     * Returns a new array from a set of elements.\r
     * @param items A set of elements to include in the new array object.\r
     */\r
    of(...items: number[]): Float64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     */\r
    from(arrayLike: ArrayLike<number>): Float64Array;\r
\r
    /**\r
     * Creates an array from an array-like or iterable object.\r
     * @param arrayLike An array-like or iterable object to convert to an array.\r
     * @param mapfn A mapping function to call on every element of the array.\r
     * @param thisArg Value of 'this' used to invoke the mapfn.\r
     */\r
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float64Array;\r
\r
}\r
declare var Float64Array: Float64ArrayConstructor;\r
\r
/////////////////////////////\r
/// ECMAScript Internationalization API\r
/////////////////////////////\r
\r
declare namespace Intl {\r
    interface CollatorOptions {\r
        usage?: string | undefined;\r
        localeMatcher?: string | undefined;\r
        numeric?: boolean | undefined;\r
        caseFirst?: string | undefined;\r
        sensitivity?: string | undefined;\r
        ignorePunctuation?: boolean | undefined;\r
    }\r
\r
    interface ResolvedCollatorOptions {\r
        locale: string;\r
        usage: string;\r
        sensitivity: string;\r
        ignorePunctuation: boolean;\r
        collation: string;\r
        caseFirst: string;\r
        numeric: boolean;\r
    }\r
\r
    interface Collator {\r
        compare(x: string, y: string): number;\r
        resolvedOptions(): ResolvedCollatorOptions;\r
    }\r
    var Collator: {\r
        new(locales?: string | string[], options?: CollatorOptions): Collator;\r
        (locales?: string | string[], options?: CollatorOptions): Collator;\r
        supportedLocalesOf(locales: string | string[], options?: CollatorOptions): string[];\r
    };\r
\r
    interface NumberFormatOptions {\r
        localeMatcher?: string | undefined;\r
        style?: string | undefined;\r
        currency?: string | undefined;\r
        currencySign?: string | undefined;\r
        useGrouping?: boolean | undefined;\r
        minimumIntegerDigits?: number | undefined;\r
        minimumFractionDigits?: number | undefined;\r
        maximumFractionDigits?: number | undefined;\r
        minimumSignificantDigits?: number | undefined;\r
        maximumSignificantDigits?: number | undefined;\r
    }\r
\r
    interface ResolvedNumberFormatOptions {\r
        locale: string;\r
        numberingSystem: string;\r
        style: string;\r
        currency?: string;\r
        minimumIntegerDigits: number;\r
        minimumFractionDigits: number;\r
        maximumFractionDigits: number;\r
        minimumSignificantDigits?: number;\r
        maximumSignificantDigits?: number;\r
        useGrouping: boolean;\r
    }\r
\r
    interface NumberFormat {\r
        format(value: number): string;\r
        resolvedOptions(): ResolvedNumberFormatOptions;\r
    }\r
    var NumberFormat: {\r
        new(locales?: string | string[], options?: NumberFormatOptions): NumberFormat;\r
        (locales?: string | string[], options?: NumberFormatOptions): NumberFormat;\r
        supportedLocalesOf(locales: string | string[], options?: NumberFormatOptions): string[];\r
        readonly prototype: NumberFormat;\r
    };\r
\r
    interface DateTimeFormatOptions {\r
        localeMatcher?: "best fit" | "lookup" | undefined;\r
        weekday?: "long" | "short" | "narrow" | undefined;\r
        era?: "long" | "short" | "narrow" | undefined;\r
        year?: "numeric" | "2-digit" | undefined;\r
        month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;\r
        day?: "numeric" | "2-digit" | undefined;\r
        hour?: "numeric" | "2-digit" | undefined;\r
        minute?: "numeric" | "2-digit" | undefined;\r
        second?: "numeric" | "2-digit" | undefined;\r
        timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;\r
        formatMatcher?: "best fit" | "basic" | undefined;\r
        hour12?: boolean | undefined;\r
        timeZone?: string | undefined;\r
    }\r
\r
    interface ResolvedDateTimeFormatOptions {\r
        locale: string;\r
        calendar: string;\r
        numberingSystem: string;\r
        timeZone: string;\r
        hour12?: boolean;\r
        weekday?: string;\r
        era?: string;\r
        year?: string;\r
        month?: string;\r
        day?: string;\r
        hour?: string;\r
        minute?: string;\r
        second?: string;\r
        timeZoneName?: string;\r
    }\r
\r
    interface DateTimeFormat {\r
        format(date?: Date | number): string;\r
        resolvedOptions(): ResolvedDateTimeFormatOptions;\r
    }\r
    var DateTimeFormat: {\r
        new(locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;\r
        (locales?: string | string[], options?: DateTimeFormatOptions): DateTimeFormat;\r
        supportedLocalesOf(locales: string | string[], options?: DateTimeFormatOptions): string[];\r
        readonly prototype: DateTimeFormat;\r
    };\r
}\r
\r
interface String {\r
    /**\r
     * Determines whether two strings are equivalent in the current or specified locale.\r
     * @param that String to compare to target string\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\r
     * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.\r
     */\r
    localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;\r
}\r
\r
interface Number {\r
    /**\r
     * Converts a number to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleString(locales?: string | string[], options?: Intl.NumberFormatOptions): string;\r
}\r
\r
interface Date {\r
    /**\r
     * Converts a date and time to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;\r
    /**\r
     * Converts a date to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;\r
\r
    /**\r
     * Converts a time to a string by using the current or specified locale.\r
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.\r
     * @param options An object that contains one or more properties that specify comparison options.\r
     */\r
    toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string;\r
}\r
`}}]);

//# sourceMappingURL=7185.5dc7f9f5a542dd48dce4.js.map