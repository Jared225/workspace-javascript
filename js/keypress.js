function showkeyCode(e){
    console.log("in the keycode");
    var lastkeyE = document.getElementById('lastKey');
    lastkeyE.textContent = "Last key in ASCII code :" + e.keyCode;
    

}
//blind the action
$('#message').keyup(showkeyCode);



// presss s key, move the + symbol

var posX = 100;
var posY = 10;

function moveit(e){
    if (e.key="s"){
        //animation
        $('img').animate({left:"400px"},500,'linear');
    }

    //**could you use up key to move up 8/
    /* ArrowUp --- is the up key "ArrowDown" is the dwon key */

}

// binding
document.addEventListener('keydown', moveit);

// click --- show the position of mouse
function showMouse(e){
    var lastKeyE = document.getElementById('lastKey');
    lastKeyE.textContent = "position ("+e.pageX+" , "+e.pageY+")";
}

document.addEventListener('mousemove',showMouse)