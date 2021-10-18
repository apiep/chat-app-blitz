import { events } from 'app/core/events'
import { resolver } from 'blitz'
import { z } from 'zod'
import pTimeout from 'p-timeout'
import { Message } from 'db'

const PollMessagesArg = z.object({
  roomId: z.number(),
})

export default resolver.pipe(
  resolver.zod(PollMessagesArg),
  resolver.authorize(),
  async (arg) => {
    const promise = new Promise<Message>((resolve) => {
      console.log('polling new message')
      events.once(`messages:room(${arg.roomId})`, ({ message }) => {
        console.log('got message')
        resolve(message as Message)
      })
    })
    // const res = await pTimeout(promise, 1000)
    const res = await promise

    return res
  }
)
