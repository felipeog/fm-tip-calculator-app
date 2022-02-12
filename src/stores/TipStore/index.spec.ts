import { TipStore } from './index'

describe('test TipStore store', () => {
  it('should have default values', () => {
    expect.hasAssertions()

    const tipStore = new TipStore()

    expect(tipStore.bill).toBe(0)
    expect(tipStore.tipPercentage).toBe(0)
    expect(tipStore.numberOfPeople).toBe(0)
  })

  it('should set new values', () => {
    expect.hasAssertions()

    const tipStore = new TipStore()

    tipStore.setBill(100)
    tipStore.setTipPercentage(10)
    tipStore.setNumberOfPeople(2)

    expect(tipStore.bill).toBe(100)
    expect(tipStore.tipPercentage).toBe(10)
    expect(tipStore.numberOfPeople).toBe(2)
  })

  it('should calculate values', () => {
    expect.hasAssertions()

    const tipStore = new TipStore()

    tipStore.setBill(100)
    tipStore.setTipPercentage(10)
    tipStore.setNumberOfPeople(2)

    expect(tipStore.tipPerPerson).toBe(5)
    expect(tipStore.totalPerPerson).toBe(55)
  })
})
