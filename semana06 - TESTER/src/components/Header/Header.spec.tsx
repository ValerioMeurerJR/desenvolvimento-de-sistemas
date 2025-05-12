import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '.'


describe('Componente Header', () => {
  it('Deve renderizar o componente de Header texto', () => {
    render(<Header />)
    const headerElement = screen.getByText('Feed')
    expect(headerElement).toBeInTheDocument()
  })
  it('Deve renderizar o componente de Header imagem', () => {
    render(<Header />)
    const headerElement = screen.getByAltText('Logo')
    expect(headerElement).toBeInTheDocument()
  })
})