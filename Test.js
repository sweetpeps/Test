fetch("https://auth.roblox.com/v2/logout", {
"method": "POST",
"credentials": "include",
"headers": {
"x-csrf-token": Roblox.XsrfToken.getToken()
}
})
