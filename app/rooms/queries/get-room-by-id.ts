import { NotFoundError, resolver } from 'blitz'
import db from 'db'
import { z } from 'zod'

export const Params = z.object({
  roomId: z.number(),
})

export default resolver.pipe(
  resolver.zod(Params), //
  resolver.authorize(),
  async (arg: z.infer<typeof Params>, ctx) => {
    const room = await db.chatRoom.findFirst({
      where: {
        id: arg.roomId,
        people: {
          some: { id: ctx.session.userId },
        },
      },
    })

    if (room == null) throw new NotFoundError('Room not found')

    return room
  }
)
