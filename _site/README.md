NSCamp - A weekend away for iOS, macOS, tvOS and watchOS developers
===================================================================

## About This Repository

The NSCamp website is a simple site for the Australian iOS, macOS, tvOS and watchOS developer camp. We are a community of Australian develpers who have been organising the camp since 2013. If you want to get involved, contact us on Twitter [@nscamp_au](http://twitter.com/nscamp_au). 

## How To Get Up And Running

- Install _Jekyll_ ([see here](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/))
- run `bundle install`

## Troubleshooting

- Install `nokogiri` if you haven't already done so.
- In the past, this has worked:

```bash
sudo gem install nokogiri -v 1.6.8 -- --with-xml2-include=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/include/libxml2 --use-system-libraries'
```
