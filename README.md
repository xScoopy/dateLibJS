# dateLibJS
![npm](https://img.shields.io/npm/v/scoopy-str-helper)

# datelibjs

Library to make some of the Date object functionality easier to use in javascript utilizing many getters and a few class methods. 

## Initialize
> const dateObject = require('datelibjs')

### Getters

> example = new dateObject(1991, 10, 7) 

**year** - returns the full year of the date. 
>example.year //1991

**yr** - returns the short year of the date.
>example.yr //91

**month** - returns the full month of the date.
>example.month //November

**mon** - returns shorthand month of the date.
>example.mon //Nov

**day** - returns the full weekday of the date.
>example.day //Thursday

**dy** - returns the shorthand weekday.
>example.dy //Thu

**date** - returns the numbered date of the month. 
>example.date //7

**hours** - returns the hour (from 0-23) of the day. 

**mins** - returns minutes. 

**secs** - returns seconds. 

**padDate, padHours, padMins, PadSecs** - returns a padded representation if a single digit number would be returned. 
>example.padDate  //07

**ordinal** - returns the ordinal representation of the date. 
>example.ordinal //7th


### Class Methods

**format(mask)** - returns a formatted string of the date. The format is based on the mask passed in as a string parameter. 

List of formatting characters:

'Y' -> 2019 (Year full)
'y' -> 19 (Year short)
'M' -> July (Month full)
'm' -> Jul (Month short)
'D' -> 01 (date padded)
'd' -> 1 (date)
'H' -> 05 (Hours padded)
'h' -> 5 (Hours)
'I' -> 08 (Minutes padded)
'i' -> 8 (Minutes)
'S' -> 04 (Seconds padded)
's' -> 4 (Seconds)
'W' -> Thursday (Day full)
'w' -> Thu (Day short)
'o' -> 7th (ordinal)

any character other than the ones listed above will be left unaltered. 

>example.format("Y, o -> M") -> 1991, 7th -> November

**when()** - returns a description of how far away a date is from now. Will always return largest unit of measurement. (years > months > days > hours > mins > seconds )

>example.when() -> "31 years ago" //as of the time of writing