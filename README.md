NSCamp - the weekend away for iOS and OSX hackers
===============================================

## Repo for NSCamp website

install Jekyll ([see here](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/))

run 
`bundle install`


##Didn't work

You need to install nokogiri if you haven't already

This worked for me:

`sudo gem install nokogiri -v 1.6.8 -- --with-xml2-include=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/include/libxml2 --use-system-libraries'`