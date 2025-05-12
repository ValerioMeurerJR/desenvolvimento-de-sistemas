import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Feed from './page'
import axios from 'axios'

jest.mock('axios')

const mockAxios = axios as jest.Mocked<typeof axios>;

const mocksPosts = [
  {
    id: "1",
    author: {
      name: "Post Alice Silva",
      role: "Desenvolvedora Front-end",
      avatarUrl: "https://github.com/benedettmanu.png"
    },
    publishedAt: new Date("2024-04-09").toISOString(),
    content: "Post 1",
    comments: []
  },
  {
    id: "2",
    author: {
      name: "Post Carlos Souza",
      role: "Engenheiro de Software",
      avatarUrl: "https://github.com/marcuss83.png"
    },
    publishedAt: new Date("2024-04-11").toISOString(),
    content: "Post 2",
    comments: []
  },
  {
    id: "3",
    author: {
      name: "Post Mariana Oliveira",
      role: "UX Designer",
      avatarUrl: "https://github.com/niipvargas.png"
    },
    publishedAt: new Date("2024-04-10").toISOString(),
    content: "Post 3",
    comments: []
  }
];


describe('Pagina do Feed', () => {
  beforeEach(() => {
    mockAxios.get.mockResolvedValue({ data: mocksPosts });
    mockAxios.post.mockResolvedValue({});
  });

  it('Deve renderizar a pagina do Feed', async () => {
    render(<Feed />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Carregando...')).not.toBeInTheDocument();
    })
    const post = screen.getAllByTestId("post-test")
    expect(post.length).toBe(3)
    expect(post[0]).toHaveTextContent('Post 2')
    expect(post[1]).toHaveTextContent('Post 3')
    expect(post[2]).toHaveTextContent('Post 1')

    const textarea = screen.getByPlaceholderText("Oque você está pensando...")
    expect(textarea).toBeInTheDocument()
    fireEvent.change(textarea, { target: { value: "Meu Novo Post" }})
    expect(textarea).toHaveValue("Meu Novo Post")

    const button = screen.getByText('Publicar')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    await waitFor(() => {
      expect(mockAxios.post).toHaveBeenCalledWith(
        "http://localhost:3003/posts",
        expect.objectContaining({
          content: "Meu Novo Post"
        })
      )
    })
  })
})