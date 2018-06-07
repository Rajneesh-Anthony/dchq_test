/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-04-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
!function(){var e=Date,t=e.prototype,i=(e.CultureInfo,[]),n=function(e,t){return t||(t=2),("000"+e).slice(-1*t)};e.normalizeFormat=function(e){i=[];(new Date).$format(e);return i.join("")},e.strftime=function(e,t){return new Date(1e3*t).$format(e)},e.strtotime=function(t){var i=e.parse(t);return i.addMinutes(-1*i.getTimezoneOffset()),Math.round(e.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds())/1e3)},/**
     * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
     *
     * The following descriptions are from http://www.php.net/strftime and http://www.php.net/manual/en/function.date.php. 
     * Copyright (c) 2001-2008 The PHP Group
     * 
     * Format Specifiers
     <pre>
    Format  Description                                                                  Example
    ------  ---------------------------------------------------------------------------  -----------------------
     %a     abbreviated weekday name according to the current localed                    "Mon" through "Sun"
     %A     full weekday name according to the current locale                            "Sunday" through "Saturday"
     %b     abbreviated month name according to the current locale                       "Jan" through "Dec"
     %B     full month name according to the current locale                              "January" through "December"
     %c     preferred date and time representation for the current locale                "4/13/2008 12:33 PM"
     %C     century number (the year divided by 100 and truncated to an integer)         "00" to "99"
     %d     day of the month as a decimal number                                         "01" to "31"
     %D     same as %m/%d/%y                                                             "04/13/08"
     %e     day of the month as a decimal number, a single digit is preceded by a space  "1" to "31"
     %g     like %G, but without the century                                             "08"
     %G     The 4-digit year corresponding to the ISO week number (see %V).              "2008"
            This has the same format and value as %Y, except that if the ISO week number 
            belongs to the previous or next year, that year is used instead.
     %h     same as %b                                                                   "Jan" through "Dec"
     %H     hour as a decimal number using a 24-hour clock                               "00" to "23"
     %I     hour as a decimal number using a 12-hour clock                               "01" to "12"
     %j     day of the year as a decimal number                                          "001" to "366"
     %m     month as a decimal number                                                    "01" to "12"
     %M     minute as a decimal number                                                   "00" to "59"
     %n     newline character                                                            "\n"
     %p     either "am" or "pm" according to the given time value, or the                "am" or "pm"
            corresponding strings for the current locale
     %r     time in a.m. and p.m. notation                                               "8:44 PM"
     %R     time in 24 hour notation                                                     "20:44"
     %S     second as a decimal number                                                   "00" to "59"
     %t     tab character                                                                "\t"
     %T     current time, equal to %H:%M:%S                                              "12:49:11"
     %u     weekday as a decimal number ["1", "7"], with "1" representing Monday         "1" to "7"
     %U     week number of the current year as a decimal number, starting with the       "0" to ("52" or "53")
            first Sunday as the first day of the first week
     %V     The ISO 8601:1988 week number of the current year as a decimal number,       "00" to ("52" or "53")
            range 01 to 53, where week 1 is the first week that has at least 4 days 
            in the current year, and with Monday as the first day of the week. 
            (Use %G or %g for the year component that corresponds to the week number 
            for the specified timestamp.)
     %W     week number of the current year as a decimal number, starting with the       "00" to ("52" or "53")
            first Monday as the first day of the first week
     %w     day of the week as a decimal, Sunday being "0"                               "0" to "6"
     %x     preferred date representation for the current locale without the time        "4/13/2008"
     %X     preferred time representation for the current locale without the date        "12:53:05"
     %y     year as a decimal number without a century                                   "00" "99"
     %Y     year as a decimal number including the century                               "2008"
     %Z     time zone or name or abbreviation                                            "UTC", "EST", "PST"
     %z     same as %Z 
     %%     a literal "%" character                                                      "%"
      
     d      Day of the month, 2 digits with leading zeros                                "01" to "31"
     D      A textual representation of a day, three letters                             "Mon" through "Sun"
     j      Day of the month without leading zeros                                       "1" to "31"
     l      A full textual representation of the day of the week (lowercase "L")         "Sunday" through "Saturday"
     N      ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0)  "1" (for Monday) through "7" (for Sunday)
     S      English ordinal suffix for the day of the month, 2 characters                "st", "nd", "rd" or "th". Works well with j
     w      Numeric representation of the day of the week                                "0" (for Sunday) through "6" (for Saturday)
     z      The day of the year (starting from "0")                                      "0" through "365"      
     W      ISO-8601 week number of year, weeks starting on Monday                       "00" to ("52" or "53")
     F      A full textual representation of a month, such as January or March           "January" through "December"
     m      Numeric representation of a month, with leading zeros                        "01" through "12"
     M      A short textual representation of a month, three letters                     "Jan" through "Dec"
     n      Numeric representation of a month, without leading zeros                     "1" through "12"
     t      Number of days in the given month                                            "28" through "31"
     L      Whether it's a leap year                                                     "1" if it is a leap year, "0" otherwise
     o      ISO-8601 year number. This has the same value as Y, except that if the       "2008"
            ISO week number (W) belongs to the previous or next year, that year 
            is used instead.
     Y      A full numeric representation of a year, 4 digits                            "2008"
     y      A two digit representation of a year                                         "08"
     a      Lowercase Ante meridiem and Post meridiem                                    "am" or "pm"
     A      Uppercase Ante meridiem and Post meridiem                                    "AM" or "PM"
     B      Swatch Internet time                                                         "000" through "999"
     g      12-hour format of an hour without leading zeros                              "1" through "12"
     G      24-hour format of an hour without leading zeros                              "0" through "23"
     h      12-hour format of an hour with leading zeros                                 "01" through "12"
     H      24-hour format of an hour with leading zeros                                 "00" through "23"
     i      Minutes with leading zeros                                                   "00" to "59"
     s      Seconds, with leading zeros                                                  "00" through "59"
     u      Milliseconds                                                                 "54321"
     e      Timezone identifier                                                          "UTC", "EST", "PST"
     I      Whether or not the date is in daylight saving time (uppercase i)             "1" if Daylight Saving Time, "0" otherwise
     O      Difference to Greenwich time (GMT) in hours                                  "+0200", "-0600"
     P      Difference to Greenwich time (GMT) with colon between hours and minutes      "+02:00", "-06:00"
     T      Timezone abbreviation                                                        "UTC", "EST", "PST"
     Z      Timezone offset in seconds. The offset for timezones west of UTC is          "-43200" through "50400"
            always negative, and for those east of UTC is always positive.
     c      ISO 8601 date                                                                "2004-02-12T15:19:21+00:00"
     r      RFC 2822 formatted date                                                      "Thu, 21 Dec 2000 16:01:07 +0200"
     U      Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)                   "0"     
     </pre>
     * @param {String}   A format string consisting of one or more format spcifiers [Optional].
     * @return {String}  A string representation of the current Date object.
     */
