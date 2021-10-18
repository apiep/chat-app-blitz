import { paginate, resolver } from 'blitz'
import db, { Prisma } from 'db'

interface GetMessagesInput
  extends Pick<
    Prisma.MessageFindManyArgs,
    'where' | 'orderBy' | 'skip' | 'take'
  > {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetMessagesInput) => {
    const {
      items: messages,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.message.count({ where }),
      query: (paginateArgs) =>
        db.message.findMany({
          ...paginateArgs,
          where,
          orderBy,
          select: {
            id: true,
            author: true,
            chatRoom: true,
            text: true,
            createdAt: true,
          },
        }),
    })

    return {
      messages,
      nextPage,
      hasMore,
      count,
    }
  }
)
