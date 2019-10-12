module.exports = function zeros(expression) {
    if (expression.search(/[0,2,4,6,8]\!{2}|[0-9]\!(\*|$)/) == -1) {
        return 0;
    } else {
        let arr = expression.split('*');
        return arr.reduce((acc, value) => {
            for (let i = Number(value.slice(0, value.indexOf('!'))); i > 0; i -= value.length - value.indexOf('!')) {
                let temp = i;
                while (temp % 5 == 0) {
                    temp /= 5;
                    acc++;
                }
            }
            return acc;
        }, 0);
    }
}