const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let letter = []
    for (let x = 0; x < expr.length; x += 10) {
        let n = '';
        for (let y = 0; y < 10; y += 2) {
            if (expr[x + y] + expr[x + y + 1] === '**') {
                n += ' '
            }
            if (expr[x + y] + expr[x + y + 1] === '10') {
                n += '.'
            }
            if (expr[x + y] + expr[x + y + 1] === '11') {
                n += '-'
            }
        }
        letter.push(n)
    }

    return letter.map(item => MORSE_TABLE[item] ? MORSE_TABLE[item] : ' ').join('');
}

module.exports = {
    decode
}