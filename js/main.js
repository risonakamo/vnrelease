window.onload=main;

var calHandler;

function main()
{
    calHandler=new _calHandler();

    // var rboxes=document.querySelector(".rboxes");

    // var release;
    // var newRbox;
    // calHandler.getDay(2017,6,30).then((res)=>{
    //     for (var x=0;x<res.items.length;x++)
    //     {
    //         release=JSON.parse(res.items[x].description);
    //         release.titleEn=res.items[x].summary;
    //         // console.log(release);

    //         newRbox=new releaseBox();
    //         rboxes.appendChild(newRbox);
    //         newRbox.loadRelease(release);
    //     }
    // });

    calHandler.getMonth(2017,7).then((res)=>{
        // console.log(res.items);
    });

    calHandler.getMonth(2017,6);
}