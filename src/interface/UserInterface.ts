export interface LocalUser {
  createTime?: Date
  loginTime?: Date
  username?: string
  password?: string
}

export interface GoogleUser {
  JWTToken?: string
  email?: string
  displayName?: string
  photoURL?: string
  providerId?: string
  localAccount?: string
  localPassword?: string
  role?: string
  createTime?: Date
  loginTime?: Date
}

export interface User {
  [key: string]: any
  JWTToken?: string
  email?: string
  displayName?: string
  photoURL?: string
  providerId?: string
  localAccount?: string
  localPassword?: string
  role?: string
  createTime?: Date
  loginTime?: Date
  username?: string
  password?: string
}
