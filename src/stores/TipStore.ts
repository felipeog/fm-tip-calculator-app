import { makeAutoObservable } from 'mobx'

class TipStore {
  bill: number
  tipPercentage: number
  numberOfPeople: number

  constructor() {
    this.bill = 0
    this.tipPercentage = 0
    this.numberOfPeople = 0
    makeAutoObservable(this)
  }

  get tipPerPerson() {
    if (this.numberOfPeople <= 0) {
      return 0
    }

    const tip = this.bill * (this.tipPercentage / 100)

    return tip / this.numberOfPeople
  }

  get totalPerPerson() {
    if (this.numberOfPeople <= 0) {
      return 0
    }

    return this.bill / this.numberOfPeople + this.tipPerPerson
  }

  setBill(bill: number) {
    this.bill = bill
  }

  setTipPercentage(tipPercentage: number) {
    this.tipPercentage = tipPercentage
  }

  setNumberOfPeople(numberOfPeople: number) {
    this.numberOfPeople = numberOfPeople
  }
}

export default new TipStore()
