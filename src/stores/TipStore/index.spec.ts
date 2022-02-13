import { TipStore } from './index'

describe('test TipStore store', () => {
  it('should have default values', () => {
    expect.hasAssertions()

    const tipStore = new TipStore()

    expect(tipStore.bill).toBe(0)
    expect(tipStore.tipPercentage).toBe(0)
    expect(tipStore.numberOfPeople).toBe(0)
  })
})
