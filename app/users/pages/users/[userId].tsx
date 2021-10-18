import { withSuspense } from 'app/core/with-suspense'
import createChatRoomWithUser from 'app/rooms/mutations/create-chat-room-with-user'
import getUser from 'app/users/queries/get-user'
import { useParam, useQuery, invoke, useRouter } from 'blitz'
import { useCallback } from 'react'

export default withSuspense(() => {
  const router = useRouter()
  const userId = useParam('userId', 'number')
  const [user] = useQuery(getUser, { where: { id: userId } })

  const onStartChat = useCallback(async () => {
    const room = await invoke(createChatRoomWithUser, { userId })
    router.push(`/rooms/${room.id}`)
  }, [userId])

  return (
    <div>
      <h1>User: {user?.email}</h1>
      <button type="button" onClick={onStartChat}>
        Start Chat with {user?.email}
      </button>
    </div>
  )
})
