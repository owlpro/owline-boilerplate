/* eslint-disable no-extend-native */
String.prototype.numberFormat = function (count = 3, separator = ',') {
    let objRegex = new RegExp('(-?[0-9]+)([0-9]{' + count + '})')
    let val = this.toString().replace(/[^0-9]/gi, '')
    while (objRegex.test(val)) {
        val = val.replace(objRegex, '$1' + separator + '$2')
    }
    return val
}

String.prototype.toEnglishDigits = function () {
    return this.toString().replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
}

String.prototype.toPersianDigits = function () {
    return this.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])
}
