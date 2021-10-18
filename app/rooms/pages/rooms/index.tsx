import { withSuspense } from 'app/core/with-suspense'
import getRooms from 'app/rooms/queries/get-rooms'
import getUsers from 'app/users/queries/get-users'
import { useQuery } from 'blitz'
import Link from 'next/link'
import React from 'react'

const RoomsPage = withSuspense(function RoomsPage() {
  const [rooms] = useQuery(getRooms, null, { suspense: false })
  const [users] = useQuery(getUsers, { take: 10 }, { suspense: false })

  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        {rooms?.map((room) => (
          <li key={room.id}>
            <Link href={`/rooms/${room.id}`}>
              <a>{room.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.email}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default RoomsPage
