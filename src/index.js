
exports.download = (blob, fileName) => {
  if (!window || !document || !setTimeout) {
    console.log('You are trying to use this in an unsupported context')
    return
  }

  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.download = fileName || 'give-me-a-name'
  document.body.appendChild(a)
  a.click()
  setTimeout(function() {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 1)
}
