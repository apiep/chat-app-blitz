import getUser from 'app/users/queries/get-user'
import { resolver } from 'blitz'
import db from 'db'
import { z } from 'zod'

export const CreateChatRoomWithUser = z.object({
  userId: z.number(),
})
export default resolver.pipe(
  resolver.authorize(),
  resolver.zod(CreateChatRoomWithUser),
  async (arg: z.infer<typeof CreateChatRoomWithUser>, ctx) => {
    const currentUserId = ctx.session.userId

    let room = await db.chatRoom.findFirst({
      where: {
        people: {
          every: {
            AND: [{ id: arg.userId }, { id: currentUserId }],
          },
        },
      },
      select: {
        id: true,
        name: true,
        messages: true,
        people: true,
      },
    })

    if (room == null) {
      room = await db.chatRoom.create({
        data: {
          name: `Chat Room ${currentUserId} ${arg.userId}`,
          people: {
            connect: [{ id: currentUserId }, { id: arg.userId }],
          },
        },
        select: {
          id: true,
          name: true,
          messages: true,
          people: true,
        },
      })
    }

    return room
  } //
)
