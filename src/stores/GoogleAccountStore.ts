import { defineStore } from 'pinia'

/* 
JwtToken：用户的 JWT 令牌。这是一个必需的字段，因为它用于验证用户的身份。

email：用户的电子邮件地址。这是一个可选的字段，但是它可以用于在用户忘记他们的 ID 时找回他们的账户。

displayName：用户的显示名称。这也是一个可选的字段，但是它可以用于在用户界面中显示用户的名称。

photoURL：用户的照片 URL。这也是一个可选的字段，但是它可以用于在用户界面中显示用户的照片。

providerId：身份提供商的 ID。对于 Google 登录，这将是 'google.com'。
*/

export const useGoogleAccountStore = defineStore('googleAccount', {
  state: (): {
    JWTToken: string
    email: string
    displayName: string
    photoURL: string
    providerId: string,
    jti:string
  } => {
    return {
      JWTToken: '',
      email: '',
      displayName: '',
      photoURL: '',
      providerId: '',
      jti:''
    }
  },
  actions: {},
  getters: {}
})
