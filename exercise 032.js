// exercise 32
// https://projecteuler.net/problem=32
let sum = 0
let products = []

for (a = 1; a < 10; a++) {
    for (b = 1; b < 10; b++) {
        if (a != b) {
            for (c = 1; c < 10; c++) {
                if (![a, b].includes(c)) {
                    for (d = 1; d < 10; d++) {
                        if (![a, b, c].includes(d)) {
                            for (e = 1; e < 10; e++) {
                                if (![a, b, c, d].includes(e)) {
                                    for (f = 1; f < 10; f++) {
                                        if (![a, b, c, d, e].includes(f)) {
                                            for (g = 1; g < 10; g++) {
                                                if (![a, b, c, d, e, f].includes(g)) {
                                                    for (h = 1; h < 10; h++) {
                                                        if (![a, b, c, d, e, f, g].includes(h)) {
                                                            for (i = 1; i < 10; i++) {
                                                                if (![a, b, c, d, e, f, g, h].includes(i)) {
                                                                    if (Number(`${a}${b}`) * Number(`${c}${d}${e}`) == Number(`${f}${g}${h}${i}`)) {
                                                                        console.log(`${a}${b} * ${c}${d}${e} = ${f}${g}${h}${i}`)
                                                                        if (!products.includes(Number(`${f}${g}${h}${i}`))) {
                                                                            sum += Number(`${f}${g}${h}${i}`)
                                                                            products.push(Number(`${f}${g}${h}${i}`))
                                                                        }

                                                                    }

                                                                    if (Number(`${a}`) * Number(`${b}${c}${d}${e}`) == Number(`${f}${g}${h}${i}`)) {
                                                                        console.log(`${a} * ${b}${c}${d}${e} = ${f}${g}${h}${i}`)
                                                                        if (!products.includes(Number(`${f}${g}${h}${i}`))) {
                                                                            sum += Number(`${f}${g}${h}${i}`)
                                                                            products.push(Number(`${f}${g}${h}${i}`))
                                                                        }

                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(`And the total is ==>> ${sum}`)