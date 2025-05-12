'use client'
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Avatar from "../Avatar"
import "./styles.css"
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextareaCustom from "../TextareaCustom";
import ButtonCustom from "../ButtonCustom";
import Swal from "sweetalert2";
import axios from "axios";
import {v4 as uuid} from "uuid";
import Comment from "../Comment";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Coment = {
    id: string;
    author: Author;
    comment: string;
    like: number;
    publishedAt: Date;
}
type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Coment[];
}

type PostProps = {
    setPost: Dispatch<SetStateAction<Post[]>>;
    post: Post
}

export default function Post({ post, setPost }: PostProps) {
    const [newComment, setNewComment] = useState<string>('');

    async function loadPost() {
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`)
        setPost((prev: Post[]) => (
            prev.map(prevPost => (
                prevPost.id == post.id ? response.data : prevPost
            ))
        ))
    }

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        if (!newComment) {
            Swal.fire({
                text: 'DIGITE UM COMENTÁRIO',
                icon: 'error',
                showConfirmButton: false
            })
            return false;
        }

        const comment = {
            id: uuid(),
            comment: newComment,
            publishedAt: new Date().toISOString(),
            like: 0,
            author: {
                name: "Valerio Meurer",
                role: "Técnico em Informática",
                avatarUrl: "https://github.com/ValerioMeurerJR.png"
            }
        }
        const comments = post.comments?.length ? [...post.comments, comment] : [comment]
        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comments
        })
        setNewComment("")
        loadPost()
    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    const commentsSort = post.comments?.sort((a: any, b: any) => (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ))

    async function handleDeleteComment(event: MouseEvent, id: string) {
        event.preventDefault();
        console.log("Teste")
        const comentsFilter = post.comments.filter(comment => comment.id !== id);
        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": comentsFilter
        })
        
        loadPost();
    }

    async function handleLikeComment(event: MouseEvent, id: string) {
        event.preventDefault();
        const response = await axios.get(`http://localhost:3001/posts/${post.id}`)
        const test = response.data
        const commentUpdated = test.comments.map((comment: any) => {
            if (comment.id === id) {
                return { ...comment, like: comment.like + 1 };
            }
            return comment;
        })

        await axios.patch(`http://localhost:3001/posts/${post.id}`, {
            "comments": commentUpdated
        })

        loadPost();
    }


    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={post.author.avatarUrl} hasBorder />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time>
                    {dateFormat}
                </time>
            </header>
            <div className="content">
                <p>
                    {post.content}
                </p>
            </div>

            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentário</strong>
                <TextareaCustom
                    message={newComment}
                    setMessage={setNewComment}
                    placeHolder="Deixe um comentário..."
                />
                <footer>
                    <ButtonCustom />
                </footer>
            </form>
            {
                post.comments?.length &&  (
                    commentsSort.map((item: Coment) => (
                        <Comment 
                        key={item.id} 
                        comment={item} 
                        handleDelete={handleDeleteComment} 
                        handleLike={handleLikeComment} 
                        />
                    ))
                )
            }
        </article> 
    )
}  