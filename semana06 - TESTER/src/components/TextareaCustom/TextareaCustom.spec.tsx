import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import TextareaCustom from '.'

describe('Componente TextareaCustom', () => {
  it('Deve renderizar o componente com placeholder correto', () => {
    render(
      <TextareaCustom
        message='Bem vindo'
        setMessage={jest.fn()}
        placeHolder='Digite aqui...'
      />
    )
    const textarea = screen.getByPlaceholderText('Digite aqui...')
    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveValue('Bem vindo')
  })
  it('Deve renderizar o componente e chamar a função quando valor alterado', () => {
    const setMessage = jest.fn();
    render(
      <TextareaCustom
        message='Bem vindo'
        setMessage={setMessage}
        placeHolder='Digite aqui...'
        hasPosts
      />
    )
        
    const textarea = screen.getByPlaceholderText('Digite aqui...')
    fireEvent.change(textarea, { target: { value: 'Novo valor'}})
    expect(setMessage).toHaveBeenCalled()
    expect(setMessage).toHaveBeenCalledTimes(1)
    expect(setMessage).toHaveBeenCalledWith("Novo valor")
  })
})