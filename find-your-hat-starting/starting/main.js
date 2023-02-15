const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
playing = true;

class Field {
  constructor(field){
    this.field = field;
    this.playerPosition = [0,0];
  }

  checkValidPosition(num_y, num_x){
    if(num_y >= this.field.length || num_x >= this.field[0].length){
      console.log("Out of bounds");
      return false;
    }
    else{
      return true;
    }
  }

  get playerPosition_Y(){
    return this.playerPosition[0];
  }

  get playerPosition_X(){
    return this.playerPosition[1];
  }

  set playerPosition_Y(num_y){
    this.playerPosition[0] = num_y;
  }

  set playerPosition_X(num_x){
    this.playerPosition[1] = num_x;
  }

  set fieldCharacter(character){
    this.field[this.playerPosition_Y][this.playerPosition_X] = character;
  }

  print(){
    for(let i = 0; i< this.field.length; i++){
      let outputString = "";
      for(let j = 0; j < this.field[i].length; j++){
        outputString += this.field[i][j];
      }
      console.log(outputString);
    }
  }

  movePlayerRight(){
    this.playerPosition_X = this.playerPosition_X += 1;
    if(this.checkValidPosition(this.playerPosition_X, this.playerPosition_Y)){
      this.fieldCharacter = pathCharacter;
    }
    else{
      playing = false;
    }
  }
  movePlayerLeft(){
    this.playerPosition_X = this.playerPosition_X -= 1;
    if(this.checkValidPosition(this.playerPosition_X, this.playerPosition_Y)){
      this.fieldCharacter = pathCharacter;
    }
    else{
      playing = false;
    }
  }
  movePlayerUp(){
    this.playerPosition_Y = this.playerPosition_Y -= 1;
    if(this.checkValidPosition(this.playerPosition_X, this.playerPosition_Y)){
      this.fieldCharacter = pathCharacter;
    }
    else{
      playing = false;
    }
  }
  movePlayerDown(){
    this.playerPosition_Y = this.playerPosition_Y += 1;
    if(this.checkValidPosition(this.playerPosition_X, this.playerPosition_Y)){
      this.fieldCharacter = pathCharacter;
    }
    else{
      playing = false;
    }
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print();
console.log();
myField.movePlayerRight();
myField.print();
console.log();
myField.movePlayerDown();
myField.print();
console