import { resolver } from 'blitz'
import db, { Prisma } from 'db'

export type GetUsersParams = Pick<
  Prisma.UserFindManyArgs,
  'where' | 'skip' | 'take'
>

export default resolver.pipe(
  resolver.authorize(), //
  async (arg: GetUsersParams, ctx) => {
    const users = await db.user.findMany({
      where: { ...arg.where, NOT: { id: ctx.session.userId } },
      skip: arg.skip,
      take: arg.take,
      orderBy: { createdAt: 'asc' },
    })

    return users
  }
)
