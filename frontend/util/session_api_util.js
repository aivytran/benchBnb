export const signup = (options) => {
  return $.ajax ({
    method: "POST",
    url: "api/users",
    data: options
  })
}

export const login = (options) => {
  return $.ajax ({
    method: "POST",
    url: "api/session",
    data: options
  })
}

export const logout = () => {
  return $.ajax ({
    method: "DELETE",
    url: "api/session"
  })
}
