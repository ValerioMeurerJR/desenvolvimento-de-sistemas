import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Avatar from '.'

describe('Componente Avatar', () => {
  it('Deve renderizar o componente de avatar sem borda', () => {
    render(<Avatar src='teste' />)
    const avatarElement = screen.getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()
  })
  it('Deve renderizar o componente de avatar com borda', () => {
    render(<Avatar src='teste' hasBorder/>)
    const avatarElement = screen.getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()
  })
})