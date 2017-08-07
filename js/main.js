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

    calHandler.getCurrDay().then((res)=>{
        genReleases(res);
    });

    // calHandler.getMonth(2017,7);

    // calHandler.getMonth(2017,6);
    // calHandler.getMonth(2017,5);
    // calHandler.getMonth(2017,4);
}

function genReleases(data)
{
    var rboxes=document.querySelector(".rboxes");
    var release;
    var newRbox;
    for (var x in data)
    {
        for (var y=0;y<data[x].length;y++)
        {
            release=JSON.parse(data[x][y].description);
            release.titleEn=data[x][y].summary;
            // console.log(release);

            newRbox=new releaseBox();
            rboxes.appendChild(newRbox);
            newRbox.loadRelease(release);
        }
    }
}