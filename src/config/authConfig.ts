import { createAuth0 } from '@auth0/auth0-vue'

export const auth0 = createAuth0({
  domain: 'dev-vh7amm2j4fer6f52.us.auth0.com',
  clientId: 'm3ngN1zcDvLLA5IU6KWzvsAFy6NLSDKO',
  authorizationParams: {
    redirect_uri: window.location.origin
  },
  useRefreshTokens: true,
  cacheLocation: 'localstorage'
})
