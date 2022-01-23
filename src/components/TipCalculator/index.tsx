import { useState } from 'react'

import './index.css'
import { Button } from '../Button'
import { Input } from '../Input'
import { useTipCalculator } from '../../hooks/useTipCalculator'
import { TipResult } from '../TipResult'

export function TipCalculator() {
  const [isCustomTipPercentage, setIsCustomTipPercentage] = useState(false)
  const { get, set } = useTipCalculator()

  function resetInputs() {
    set.bill('')
    set.numberOfPeople('')
    set.tipPercentage('')
  }

  function handleTipPercentage(percentage: number) {
    setIsCustomTipPercentage(false)
    set.tipPercentage(percentage)
  }

  function handleCustomTipPercentage() {
    set.tipPercentage('')
    setIsCustomTipPercentage(true)
  }

  const isResetDisabled = [
    get.bill,
    get.numberOfPeople,
    get.tipPercentage,
  ].every((value) => !value)

  return (
    <main className="TipCalculator">
      <div className="TipCalculator__form">
        <Input
          label="Bill"
          name="bill"
          icon="dollar"
          placeholder="0"
          min="0"
          type="number"
          value={get.bill}
          onChange={(event) => {
            set.bill(+event.target.value)
          }}
        />

        <div className="TipCalculator__tip-percentage">
          <p className="TipCalculator__label">Select Tip %</p>

          <div className="TipCalculator__tip-grid">
            <Button
              variant="dark"
              isSelected={!isCustomTipPercentage && get.tipPercentage === 5}
              onClick={() => handleTipPercentage(5)}
            >
              5%
            </Button>
            <Button
              variant="dark"
              isSelected={!isCustomTipPercentage && get.tipPercentage === 10}
              onClick={() => handleTipPercentage(10)}
            >
              10%
            </Button>
            <Button
              variant="dark"
              isSelected={!isCustomTipPercentage && get.tipPercentage === 15}
              onClick={() => handleTipPercentage(15)}
            >
              15%
            </Button>
            <Button
              variant="dark"
              isSelected={!isCustomTipPercentage && get.tipPercentage === 25}
              onClick={() => handleTipPercentage(25)}
            >
              25%
            </Button>
            <Button
              variant="dark"
              isSelected={!isCustomTipPercentage && get.tipPercentage === 50}
              onClick={() => handleTipPercentage(50)}
            >
              50%
            </Button>
            <Input
              name="tip"
              placeholder="Custom"
              min="0"
              type="number"
              value={isCustomTipPercentage ? get.tipPercentage : ''}
              onChange={(event) => {
                set.tipPercentage(+event.target.value)
              }}
              onFocus={handleCustomTipPercentage}
            />
          </div>
        </div>

        <Input
          label="Number of People"
          name="people"
          icon="person"
          placeholder="0"
          min="0"
          type="number"
          value={get.numberOfPeople}
          onChange={(event) => {
            set.numberOfPeople(+event.target.value)
          }}
          condition={{
            checker: (value) => typeof value === 'number' && value <= 0,
            message: "Can't be zero",
          }}
        />
      </div>

      <div className="TipCalculator__results">
        <TipResult label="Tip Amount" value={get.tipPerPerson} />
        <TipResult label="Total" value={get.totalPerPerson} />

        <Button isDisabled={isResetDisabled} onClick={resetInputs}>
          Reset
        </Button>
      </div>
    </main>
  )
}
