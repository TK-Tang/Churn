export function hasExceededLoanLifetime(date, data) {
    return date.getFullYear() > data.loanStartYear + data.loanLifetime;
}

export function incrementDateByOneMonth(date) {
    if (date.getMonth() != 11) {
        var newMonth = date.getMonth() + 1;

        return new Date(date.getFullYear(), newMonth, 1);
    } else {
        var newYear = date.getFullYear() + 1;

        return new Date(newYear, 0, 1);
    }
}