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

    var rboxes=document.querySelector(".rboxes");

    var release;
    var newRbox;
    calHandler.getDay(2017,6,30).then((res)=>{
        for (var x=0;x<res.items.length;x++)
        {
            release=JSON.parse(res.items[x].description);
            release.titleEn=res.items[x].summary;
            // console.log(release);

            newRbox=new releaseBox();
            rboxes.appendChild(newRbox);
            newRbox.loadRelease(release);
        }
    });

    // calHandler.getMonth(2017,7).then((res)=>{
    //     console.log(res);
    // });

    // var rboxes=document.querySelector(".rboxes");
    // var a=new releaseBox();
    // rboxes.appendChild(a);

    // setTimeout(()=>{
    //     a.loadRelease(JSON.parse(`{"link":"https://vndb.org/v20622/","title":"お家に帰るまでがましまろです","cover":"https://s.vndb.org/cv/90/31590.jpg","char":["https://s.vndb.org/ch/35/68735.jpg","https://s.vndb.org/ch/36/68736.jpg","https://s.vndb.org/ch/34/68734.jpg","https://s.vndb.org/ch/37/68737.jpg"],"dev":"Marmalade","devJp":"ま～まれぇど"}`));
    // },1000);
}