import { CoffeeMachine, Grams, MilliLiters } from '../models/coffee-machine'
import { randomNumber } from '../utilities/random'

export class CoffeeMachineBuilder {
  constructor(
    private machine: CoffeeMachine = {
      beans: randomNumber(),
      milkReservoir: randomNumber(),
      waterReservoir: randomNumber(),
    }
  ) {}

  public withBeans(beans: Grams): CoffeeMachineBuilder {
    this.machine = {
      ...this.machine,
      beans,
    }
    return this
  }

  public withWaterReservoir(waterReservoir: MilliLiters): CoffeeMachineBuilder {
    this.machine = {
      ...this.machine,
      waterReservoir,
    }
    return this
  }

  public withMilkReservoir(milkReservoir: MilliLiters): CoffeeMachineBuilder {
    this.machine = {
      ...this.machine,
      milkReservoir,
    }
    return this
  }

  public build(): CoffeeMachine {
    return {
      ...this.machine,
    }
  }
}
