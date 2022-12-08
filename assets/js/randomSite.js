function randomSite() {
  const sites = document.getElementsByClassName('site')

  if (sites.length > 0) {
    const choiceIndex = Math.floor(Math.random() * sites.length)
    window.open(sites[choiceIndex].attributes.href.value, '_blank').focus()
  }
}
