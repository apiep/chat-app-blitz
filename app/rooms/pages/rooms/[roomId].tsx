import { withSuspense } from 'app/core/with-suspense'
import createMessage from 'app/messages/mutations/createMessage'
import getMessages from 'app/messages/queries/getMessages'
import pollMessages from 'app/messages/queries/poll-messages'
import getRoomById from 'app/rooms/queries/get-room-by-id'
import { invoke, Link, useParam, useQuery } from 'blitz'
import { Message } from 'db'
import React, { useCallback, useMemo, useState } from 'react'
import { Form, Field } from 'react-final-form'

const RoomPage = withSuspense(function RoomPage() {
  const roomId = useParam('roomId', 'number')
  const [room] = useQuery(getRoomById, { roomId: roomId! })
  const [data, mData] = useQuery(getMessages, {
    where: { chatRoomId: roomId! },
    orderBy: { createdAt: 'desc' },
    take: 10,
  })
  const messages = useMemo(() => data.messages.reverse(), [data.messages])

  const [_, opts] = useQuery(
    pollMessages,
    { roomId: roomId! },
    {
      suspense: false,
      onSuccess: (m: Message) => {
        opts.refetch()
        mData.refetch()
      },
    }
  )

  return (
    <div>
      <Link href="/rooms">
        <a>Room list</a>
      </Link>
      <h1>Room {room?.name}</h1>

      <h3>Messages</h3>
      {messages?.length > 0 && (
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <small>{message.author.email}</small> {message.text}
            </li>
          ))}
        </ul>
      )}
      <Form
        onSubmit={async (values, fns) => {
          await invoke(createMessage, { text: values.text, roomId: roomId! })
          mData.refetch()
        }}
        render={(ctx) => (
          <form onSubmit={ctx.handleSubmit}>
            <Field
              name="text"
              type="text"
              afterSubmit={() => {
                ctx.form.reset()
              }}
              render={(c) => <input autoFocus {...c.input} />}
            />
            <button type="submit">Send</button>
          </form>
        )}
      />
    </div>
  )
})

export default RoomPage
// RoomPage.getLayout = (p) => <Layout>{p}</Layout>
