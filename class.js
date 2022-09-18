//player class computer class 



class Person {
    constructor(name, time ,wins,loose) {
      this.name = name;
      this.time =  time;
      this.wins = wins;
      this.loose = loose;
    }
  }
 

  class Player extends Person{
    constructor(name,time,wins, loose){
      this.name = 'Mina';
      this.time = 60;
      this.wins = wins;
      this.loose = loose;
    }
    
  }