window.onload=main;

var _dEntry; //data entries html element

function main()
{
    _dEntry=document.querySelector(".data");

    buttonSetup();
}

function buttonSetup()
{
    var hookB=document.querySelector(".hook-button");
    var clearB=document.querySelector(".clear-button");
    var showB=document.querySelector(".show-data");

    hookB.addEventListener("click",(e)=>{
        e.preventDefault();

        chrome.tabs.executeScript({file:"vndb-hook-ex.js",runAt:"document_end"});
    });

    clearB.addEventListener("click",(e)=>{
        e.preventDefault();

        chrome.storage.local.clear(()=>{
            displayEntries();
        });
    });

    showB.addEventListener("click",(e)=>{
        e.preventDefault();
        displayEntries();
    })
}

function displayEntries()
{
    chrome.storage.local.get("hooked",(d)=>{
        if (!d.hooked)
        {
            d.hooked=[];
        }

        _dEntry.innerHTML="";

        for (var x=0;x<d.hooked.length;x++)
        {
            _dEntry.insertAdjacentHTML("beforeend",`<p>${d.hooked[x]}</p>`);
        }
    });
}

function displayStorage()
{
    chrome.storage.local.get(null,(d)=>{
        console.log(d);
    });
}