import { getSortedPostsData } from "@/lib/post"
import ListItem from "./ListItem"
import Layout from '../components/Layout/Layout';

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <Layout>
            <section className="mt-6 mx-auto max-w-2xl">
                <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
                <ul className="w-full">
                    {posts.map((post: any) => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </Layout>
    )
}