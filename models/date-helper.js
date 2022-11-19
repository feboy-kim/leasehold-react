export function monthSundays(dt) {
    const first = new Date(dt.valueOf())
    first.setDate(1)
    const month = first.getMonth()
    first.setDate(1 - first.getDay())
    const sundays = [new Date(first.valueOf())]
    first.setDate(first.getDate() + 7)
    while (first.getMonth() === month) {
        sundays.push(new Date(first.valueOf()))
        first.setDate(first.getDate() + 7)
    }
    return sundays
}

export const weekDayNames = [
    "周日", "周一", "周二", "周三", "周四", "周五", "周六"
]
