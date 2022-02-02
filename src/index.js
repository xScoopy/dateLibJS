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
    get padDate() {
        let stringDate = this._date.getDate().toString()
        return Number(stringDate) > 9 ? stringDate : "0" + stringDate
    }
    get hours() {
        return this._date.getHours()
    }
    get padHours() {
        let stringDate = this._date.getHours().toString()
        return Number(stringDate) > 9 ? stringDate : "0" + stringDate
    }
    get mins() {
        return this._date.getMinutes()
    }
    get padMins() {
        let stringDate = this._date.getMinutes().toString()
        return Number(stringDate) > 9 ? stringDate : "0" + stringDate
    }
    get secs() {
        return this._date.getSeconds()
    }
    get padSecs() {
        let stringDate = this._date.getSeconds().toString()
        return Number(stringDate) > 9 ? stringDate : "0" + stringDate
    }
    format = (mask) => {        
        const formatObject = {
            'Y': this.year,
            'y': this.yr,
            'M': this.month,
            'm': this.mon,
            'D': this.padDate,
            'd': this.date,
            'H': this.padHours,
            'h': this.hours,
            'I': this.padMins,
            'i': this.mins,
            'S': this.padSecs,
            's': this.secs
        }
        if(!mask){
            return `${this.year} ${this.month} ${this.padDate}`
        }
        let formattedArray = []
        const splitMask = mask.split('')
        for(let i = 0; i < splitMask.length; i++){
            if (formatObject[splitMask[i]]){
                const itemToAdd = formatObject[splitMask[i]]
                formattedArray.push(itemToAdd)
            } else {
                const itemToAdd = splitMask[i]
                formattedArray.push(itemToAdd)
            }
        }
        return formattedArray.join('')
    }

}
const a = new dateObject()
console.log(a.format('Y/m/D'))
