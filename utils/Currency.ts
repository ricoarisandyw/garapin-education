function toCurrency(currency: number) {
    const strCur = currency.toString()
    let finalCur = []
    for (let i = 0; i < strCur.length; i++) {
        if (i !== 0 && i % 3 === 0) finalCur.push(".")
        finalCur.push(strCur[strCur.length - i - 1])
    }
    return finalCur.reverse().join("")
}

export { toCurrency }