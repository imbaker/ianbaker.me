import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default() => (
    <div>
        <Layout>
            <h1>Ian Baker</h1><img src="/static/me.jpg" alt="my image" />
            <ul>
                <PostLink id="hello-nextjs" title="Hello Next.js" />
                <PostLink id="some-other-titlejs" title="Some other title" />
            </ul>
        </Layout>
    </div>
)
