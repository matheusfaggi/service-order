import React, { useState } from 'react'

type Auth = {
  userToken: string
  SignIn?: any
  SignOut?: any
}
export const AuthContext = React.createContext<Auth>({ userToken: '' })
