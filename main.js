window.onload=main;

var calHandler;

function main()
{
    calHandler=new _calHandler();

    // var r=new XMLHttpRequest();
    // r.open("GET",_calID+"events?maxResults=1&"+_apiKey);

    // r.onreadystatechange=()=>{
    //     if (r.readyState==4)
    //     {
    //         console.log(JSON.parse(r.response));
    //     }
    // };
    // r.send();

    calHandler.getDay(2017,7,29).then((res)=>{
        console.log(res);
    });

    calHandler.getMonth(2017,7).then((res)=>{
        console.log(res);
    });
}