t.$format=function(t){var a,s=this,r=function(e){return i.push(e),s.toString(e)};return t?t.replace(/(%|\\)?.|%%/g,function(t){if("\\"===t.charAt(0)||"%%"===t.substring(0,2))return t.replace("\\","").replace("%%","%");switch(t){case"d":case"%d":return r("dd");case"D":case"%a":return r("ddd");case"j":case"%e":return r("d");case"l":case"%A":return r("dddd");case"N":case"%u":return s.getDay()+1;case"S":return r("S");case"w":case"%w":return s.getDay();case"z":return s.getOrdinalNumber();case"%j":return n(s.getOrdinalNumber(),3);case"%U":var o=s.clone().set({month:0,day:1}).addDays(-1).moveToDayOfWeek(0),l=s.clone().addDays(1).moveToDayOfWeek(0,-1);return o>l?"00":n((l.getOrdinalNumber()-o.getOrdinalNumber())/7+1);case"W":case"%V":return s.getISOWeek();case"%W":return n(s.getWeek());case"F":case"%B":return r("MMMM");case"m":case"%m":return r("MM");case"M":case"%b":case"%h":return r("MMM");case"n":return r("M");case"t":return e.getDaysInMonth(s.getFullYear(),s.getMonth());case"L":return e.isLeapYear(s.getFullYear())?1:0;case"o":case"%G":return s.setWeek(s.getISOWeek()).toString("yyyy");case"%g":return s.$format("%G").slice(-2);case"Y":case"%Y":return r("yyyy");case"y":case"%y":return r("yy");case"a":case"%p":return r("tt").toLowerCase();case"A":return r("tt").toUpperCase();case"g":case"%I":return r("h");case"G":return r("H");case"h":return r("hh");case"H":case"%H":return r("HH");case"i":case"%M":return r("mm");case"s":case"%S":return r("ss");case"u":return n(s.getMilliseconds(),3);case"I":return s.isDaylightSavingTime()?1:0;case"O":return s.getUTCOffset();case"P":return a=s.getUTCOffset(),a.substring(0,a.length-2)+":"+a.substring(a.length-2);case"e":case"T":case"%z":case"%Z":return s.getTimezone();case"Z":return-60*s.getTimezoneOffset();case"B":var u=new Date;return Math.floor((3600*u.getHours()+60*u.getMinutes()+u.getSeconds()+60*(u.getTimezoneOffset()+60))/86.4);case"c":return s.toISOString().replace(/\"/g,"");case"U":return e.strtotime("now");case"%c":return r("d")+" "+r("t");case"%C":return Math.floor(s.getFullYear()/100+1);case"%D":return r("MM/dd/yy");case"%n":return"\\n";case"%t":return"\\t";case"%r":return r("hh:mm tt");case"%R":return r("H:mm");case"%T":return r("H:mm:ss");case"%x":return r("d");case"%X":return r("t");default:return i.push(t),t}}):this._toString()},t.format||(t.format=t.$format)}();