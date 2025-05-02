export const errors = {
  'ApolloError: Invalid token!': 'Token da aplicação inválido!'
}

export function getError(error) {
  if (error) console.error(errors[error])
  return errors[error]
}
