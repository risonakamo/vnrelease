class _calHandler
{
    constructor()
    {
        this.calID="https://www.googleapis.com/calendar/v3/calendars/jasu68g67q9v29gniq5dofd2us%40group.calendar.google.com/";
        this.apiKey="key=AIzaSyB834HLMUh8rf8kteswPmGuIDtdbV5B8WY";
        this.eventCache={};
        this.dayCache=[];

        var d=new Date();
        this.currYear=d.getFullYear();
        this.currMonth=d.getMonth()+1;
        this.currIndex=0;
    }

    getCurrDay()
    {
        return new Promise((ret,rej)=>{
            if (!this.eventCache[this.currMonth])
            {
                this.getMonth(this.currYear,this.currMonth);

                setTimeout(()=>{
                    this.getCurrDay().then((s)=>{
                        ret(s);
                    });
                },500);
            }

            else
            {
                ret(this.dayCache[this.currIndex]);
            }
        });
    }

    getNextDay()
    {
        this.currIndex++;

        if (this.currIndex>=this.dayCache.length)
        {
            this.currMonth--;

            if (this.currMonth<=0)
            {
                this.currYear--;
                this.currMonth=12;
            }
        }

        return this.getCurrDay();
    }

    getPrevDay()
    {
        this.currIndex--;

        if (this.currIndex<0)
        {
            this.currIndex=0;
        }

        return this.getCurrDay();
    }

    //get events of day
    //returns js object response in promise
    getDay(year,month,day)
    {
        return new Promise((ret,rej)=>{
            if (month<10)
            {
                month="0"+month;
            }

            if (day<10)
            {
                day="0"+day;
            }

            var r=new XMLHttpRequest();
            r.open("GET",this.calID+`events?maxResults=50&orderBy=startTime&singleEvents=true&timeMax=${year}-${month}-${day}T23%3A59%3A00Z&timeMin=${year}-${month}-${day}T00%3A00%3A00Z&`+this.apiKey);

            r.onreadystatechange=()=>{
                if (r.readyState==4)
                {
                    // console.log(JSON.parse(r.response));
                    ret(JSON.parse(r.response));
                }
            };

            r.send();
        });
    }

    //requires NON INDEX month value
    getMonth(year,month)
    {
        return new Promise((ret,rej)=>{
            var nextMonth=month+1;
            var nextYear=year;
            if (nextMonth>12)
            {
                nextMonth=1;
                nextYear++;
            }

            if (month<10)
            {
                month="0"+month;
            }

            if (nextMonth<10)
            {
                nextMonth="0"+nextMonth;
            }

            var r=new XMLHttpRequest();
            r.open("GET",this.calID+`events?maxResults=50&orderBy=startTime&singleEvents=true&timeMax=${nextYear}-${nextMonth}-01T00%3A00%3A00Z&timeMin=${year}-${month}-03T00%3A00%3A00Z&`+this.apiKey);

            r.onreadystatechange=()=>{
                if (r.readyState==4)
                {
                    var data=JSON.parse(r.response);
                    this.cacheResponse(parseInt(month),data.items);
                    ret(data);
                }
            };

            r.send();
        });

    }

    cacheResponse(month,data)
    {
        for (var x=0,l=data.length;x<l;x++)
        {
            if (!this.eventCache[month])
            {
                this.eventCache[month]={};
            }

            if (!this.eventCache[month][data[x].start.date])
            {
                this.eventCache[month][data[x].start.date]=[data[x]];
            }

            else
            {
                this.eventCache[month][data[x].start.date].push(data[x]);
            }
        }

        var days=Object.keys(this.eventCache[month]);
        days.sort();

        var day;
        for (var x=days.length-1;x>=0;x--)
        {
            day={};
            day[days[x]]=this.eventCache[month][days[x]];
            this.dayCache.push(day);
        }

        // var day;
        // for (var x in this.eventCache[month])
        // {
        //     day={};
        //     day[x]=this.eventCache[month][x];
        //     this.dayCache.push(day);
        // }

        // console.log(this.eventCache);
        // console.log(this.dayCache);
    }
}