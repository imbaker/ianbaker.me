import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default() => (
    <div>
        <Layout>
            <h1>Ian Baker</h1><img src="/static/me.jpg" alt="my image" />
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Some other title" />
            </ul>
        </Layout>
    </div>
)
