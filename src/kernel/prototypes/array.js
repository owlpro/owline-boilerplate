/* eslint-disable no-extend-native */
Array.prototype.sum = function (selector) {
    if (typeof selector === 'function') {
        return this.reduce(selector, 0)
    } else {
        switch (typeof this[0]) {
            case 'object':
                return (
                    this.map((item) => {
                        let splitSelector = selector.split('.')
                        if (splitSelector.length > 1) {
                            let output = item
                            try {
                                splitSelector.forEach((key, index) => {
                                    if (Array.isArray(output)) {
                                        let nSelector = splitSelector.slice(index).join('.')
                                        output = output.sum(nSelector)
                                        throw new Error()
                                    } else {
                                        output = output[key]
                                    }
                                })
                            } catch (error) {
                                //
                            }
                            return typeof output === 'number' ? output : 0
                        } else {
                            return item[selector] || 0
                        }
                    }).reduce((a, b) => a + b, 0) || 0
                )
            case 'number':
                return this.reduce((a, b) => a + b, 0)
            default:
                return 0
        }
    }
}

Array.prototype.first = function () {
    return this[0]
}
