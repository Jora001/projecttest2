let div1 = document.getElementById("div1");

let body = document.body;
body.addEventListener("keydown", ball);
let pixel = 0;
let pix = 0;
let Ball = document.getElementById("div2");

function ball (event) {
    if (event.keyCode === 39) {
      pixel += 5;
      Ball.style.left = pixel + "px";
      if (pixel >= 1160) {
        pixel = 1160;
      }
    }
    if (event.keyCode === 37) {
        pixel -= 10;
        Ball.style.left = pixel + "px";
        if (pixel <= 15) {
          pixel = 15;
        }
      }
      if (event.keyCode === 40) {
        pix += 5;
        Ball.style.top = pix + "px";
        if (pix >= 440) {
          pix = 440;
        }
      }
      if (event.keyCode === 38) {
        pix -= 5;
        Ball.style.top = pix + "px";
        if (pix <= 10) {
          pix = 10;
        }
      }
      if (pixel === 460 && pix === 210) {
        container.remove();
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "div");
        newDiv.append("W i N");
    

        body.appendChild(newDiv);
      }
    
}
