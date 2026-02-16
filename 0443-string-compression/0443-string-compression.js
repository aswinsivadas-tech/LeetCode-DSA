/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;

        // Count consecutive characters
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        // Write the character
        chars[write] = currentChar;
        write++;

        // Write the count if > 1
        if (count > 1) {
            let countStr = count.toString();
            for (let ch of countStr) {
                chars[write] = ch;
                write++;
            }
        }
    }

    return write;
};
