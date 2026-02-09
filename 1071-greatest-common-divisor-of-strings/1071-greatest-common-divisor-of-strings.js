var gcdOfStrings = function(str1, str2) {
    // If concatenation order differs, no common divisor string
    if (str1 + str2 !== str2 + str1) return "";

    // Function to find gcd of two numbers
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    const len = gcd(str1.length, str2.length);
    return str1.slice(0, len);
};
