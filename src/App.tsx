import Logo from './assets/logo.svg'
import { Input } from './components/Input'
import { useTipCalculator } from './hooks/useTipCalculator'

export function App() {
  const { value, set } = useTipCalculator()

  function getFormattedValue(value: number) {
    if (!value || isNaN(value)) {
      return '$0.00'
    }

    return `$${value.toFixed(2)}`
  }

  function resetInputs() {
    set.bill(0)
    set.numberOfPeople(0)
    set.tipPercentage(0)
  }

  return (
    <div>
      {/* <Logo /> */}

      <Input
        label="Bill"
        name="bill"
        icon="dollar"
        placeholder="0"
        min="0"
        type="number"
        value={value.bill}
        onChange={(event) => {
          set.bill(+event.target.value)
        }}
      />

      <Input
        label="Select Tip %"
        name="tip"
        placeholder="Custom"
        min="0"
        type="number"
        value={value.tipPercentage}
        onChange={(event) => {
          set.tipPercentage(+event.target.value)
        }}
      />

      <Input
        label="Number of People"
        name="people"
        icon="person"
        placeholder="0"
        min="0"
        type="number"
        value={value.numberOfPeople}
        onChange={(event) => {
          set.numberOfPeople(+event.target.value)
        }}
        condition={{
          checker: (value) => value <= 0,
          message: "Can't be zero",
        }}
      />

      <p>tip / person: {getFormattedValue(value.tipPerPerson)}</p>
      <p>total / person: {getFormattedValue(value.totalPerPerson)}</p>

      <button onClick={resetInputs}>Reset</button>
    </div>
  )
}
