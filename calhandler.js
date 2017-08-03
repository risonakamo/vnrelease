class _calHandler
{
    constructor()
    {
        this.calID="https://www.googleapis.com/calendar/v3/calendars/jasu68g67q9v29gniq5dofd2us%40group.calendar.google.com/";
        this.apiKey="key=AIzaSyB834HLMUh8rf8kteswPmGuIDtdbV5B8WY";
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
            r.open("GET",this.calID+`events?maxResults=50&orderBy=startTime&singleEvents=true&timeMax=${nextYear}-${nextMonth}-01T00%3A00%3A00Z&timeMin=${year}-${month}-01T00%3A00%3A00Z&`+this.apiKey);

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
}