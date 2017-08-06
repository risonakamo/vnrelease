(()=>{
    var mainboxes=document.querySelectorAll(".mainbox");

    var res={};

    res.link=window.location.href.slice(0,-11);
    res.title=mainboxes[0].children[1].innerText;
    res.summary=mainboxes[0].querySelector(".vndesc p").innerText.replace(/“|”|"/,`'`);
    res.cover=mainboxes[0].querySelector(".vnimg img").src;

    var charimg=mainboxes[2].querySelectorAll(".chardetails img");
    res.char=[];
    for (var x=0;x<charimg.length;x++)
    {
        res.char.push(charimg[x].src);
    }

    var details=mainboxes[0].querySelectorAll("tr");
    for (var x=0;x<details.length;x++)
    {
        if (details[x].firstChild.innerText=="Developer")
        {
            res.dev=details[x].children[1].innerText;

            if (details[x].children[1].children.length>0)
            {
                res.devJp=details[x].children[1].firstChild.title;
            }
        }
    }

    console.log(JSON.stringify(res));
})()