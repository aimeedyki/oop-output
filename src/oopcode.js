'use strict';

class House {
  constructor(room, bathroom, parlour, floor, lease){
    this.rooms =room;
    this.bathrooms = bathroom;
    this.parlours = parlour;
    this.floors= floor;
    this._lease = lease;//encapsulation
  }
  
  addRooms(numRooms){
    this.rooms+= numRooms;
  }
  addBathrooms(numBathrooms){
    this.bathrooms += numBathrooms;
  }
  addParlours(numParlours){
    this.parlours+=parlours;
  }
  numberOfRooms(){
    console.log("there are "+this.rooms+" rooms");
  }
  get parlour(){
    return this.parlours;
  }
  get room(){
    return this.rooms;
  }
  get bathroom(){
    return this.bathrooms;
  }
  set parlour(newParlours){
    this.parlours= newParlours;
  }
  set room(newRooms){
    this.rooms = newRooms;
  }
  set bathroom(newBathrooms){
    this.bathrooms = newBathrooms;
  }
  //
  //abstraction
  buildHouse(){
    return 'your house has been built';
  }
  
  houseFeatures(){
    console.log ("This house has"+this.rooms+" rooms, " + this.parlours+" parlors, and "+this.bathrooms+"bathrooms");
  }
  
}
//inheritance and polymorphism
class Bungalow extends House{
  constructor(room, bathroom, parlour){
    
    super(room, bathroom, parlour);
    
  }
  
  cleanRooms(){
    console.log(this.rooms+ " rooms have been cleaned");
  }
}


class StoryBuilding extends House{
    constructor(room, bathroom, parlour, floor, pentHouse){
     super(room, bathroom, parlour);
    this.floors= floor;
    this._pentHouse= pentHouse;
  }
  hasPenthouse(numPentHouse){
    console.log(numPentHouse);
    if (numPentHouse === 0){
      return "no";
    }
    else{
      return "a";
    }
  }
  houseFeatures(){
    console.log ("This house has"+this.rooms+" rooms, " + this.parlours+" parlors,"+this.bathrooms+" bathrooms and "+this.floors+" floors with "+ this.hasPenthouse(this._pentHouse)+ " penthouse");
  }
  
  
}

class SelfContained extends Bungalow{
  constructor(room, bathroom){
     super(room, bathroom);
  }
  hasBathroom(numBathrooms){
    if (numBathrooms === 0){
      console.log("there are no bathroms");
      }
    else{
      console.log("there is a bathroom");
    }
  }
}

module.exports = {House, Bungalow, StoreyBuilding, SelfContained};



