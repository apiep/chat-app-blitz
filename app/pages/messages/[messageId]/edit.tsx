import { Suspense } from 'react'
import {
  Head,
  Link,
  useRouter,
  useQuery,
  useMutation,
  useParam,
  BlitzPage,
  Routes,
} from 'blitz'
import Layout from 'app/core/layouts/Layout'
import getMessage from 'app/messages/queries/getMessage'
import updateMessage from 'app/messages/mutations/updateMessage'
import { MessageForm, FORM_ERROR } from 'app/messages/components/MessageForm'

export const EditMessage = () => {
  const router = useRouter()
  const messageId = useParam('messageId', 'number')
  const [message, { setQueryData }] = useQuery(
    getMessage,
    { id: messageId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateMessageMutation] = useMutation(updateMessage)

  return (
    <>
      <Head>
        <title>Edit Message {message.id}</title>
      </Head>

      <div>
        <h1>Edit Message {message.id}</h1>
        <pre>{JSON.stringify(message, null, 2)}</pre>

        <MessageForm
          submitText="Update Message"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateMessage}
          initialValues={message}
          onSubmit={async (values) => {
            try {
              const updated = await updateMessageMutation({
                id: message.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowMessagePage({ messageId: updated.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditMessagePage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditMessage />
      </Suspense>

      <p>
        <Link href={Routes.MessagesPage()}>
          <a>Messages</a>
        </Link>
      </p>
    </div>
  )
}

EditMessagePage.authenticate = true
EditMessagePage.getLayout = (page) => <Layout>{page}</Layout>

export default EditMessagePage
