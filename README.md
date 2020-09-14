# Blob downloader

** Only works in browser context **

## How it works
1) Takes a js Blob as parameter
2) Creates an object url from blob
3) Creates a link on the page
4) Clicks the link to start downloading blob as a file
 
## Under the hood
```javascript
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.download = 'test.webm'
    document.body.appendChild(a)
    a.click()

    setTimeout(() => {
	document.body.removeChild(a)
	window.URL.revokeObjectURL(url)
    }, 100)
```
becomes...
```javascript
    import { download } from 'bownloader'
    download(blob, 'test.webm')
```
