import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Sidebar from '.'

describe('Componente SideBar', () => {
  it('Deve renderizar o componente de avatar sem borda', () => {
    render(
      <Sidebar
      />
    )

    // const element = screen.getByPlaceholderText('Digite aqui...')
    // expect(element).toBeInTheDocument()
    // expect(element).toHaveValue('Bem vindo')
  })
})