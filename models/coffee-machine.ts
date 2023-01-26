export type MilliLiters = number
export type Grams = number

export type Cup = {
  volume: MilliLiters
  contains: CoffeeType
}

export type CoffeeMachine = {
  waterReservoir: MilliLiters
  milkReservoir: MilliLiters
  beans: Grams
}

const shotWeight: Grams = 7
const extraction: MilliLiters = 30
const cupSize: MilliLiters = 340

export type CoffeeType = 'Expresso' | 'Americano' | 'Flat white'

export function brew(machine: CoffeeMachine, type: CoffeeType, shots: number): [CoffeeMachine, Cup] {
  let waterConsumption = shots * extraction

  if (type === 'Americano') {
    waterConsumption += cupSize - waterConsumption
  }

  const beanConsumption = shots * shotWeight

  let milkConsumption = type === 'Flat white' ? cupSize - waterConsumption : 0

  const updateMachineState = {
    waterReservoir: machine.waterReservoir - waterConsumption,
    beans: machine.beans - beanConsumption,
    milkReservoir: machine.milkReservoir - milkConsumption,
  }

  if (updateMachineState.waterReservoir < 0) throw new Error('Out of water')
  if (updateMachineState.milkReservoir < 0) throw new Error('Out of milk')
  if (updateMachineState.beans < 0) throw new Error('Out of beans')

  return [
    updateMachineState,
    {
      contains: type,
      volume: waterConsumption + milkConsumption,
    },
  ]
}
