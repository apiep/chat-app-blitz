import { events } from 'app/core/events'
import { resolver } from 'blitz'
import db from 'db'
import { z } from 'zod'

const CreateMessage = z.object({
  text: z.string(),
  roomId: z.number(),
})

export default resolver.pipe(
  resolver.zod(CreateMessage),
  resolver.authorize(),
  async (input: z.infer<typeof CreateMessage>, ctx) => {
    const authorId = ctx.session.userId
    const message = await db.message.create({
      data: {
        text: input.text,
        chatRoomId: input.roomId,
        authorId,
      },
    })

    events.emit(`messages:room(${input.roomId})`, {
      message,
    })

    return message
  } //
)
