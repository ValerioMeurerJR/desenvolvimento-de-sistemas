'use client'
import Sidebar from "@/components/Sidebar";
import "./styles.css"
import Header from "@/components/Header"
import Post from "@/components/Post";

export default function Feed() {

    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <main className="main">
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                    <Post post={{} as any} />
                </main>
            </div>
        </div>
    );
}
