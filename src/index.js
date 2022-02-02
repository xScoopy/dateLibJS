const longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

class dateObject {
    constructor(...args) {
        this._date = new Date(...args)
    }
    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return this._date.getFullYear() % 1000 % 100
    }
    get month() {
        return longMonths[this._date.getMonth()]
    }
    get mon() {
        return shortMonths[this._date.getMonth()]
    }
    get day() {
        return longDays[this._date.getDay()]
    }
    get dy() {
        return shortDays[this._date.getDay()]
    }
    get date() {
        return this._date.getDate()
    }
    get hours() {
        return this._date.getHours()
    }
    get mins() {
        return this._date.getMinutes()
    }
    get secs() {
        return this._date.getSeconds()
    }

}
const a = new dateObject()
console.log(a.mins)
