class ParkingSystem {
  private slots: {[key: number]: number};

  constructor(big: number, medium: number, small: number) {
      this.slots = { 1: big, 2: medium, 3: small };
  }

  addCar(carType: number): boolean {
    if(this.slots[carType] > 0){
      this.slots[carType]--;
      return true;
    }

    return false;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */