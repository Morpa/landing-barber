import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Barber</Heading>)
    expect(screen.getByRole('heading', { name: /Barber/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Barber</Heading>)
    expect(screen.getByRole('heading', { name: /Barber/i })).toHaveStyle({
      color: '#000000'
    })
  })

  it('should render a heading whith a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Barber</Heading>)
    expect(screen.getByRole('heading', { name: /Barber/i })).toHaveStyle({
      'border-left': '0.7rem solid #FF9000'
    })
  })

  it('should render a heading whith a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Barber</Heading>)
    expect(screen.getByRole('heading', { name: /Barber/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #FF9000',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Barber</Heading>)

    expect(screen.getByRole('heading', { name: /Barber/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a heading whith a small size', () => {
    renderWithTheme(<Heading size="small">Barber</Heading>)
    expect(screen.getByRole('heading', { name: /Barber/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /Barber/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #f5cb3b' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #f5cb3b', {
      modifier: '::after'
    })
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="orange" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #FF9000' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #FF9000', {
      modifier: '::after'
    })
  })
})
