# resolve-alfred-prefs [![Build Status](https://travis-ci.org/SamVerschueren/resolve-alfred-prefs.svg?branch=master)](https://travis-ci.org/SamVerschueren/resolve-alfred-prefs)

> Resolve the path of `Alfred.alfredpreferences` for Alfred 3 and Alfred 4


## Install

```
$ npm install resolve-alfred-prefs
```


## Usage

```js
const resolveAlfredPrefs = require('resolve-alfred-prefs');

(async () => {
	console.log(await resolveAlfredPrefs());
	//=> {
	//     alfred3: '/Users/sam/Library/Application Support/Alfred 3/Alfred.alfredpreferences',
	//     alfred4: '/Users/sam/Library/Application Support/Alfred/Alfred.alfredpreferences'
	//   }
})();
```


## API

### resolveAlfredPrefs()

Returns a `Promise` for the `Alfred.alfredpreferences` paths of Alfred 3 and Alfred 4.

The return value will be `undefined` if the file does not exist.

#### Example

```javascript
// User only have Alfred 3
{
	alfred3: '/Users/dropbox/Alfred 3/Alfred.alfredpreferences',
	alfred4: undefined
}
```


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
