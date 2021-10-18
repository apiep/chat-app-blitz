import { SecurePassword } from 'blitz'
import _ from 'lodash'
import db, { User } from './index'
import ora from './ora'
/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */

const maxUsers = 2_000
const maxParticipants = 5
const bufferSize = 100

type UserData = {
  email: string
  hashedPassword?: string
}
async function* generateUser(): AsyncGenerator<UserData> {
  let count = 0
  while (true) {
    yield {
      email: `user-${count++}@mail.co`,
      hashedPassword: await SecurePassword.hash('qwe12345'),
    }
  }
}

const spinner = ora('Generating user').start()
async function* generateBufferedUser(): AsyncGenerator<UserData[]> {
  const buffer: UserData[] = []
  for await (const user of generateUser()) {
    buffer.push(user)
    if (buffer.length >= bufferSize) {
      yield buffer
      buffer.length = 0
    }
  }
}

const seed = async () => {
  let users: Partial<User>[] = []

  for await (const data of generateBufferedUser()) {
    spinner.text = `Inserting users: ${users.length.toLocaleString()} of ${maxUsers.toLocaleString()}`

    const _users = await Promise.all(
      data.map((data) => db.user.create({ data }))
    )
    users.push(..._users)

    if (users.length >= maxUsers) break
  }

  const participants = _.chunk(users, maxParticipants)
  const totalParticipantsData = participants.length

  while (participants.length > 0) {
    const _participants = participants.splice(0, 1_000)
    spinner.text = `Inserting participants: ${participants.length.toLocaleString()} of ${totalParticipantsData.toLocaleString()}`

    await Promise.all(
      _participants.map((people) => {
        return db.chatRoom.create({
          data: {
            name: `Chat Room ${people.map((it) => it.id).join(' ')}`,
            people: {
              connect: people.map((it) => ({ id: it.id })),
            },
            messages: {
              create: people.map((user) => ({
                text: `Message ${user.id}`,
                author: {
                  connect: { id: user.id },
                },
              })),
            },
          },
        })
      })
    )
  }
  spinner.succeed()
}

export default seed
