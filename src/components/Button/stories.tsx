import { Story, Meta } from '@storybook/react/types-6-0'
import { ArrowRightAlt } from '@styled-icons/material-outlined/ArrowRightAlt'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Sign In'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Sign In',
  icon: <ArrowRightAlt />
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Sign In',
  as: 'a',
  href: 'link'
}
