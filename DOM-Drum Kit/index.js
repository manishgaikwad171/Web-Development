var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;)
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    alert(" I got Clicked!!! ")
})