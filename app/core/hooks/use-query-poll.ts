import { useQuery } from 'blitz'
import { useEffect } from 'react'

type AsyncFunc = (...args: any) => Promise<any>

type UseQueryPoll = typeof useQuery

export const useQueryPoll = <Params, Opts>(
  fn: AsyncFunc,
  params: Params,
  options: Opts
) => {
  const resp = useQuery(fn, params, options)

  useEffect(() => {
    if (resp[1].status === 'idle') resp[1].refetch()
  }, [resp[1].status])

  return resp
}
