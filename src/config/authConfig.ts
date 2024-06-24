import { createAuth0 } from '@auth0/auth0-vue'

export const auth0 = createAuth0({
  domain: 'dev-vh7amm2j4fer6f52.us.auth0.com',
  clientId: 'm3ngN1zcDvLLA5IU6KWzvsAFy6NLSDKO',
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: 'https://dev-vh7amm2j4fer6f52.us.auth0.com/api/v2/',
    scope: 'openid profile email offline_access'
  },
  useRefreshTokens: true,
  cacheLocation: 'localstorage'
})

export const getAccessToken = async () => {
  const accessToken = await auth0.getAccessTokenSilently({})
  return accessToken
}
