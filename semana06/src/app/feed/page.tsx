'use client'
import Sidebar from "@/components/Sidebar";
import "./styles.css"
import Header from "@/components/Header"
import Post from "@/components/Post";
import { FormEvent, useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import TextareaCustom from "@/components/TextareaCustom";
import ButtonCustom from "@/components/ButtonCustom";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Comment = {
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
    comments: Comment[];
}


export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>("")

    useEffect(() => {
        loadPost();
    }, [])

    async function loadPost() {
        // const response = await axios.get('http://localhost:3001/posts', {
        //     params: {
        //         _page: 1,
        //         _per_page: 5
        //         // _sort: "publishedAt",
        //         // _order: "DESC"
        //     }
        // })
        const response = await axios.get('http://localhost:3001/posts')
        const postSort = response.data.sort((a: any, b: any) => (
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        ))
        setPosts(postSort)
        console.log(postSort)
    }

    async function HandleCreatePost(event: FormEvent) {
        event.preventDefault();
        if (!content) {
            Swal.fire({
                text: 'DIGITE O POST',
                icon: 'error',
                showConfirmButton: false
            })
            return false;
        }
        const newPost = {
            id: String(posts.length + 1),
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Valerio Meurer",
                role: "Técnico em Informática",
                avatarUrl: "https://github.com/ValerioMeurerJR.png"
            }
        }

        await axios.post('http://localhost:3001/posts', newPost)
        await loadPost()
        setContent('')
    }
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <main className="main">
                    <form className="form-post" onSubmit={HandleCreatePost}>
                        <TextareaCustom
                            message={content}
                            setMessage={setContent}
                            hasPosts
                            placeHolder="Oque você está pensando..."
                        />
                        <footer className="footerButtonPublicar">
                            <ButtonCustom />
                        </footer>
                    </form>
                    {
                        posts.map((post: any) => {
                            return <Post post={post} key={post.id} setPost={setPosts}/>
                        })
                    }
                </main>
            </div>
        </div>
    );
}
