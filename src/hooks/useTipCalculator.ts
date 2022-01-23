import { useState, useMemo } from 'react'

export function useTipCalculator() {
  const [bill, setBill] = useState<number | string>('')
  const [tipPercentage, setTipPercentage] = useState<number | string>('')
  const [numberOfPeople, setNumberOfPeople] = useState<number | string>('')

  const tipPerPerson = useMemo(() => {
    if (numberOfPeople <= 0) {
      return 0
    }

    if (!tipPercentage || isNaN(+tipPercentage)) {
      return 0
    }

    const tip = +bill * (+tipPercentage / 100)

    return tip / +numberOfPeople
  }, [bill, tipPercentage, numberOfPeople])
  const totalPerPerson = useMemo(() => {
    if (numberOfPeople <= 0) {
      return 0
    }

    return +bill / +numberOfPeople + tipPerPerson
  }, [bill, numberOfPeople, tipPerPerson])

  return {
    get: {
      bill,
      tipPercentage,
      numberOfPeople,
      tipPerPerson,
      totalPerPerson,
    },
    set: {
      bill: setBill,
      tipPercentage: setTipPercentage,
      numberOfPeople: setNumberOfPeople,
    },
  }
}
