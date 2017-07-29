window.onload=main;

var vnhandler;

function main()
{
    vnhandler=new _vnHandler();

    // var r=new XMLHttpRequest();
    // r.open("GET",_calID+"events?maxResults=1&"+_apiKey);

    // r.onreadystatechange=()=>{
    //     if (r.readyState==4)
    //     {
    //         console.log(JSON.parse(r.response));
    //     }
    // };
    // r.send();

    vnhandler.getDay(2017,7,29).then((res)=>{
        console.log(res);
    });

    vnhandler.getMonth(2017,7).then((res)=>{
        console.log(res);
    });
}