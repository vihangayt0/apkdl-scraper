## Search and get apk fron androidapksfree.com

- Author : [Vihanga-YT](https://github.com/vihangayt0)

***

## Example search
```js
const { 
apksearch
} = require('apkdl-scraper')

let search = await apksearch('telegram')
console.log(search)
```
***
## OutPut
```js
[
  {
    title: 'Telegram 9.4.0 APK for Android – Download',
    link: 'https://androidapksfree.com/telegram/org-telegram-messenger/'
  },
  {
    title: 'Plus Messenger 9.1.2.0 APK for Android – Download',
    link: 'https://androidapksfree.com/plus-messenger/org-telegram-plus/'
  },
  {
    title: 'AirDroid 4.2.9.10 APK for Android – Download',
    link: 'https://androidapksfree.com/airdroid/com-sand-airdroid/'
  }
]
```
***

## Example dl
```js
const { 
apkdl
} = require('apkdl-scraper')

let dllinks = await apkdl('https://androidapksfree.com/telegram/org-telegram-messenger/')
console.log(dllinks)
```
***
## OutPut
```js
{
  dllink: 'https://r-static-assets.androidapks.com/rdata/98602fe90da1bbc50809d99f970f9850/org.telegram.messenger_v9.4.0-30981_Android-4.4.apk',
  size: '35.7 MB'
}
```
***
