import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Comment from '.'

const mockComment = {
  id: "15",
  comment: "hello word",
  like: 15,
  publishedAt: new Date(),
  author: {
    name: "Joe Doe",
    role: "Dev",
    avatarUrl: "url",
  }
}
describe('Componente Comment', () => {
  it('Deve renderizar o componente de Comment', () => {
    render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={jest.fn()} />)  
    expect(screen.getByText("Joe Doe", {exact: false})).toBeInTheDocument();
    expect(screen.getByText("hello word")).toBeInTheDocument();
    expect(screen.getByText(15)).toBeInTheDocument();
    expect(screen.getByText("Aplaudir")).toBeInTheDocument();
  })
  it('Deve verificar se a função HandleLike foi chamada com ID correto', () => {
    const handleLike = jest.fn()
    render(<Comment comment={mockComment} handleDelete={jest.fn()} handleLike={handleLike} />) 
    const likeButton = screen.getByText('Aplaudir')
    
    fireEvent.click(likeButton)

    expect(handleLike).toHaveBeenCalled()
    expect(handleLike).toHaveBeenCalledTimes(1)
    expect(handleLike).toHaveBeenCalledWith(expect.any(Object), "15")
  })
  it('Deve verificar se a função HandleDelete foi chamada com ID correto', () => {
    const handleDelete = jest.fn()
    render(<Comment comment={mockComment} handleLike={jest.fn()} handleDelete={handleDelete} />) 
    const deleteButton = screen.getByTestId("deleteButton")
    
    fireEvent.click(deleteButton)

    expect(handleDelete).toHaveBeenCalled()
    expect(handleDelete).toHaveBeenCalledTimes(1)
    expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "15")
  })
})