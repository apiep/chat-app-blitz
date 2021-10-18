import { resolver } from 'blitz'
import db from 'db'

export default resolver.pipe(
  resolver.authorize(), //
  async (arg, ctx) => {
    const userId = ctx.session?.userId
    console.log('userId', userId)
    const rooms = db.chatRoom.findMany({
      where: {
        people: {
          some: {
            id: ctx.session.userId,
          },
        },
      },
    })
    return rooms
  }
)
