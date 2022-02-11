import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import './index.css'
import { Button } from '../Button'
import { Input } from '../Input'
import { TipResult } from '../TipResult'
import TipStore from '../../stores/TipStore'

const TIP_PERCENTAGES = [5, 10, 15, 25, 50]

export const TipCalculator = observer(function TipCalculator() {
  const [isCustomTipPercentage, setIsCustomTipPercentage] = useState(false)

  function resetInputs() {
    TipStore.setBill(0)
    TipStore.setNumberOfPeople(0)
    TipStore.setTipPercentage(0)
  }

  function handleTipPercentage(percentage: number) {
    setIsCustomTipPercentage(false)
    TipStore.setTipPercentage(percentage)
  }

  function handleCustomTipPercentage() {
    if (!isCustomTipPercentage) {
      TipStore.setTipPercentage(0)
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
          value={TipStore.bill || ''}
          onChange={(event) => {
            TipStore.setBill(+event.target.value)
          }}
        />

        <div className="TipCalculator__tip-percentage">
          <p className="TipCalculator__label">Select Tip %</p>

          <div className="TipCalculator__tip-grid">
            {TIP_PERCENTAGES.map((percentage) => (
              <Button
                key={percentage}
                variant="dark"
                isSelected={
                  !isCustomTipPercentage &&
                  TipStore.tipPercentage === percentage
                }
                onClick={() => handleTipPercentage(percentage)}
              >
                {percentage}%
              </Button>
            ))}

            <Input
              name="tip"
              placeholder="Custom"
              min="0"
              type="number"
              value={isCustomTipPercentage ? TipStore.tipPercentage || '' : ''}
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
          value={TipStore.numberOfPeople || ''}
          onChange={(event) => {
            TipStore.setNumberOfPeople(+event.target.value)
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
