import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', async () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Barber/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a large logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Barber/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
