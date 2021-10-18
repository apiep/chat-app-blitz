import { NotFoundError, resolver } from 'blitz'
import db, { Prisma } from 'db'

type GetUserArg = Pick<Prisma.UserFindManyArgs, 'where'>
export default resolver.pipe(
  resolver.authorize(), //
  async (arg: GetUserArg) => {
    const user = await db.user.findFirst({ where: arg.where })

    if (user == null) throw new NotFoundError('User not found')
    return user
  }
)
