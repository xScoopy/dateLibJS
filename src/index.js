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
        return this._date.getFullYear() % 100
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
    when = () => {
        let past = false
        let date = this._date
        let now = new dateObject()
        now = now._date
        let returnArray = []
        
        if (now > date) {
            past = true
        }
        if (now.getFullYear() != date.getFullYear() ){
            const difference = Math.abs(now.getFullYear() - date.getFullYear())
            return past ? difference + " years ago" : difference + " years from now"
        }
        if (now.getMonth() != date.getMonth()) {
            const difference = Math.abs(now.getMonth() - date.getMonth())
            return past ? difference + " months ago" : difference + " months from now"
        }
        if (now.getDate() != date.getDate()) {
            const difference = Math.abs(now.getDate() - date.getDate())
            return past ? difference + " days ago" : difference + " days from now"
        }
        if (now.getHours() != date.getHours()) {
            const difference = Math.abs(now.getHours() - date.getHours())
            return past ? difference + " hours ago" : difference + " hours from now"
        }
        if (now.getMinutes() != date.getMinutes()) {
            const difference = Math.abs(now.getMinutes() - date.getMinutes())
            return past ? difference + " minutes ago" : difference + " minutes from now"
        }
        if (now.getSeconds() != date.getSeconds()) {
            const difference = Math.abs(now.getSeconds() - date.getSeconds())
            return past ? difference + " seconds ago" : difference + " seconds from now"
        }
    }
    
}



// ms / 1000 / 60 / 60 / 24 / 365.25


const testDate = new dateObject(2022, 1, 2, 14, 28, 0)
console.log(testDate.when())
