import { Link, useRouter, useMutation, BlitzPage, Routes } from 'blitz'
import Layout from 'app/core/layouts/Layout'
import createMessage from 'app/messages/mutations/createMessage'
import { MessageForm, FORM_ERROR } from 'app/messages/components/MessageForm'

const NewMessagePage: BlitzPage = () => {
  const router = useRouter()
  const [createMessageMutation] = useMutation(createMessage)

  return (
    <div>
      <h1>Create New Message</h1>

      <MessageForm
        submitText="Create Message"
        // TODO use a zod schema for form validation
        //  - Tip: extract mutation's schema into a shared `validations.ts` file and
        //         then import and use it here
        // schema={CreateMessage}
        // initialValues={{}}
        onSubmit={async (values) => {
          try {
            const message = await createMessageMutation(values)
            router.push(Routes.ShowMessagePage({ messageId: message.id }))
          } catch (error: any) {
            console.error(error)
            return {
              [FORM_ERROR]: error.toString(),
            }
          }
        }}
      />

      <p>
        <Link href={Routes.MessagesPage()}>
          <a>Messages</a>
        </Link>
      </p>
    </div>
  )
}

NewMessagePage.authenticate = true
NewMessagePage.getLayout = (page) => (
  <Layout title={'Create New Message'}>{page}</Layout>
)

export default NewMessagePage
