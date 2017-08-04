(()=>{
    var mainboxes=document.querySelectorAll(".mainbox");

    var res={};

    res.link=window.location.href.slice(0,-11);
    res.title=mainboxes[0].children[1].innerText;
    res.cover=mainboxes[0].querySelector(".vnimg img").src;

    var charimg=mainboxes[2].querySelectorAll(".chardetails img");
    res.char=[];
    for (var x=0;x<charimg.length;x++)
    {
        res.char.push(charimg[x].src);
    }

    console.log(JSON.stringify(res));
})()