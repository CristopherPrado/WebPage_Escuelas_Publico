(function redirectToSinglePageApplication(location) {
  const repositoryName = location.pathname.split('/').filter(Boolean)[0]
  const repositoryBase = repositoryName ? `/${repositoryName}/` : '/'

  if (!location.pathname.startsWith(repositoryBase)) {
    location.replace(`${location.origin}${repositoryBase}`)
    return
  }

  const route = location.pathname.slice(repositoryBase.length)
  const query = location.search
    .slice(1)
    .replace(/&/g, '~and~')
  const redirectUrl = `${location.origin}${repositoryBase}?/${route}${query ? `&${query}` : ''}${location.hash}`

  location.replace(redirectUrl)
})(window.location)
