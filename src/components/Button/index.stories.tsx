import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './index'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  children: 'Disabled',
}

export const Selected = Template.bind({})
Selected.args = {
  isSelected: true,
  children: 'Selected',
}
