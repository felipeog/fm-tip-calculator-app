import { makeAutoObservable } from 'mobx'

type Value = number | string

class TipStore {
  bill: Value = ''
  tipPercentage: Value = ''
  numberOfPeople: Value = ''

  constructor() {
    makeAutoObservable(this)
  }

  get tipPerPerson() {
    if (this.numberOfPeople <= 0) {
      return 0
    }

    if (!this.tipPercentage || isNaN(+this.tipPercentage)) {
      return 0
    }

    const tip = +this.bill * (+this.tipPercentage / 100)

    return tip / +this.numberOfPeople
  }

  get totalPerPerson() {
    if (this.numberOfPeople <= 0) {
      return 0
    }

    return +this.bill / +this.numberOfPeople + this.tipPerPerson
  }

  setBill(bill: Value) {
    this.bill = bill
  }

  setTipPercentage(tipPercentage: Value) {
    this.tipPercentage = tipPercentage
  }

  setNumberOfPeople(numberOfPeople: Value) {
    this.numberOfPeople = numberOfPeople
  }
}

export default new TipStore()
