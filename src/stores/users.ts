import { detailUser, UsersResponseObjUser } from '../api'

let users: { [key: string]: UsersResponseObjUser} = {}

export const getUserInfos = async (userName: string) => {
  if (users[userName]) {
    return users[userName]
  }
  const userDetails = await detailUser(userName)
  users[userName] = userDetails
  return userDetails
}