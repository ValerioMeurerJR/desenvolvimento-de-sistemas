import '@testing-library/jest-dom'
import ButtonCustom from "."
import { fireEvent, render, screen } from '@testing-library/react'

describe('Test Button Custom', () => {
  it('Deve renderizar o componente e testar', () => {
    render(<ButtonCustom />)

    const button = screen.getByText('Publicar')

    expect(button).toBeInTheDocument()
  })
  it('SDeve renderizar o componente e testar passar valor', () => {
    render(<ButtonCustom text="Entrar" />)

    const button = screen.getByText('Entrar')

    expect(button).toBeInTheDocument()
  })
  it('Should render button custom in screen', () => {
    render(<ButtonCustom handle={() => { }} />)

    const button = screen.getByText('Publicar')

    expect(button).toBeInTheDocument()
  })
  it('Deve renderizar o componente e testar click no botão', () => {
    const handleMock = jest.fn();
    render(<ButtonCustom handle={handleMock} text="Entrar" />)

    const button = screen.getByText('Entrar')
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleMock).toHaveBeenCalled()
    expect(handleMock).toHaveBeenCalledTimes(1)
    
  })
})