var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        for (var j = 0; j < images.length; j++) {
            if (i != j) {
                images[j].style.transform = "scale(1)";
            }
          }
        this.style.transform = "scale(1.3)";
        this.style.margin='40px'
    });
}



      const btn = document.getElementById("button");

btn.addEventListener("click", function(){
var element = document.getElementById('body');
html2pdf().from(element).save('filename.pdf');
});

function printFunction() {
        window.print();
      }






function PopWinClose()
{
    window.close();
}

function PopWinIntro()
{
    window.open("popA.html","width=100%", "_self");
}

function PopWinAr1()
{
    floatingWindow = window.open("popAr1.html","","height=400,width=400,scrollbars=yes");
}

function PopWinA1()
{
    window.open("popA1.html","width=100%", "_self");
}

function PopWinA1s1()
{
    window.open("popA1s1.html","width=100%", "_self");
}

function PopWinA1s2()
{
    window.open("popA1s2.html","width=100%", "_self");
}

function PopWinA1s3()
{
    window.open("popA1s3.html","width=100%", "_self");
}

function PopWinAr2()
{
    floatingWindow = window.open("popAr2.html","","height=400,width=400,scrollbars=yes");
}

function PopWinAr3()
{
    floatingWindow = window.open("popAr3.html","","height=400,width=400,scrollbars=yes");
}