// Soldier
class Soldier {
    constructor(a, b) {
      this.health = a;
      this.strength = b;
    }
  
    attack() {
      return this.strength;
    }
  
    receiveDamage(damage) {
      this.health -= damage;
    }
  }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength); // Call the constructor of class we are extending
      this.name = name;
    }
  
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
  
    battleCry() {
      return 'Odin Owns You All!';
    }
  }

// Saxon
class Saxon {
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
      } else {
        return `A Saxon has died in combat`;
      }
    }
  }

// War
class War {}
