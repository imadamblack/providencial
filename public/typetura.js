function typeturaInit (el) {
  function typetura () {
    for (let i = 0; i < el.length; i++) {
      const element = el[i]

      element.style.setProperty('--tt-bind', element.offsetWidth)

      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(function (entries) {
          for (let j = 0; j < entries.length; j++) {
            const entry = entries[j]

            element.style.setProperty('--tt-bind', Math.round(entry.contentRect.width))
          }
        })
        resizeObserver.observe(element)
      }
    }
  }
  typetura()

  // Create a stylesheet for typetura's custom properties
  const stylesheet = document.createElement('style')
  // Typetura's custom properties
  stylesheet.innerHTML =
    ':root{--tt-ease:linear;--tt-max:1366}*,:before,:after,:root{--tt-key:none;animation:var(--tt-key) 1s var(--tt-ease) 1 calc(-1s * var(--tt-bind) / var(--tt-max)) both paused}'
  // Write typetura proprties to the top of the document head to avoid cascade conflicts
  document.head.insertBefore(stylesheet, document.head.firstChild)

  // On resize recalculate width
  window.onresize = typetura
}

// Contexts to query with Typetura
const typeturaContexts = [':root', '.typetura']

// Initiate Typetura on page load
document.onreadystatechange = function () {
  if (window.document.readyState === 'interactive') {
    typeturaInit(document.querySelectorAll(typeturaContexts))
  }
}

// Navigation within an SPA
const historyPushState = window.history.pushState

window.history.pushState = (function () {
  return function pushState () {
    const historyState = historyPushState.apply(this, arguments)
    window.dispatchEvent(new Event('pushstate'))
    window.dispatchEvent(new Event('locationchange'))
    return historyState
  }
})(window.history.pushState)

window.addEventListener('popstate', function () {
  window.dispatchEvent(new Event('locationchange'))
})

window.addEventListener('locationchange', function () {
  setTimeout(function () {
    typeturaInit(document.querySelectorAll(typeturaContexts))
  }, 500)
})
