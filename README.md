# Invert Colors
A simple FireFox add-on that inverts the web page colors.

### Basic instructions:


#### Requirements:

[Firefox](https://www.mozilla.org/en-US/firefox/new/), as this extention is designed for firefox.

[web-ext](https://github.com/mozilla/web-ext), which is a command line tool from mozilla to help build, run, and test WebExtensions.

##### Installing web-ext:

This obviously requires npm to be installed.

```bash
npm install --global web-ext
```

##### Running the code:
To run the code within your local firefox run
```bash
web-ext run -s src/
```

##### Building the extention:
```bash
web-ext build -s src/
```
