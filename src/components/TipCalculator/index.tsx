import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import './index.css'
import { Button } from '../Button'
import { Input } from '../Input'
import { TipResult } from '../TipResult'
import TipStore from '../../stores/TipStore'

export const TipCalculator = observer(() => {
  const [isCustomTipPercentage, setIsCustomTipPercentage] = useState(false)

  function resetInputs() {
    TipStore.setBill('')
    TipStore.setNumberOfPeople('')
    TipStore.setTipPercentage('')
  }

  function handleTipPercentage(percentage: number) {
    setIsCustomTipPercentage(false)
    TipStore.setTipPercentage(percentage)
  }

  function handleCustomTipPercentage() {
    if (!isCustomTipPercentage) {
      TipStore.setTipPercentage('')
      setIsCustomTipPercentage(true)
    }
  }

  const isResetDisabled = [
    TipStore.bill,
    TipStore.numberOfPeople,
    TipStore.tipPercentage,
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
          value={TipStore.bill}
          onChange={(event) => {
            TipStore.setBill(+event.target.value)
          }}
        />

        <div className="TipCalculator__tip-percentage">
          <p className="TipCalculator__label">Select Tip %</p>

          <div className="TipCalculator__tip-grid">
            <Button
              variant="dark"
              isSelected={
                !isCustomTipPercentage && TipStore.tipPercentage === 5
              }
              onClick={() => handleTipPercentage(5)}
            >
              5%
            </Button>
            <Button
              variant="dark"
              isSelected={
                !isCustomTipPercentage && TipStore.tipPercentage === 10
              }
              onClick={() => handleTipPercentage(10)}
            >
              10%
            </Button>
            <Button
              variant="dark"
              isSelected={
                !isCustomTipPercentage && TipStore.tipPercentage === 15
              }
              onClick={() => handleTipPercentage(15)}
            >
              15%
            </Button>
            <Button
              variant="dark"
              isSelected={
                !isCustomTipPercentage && TipStore.tipPercentage === 25
              }
              onClick={() => handleTipPercentage(25)}
            >
              25%
            </Button>
            <Button
              variant="dark"
              isSelected={
                !isCustomTipPercentage && TipStore.tipPercentage === 50
              }
              onClick={() => handleTipPercentage(50)}
            >
              50%
            </Button>
            <Input
              name="tip"
              placeholder="Custom"
              min="0"
              type="number"
              value={isCustomTipPercentage ? TipStore.tipPercentage : ''}
              onChange={(event) => {
                TipStore.setTipPercentage(+event.target.value)
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
          value={TipStore.numberOfPeople}
          onChange={(event) => {
            TipStore.setNumberOfPeople(+event.target.value)
          }}
          condition={{
            checker: (value) => typeof value === 'number' && value <= 0,
            message: "Can't be zero",
          }}
        />
      </div>

      <div className="TipCalculator__results">
        <TipResult label="Tip Amount" value={TipStore.tipPerPerson} />
        <TipResult label="Total" value={TipStore.totalPerPerson} />

        <Button isDisabled={isResetDisabled} onClick={resetInputs}>
          Reset
        </Button>
      </div>
    </main>
  )
})
