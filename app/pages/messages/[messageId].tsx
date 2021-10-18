import { Suspense } from 'react'
import {
  Head,
  Link,
  useRouter,
  useQuery,
  useParam,
  BlitzPage,
  useMutation,
  Routes,
} from 'blitz'
import Layout from 'app/core/layouts/Layout'
import getMessage from 'app/messages/queries/getMessage'
import deleteMessage from 'app/messages/mutations/deleteMessage'

export const Message = () => {
  const router = useRouter()
  const messageId = useParam('messageId', 'number')
  const [deleteMessageMutation] = useMutation(deleteMessage)
  const [message] = useQuery(getMessage, { id: messageId })

  return (
    <>
      <Head>
        <title>Message {message.id}</title>
      </Head>

      <div>
        <h1>Message {message.id}</h1>
        <pre>{JSON.stringify(message, null, 2)}</pre>

        <Link href={Routes.EditMessagePage({ messageId: message.id })}>
          <a>Edit</a>
        </Link>

        <button
          type="button"
          onClick={async () => {
            if (window.confirm('This will be deleted')) {
              await deleteMessageMutation({ id: message.id })
              router.push(Routes.MessagesPage())
            }
          }}
          style={{ marginLeft: '0.5rem' }}
        >
          Delete
        </button>
      </div>
    </>
  )
}

const ShowMessagePage: BlitzPage = () => {
  return (
    <div>
      <p>
        <Link href={Routes.MessagesPage()}>
          <a>Messages</a>
        </Link>
      </p>

      <Suspense fallback={<div>Loading...</div>}>
        <Message />
      </Suspense>
    </div>
  )
}

ShowMessagePage.authenticate = true
ShowMessagePage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowMessagePage
