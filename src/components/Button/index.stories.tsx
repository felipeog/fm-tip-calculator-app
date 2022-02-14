import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { useState } from 'react'

import { Button } from './index'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'light',
  isSelected: false,
  isDisabled: false,
  className: 'stories-button',
  children: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  isDisabled: true,
}

export const Selected = Template.bind({})
Selected.args = {
  ...Default.args,
  isSelected: true,
}

export const ToggleOnClick: ComponentStory<typeof Button> = (args) => {
  const [isSelected, setIsSelected] = useState(false)

  function toggleSelected() {
    setIsSelected((prevIsSelected) => !prevIsSelected)
  }

  return <Button {...args} isSelected={isSelected} onClick={toggleSelected} />
}
ToggleOnClick.args = {
  ...Default.args,
}

export const OnClick = Template.bind({})
OnClick.args = {
  ...Default.args,
  onClick: () => console.log('onClick'),
}
OnClick.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await userEvent.click(canvas.getByText('Button'))
}
