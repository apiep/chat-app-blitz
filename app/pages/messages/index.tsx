import { Suspense } from 'react'
import {
  Head,
  Link,
  usePaginatedQuery,
  useRouter,
  BlitzPage,
  Routes,
} from 'blitz'
import Layout from 'app/core/layouts/Layout'
import getMessages from 'app/messages/queries/getMessages'

const ITEMS_PER_PAGE = 100

export const MessagesList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ messages, hasMore }] = usePaginatedQuery(getMessages, {
    orderBy: { id: 'asc' },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <Link href={Routes.ShowMessagePage({ messageId: message.id })}>
              <a>{message.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <button disabled={page === 0} onClick={goToPreviousPage}>
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage}>
        Next
      </button>
    </div>
  )
}

const MessagesPage: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Messages</title>
      </Head>

      <div>
        <p>
          <Link href={Routes.NewMessagePage()}>
            <a>Create Message</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <MessagesList />
        </Suspense>
      </div>
    </>
  )
}

MessagesPage.authenticate = true
MessagesPage.getLayout = (page) => <Layout>{page}</Layout>

export default MessagesPage
