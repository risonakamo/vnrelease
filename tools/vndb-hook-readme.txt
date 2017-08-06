call on any vndb https://vndb.org/v???/chars#chars page
to generate description for calendar event

non json version
(()=>{
    var mainboxes=document.querySelectorAll(".mainbox");

    var rString=window.location.href.slice(0,-11);
    rString+=`\n${mainboxes[0].children[1].innerText}\n`;

    var charimg=mainboxes[2].querySelectorAll(".chardetails img");
    for (var x=0;x<charimg.length;x++)
    {
        rString+=`${charimg[x].src}\n`;
    }

    console.log(rString);
})()