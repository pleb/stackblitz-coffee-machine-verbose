import { CoffeeMachineBuilder } from '../builders/coffee-machine-builder'

export const coffeeMachineMother = {
  typeSpresso: () => {
    return new CoffeeMachineBuilder().withBeans(1_000).withMilkReservoir(2_000).withWaterReservoir(5_000)
  },
  intelliMachine1000: () => {
    return new CoffeeMachineBuilder().withBeans(2_000).withMilkReservoir(4_000).withWaterReservoir(10_000)
  },
}
