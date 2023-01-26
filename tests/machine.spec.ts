import { describe, expect, it } from '@jest/globals'
import { coffeeMachineMother } from '../mothers/coffee-machine-mother'
import { brew } from '../models/coffee-machine'

describe('The TypeSpresso', () => {
  it('can brew an expresso', () => {
    let [machine, cup] = brew(coffeeMachineMother.typeSpresso().build(), 'Expresso', 2)

    expect(machine.beans).toBe(986)
    expect(machine.milkReservoir).toBe(2000)
    expect(machine.waterReservoir).toBe(4940)

    expect(cup.contains).toBe('Expresso')
    expect(cup.volume).toBe(60)
  })
  it('can brew an americano', () => {
    let [machine, cup] = brew(coffeeMachineMother.typeSpresso().build(), 'Americano', 2)

    expect(machine.beans).toBe(986)
    expect(machine.milkReservoir).toBe(2000)
    expect(machine.waterReservoir).toBe(4660)

    expect(cup.contains).toBe('Americano')
    expect(cup.volume).toBe(340)
  })
  it('can brew a flat white', () => {
    let [machine, cup] = brew(coffeeMachineMother.typeSpresso().build(), 'Flat white', 2)

    expect(machine.beans).toBe(986)
    expect(machine.milkReservoir).toBe(1720)
    expect(machine.waterReservoir).toBe(4940)

    expect(cup.contains).toBe('Flat white')
    expect(cup.volume).toBe(340)
  })
  describe('When the milk is empty', () => {
    it('throws an error', () => {
      expect(() => brew(coffeeMachineMother.typeSpresso().withMilkReservoir(0).build(), 'Flat white', 2)).toThrow('Out of milk')
    })
  })
  describe('When the water is empty', () => {
    it('throws an error', () => {
      expect(() => brew(coffeeMachineMother.typeSpresso().withWaterReservoir(0).build(), 'Expresso', 2)).toThrow('Out of water')
    })
  })
  describe('When the beans are empty', () => {
    it('throws an error', () => {
      expect(() => brew(coffeeMachineMother.typeSpresso().withBeans(0).build(), 'Expresso', 2)).toThrow('Out of beans')
    })
  })
})
