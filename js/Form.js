//not fuctional??
function checkAlphabets(input) {
  for (const char of input) {
      if (!(this.char >= "a" && this.char <= "z") &&
          !(this.char >= "A" && this.char <= "Z")) {
          return false;
      }
      else{return true;}
  }
  
}

var ganggang

class Form {
  constructor() {
    this.titleImg = createImg("images/dre.png", "game title");
    this.input = createInput("").attribute("placeholder", "Name").attribute('maxlength', 12);
    this.playButton = createButton("Play");
    this.greeting = createElement("h2");

      var message = `
      Space = Shoot
      </br>
      W, A, S, D to move
     </br>`;
      this.greeting.html(message);
  }

  setElementsPosition() {
    this.titleImg.position(0, -35);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 50, height / 2 - 40);
    this.greeting.position(width/2-120, 50);
  }

  // setElementsStyle() {
  //   this.titleImg.class("gameTitle");
  //   this.input.class("customInput");
  //   this.playButton.class("customButton");
  //   this.greeting.class("greeting");
  // }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      if(this.input.value()!==''&&this.input.value()!==undefined&&this.input.value()!==' '&&this.input.value()!=='  '&&this.input.value()!=='   '&&this.input.value()!=='    '&&this.input.value()!=='     '&&this.input.value()!=='      '&&this.input.value()!=='       '&&this.input.value()!=='        '&&this.input.value()!=='         '&&this.input.value()!=='          '&&this.input.value()!=='           '&&this.input.value()!=='            '){
      console.log('asdasdasd')
      console.log(this.input.value())
      if(this.input.value()!=undefined){
      this.ganggang=this.input.value()}
      //not functional?
      if(checkAlphabets(this.ganggang)==true){
        
      this.input.hide();
      this.playButton.hide();
      this.greeting.hide();
      this.titleImg.hide()
      start=true
        }
      }
    });
  }

  display() {
    this.setElementsPosition();
   // this.setElementsStyle();
    this.handleMousePressed();
  }
}
