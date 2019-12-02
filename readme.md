# git-flush


Commits and pushes if repository is dirty. Does nothing otherwise.

## Installation
<a href='https://npmjs.com/package/git-flush'><img alt='npm logo' src='https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png' height=16/></a>
```bash
npm install --save git-flush@^
```
<a href='https://yarnpkg.com/package/git-flush'><img alt='Yarn logo' src='https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-full.png' height=24/></a>
```bash
yarn add git-flush@^
```


## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/git-flush@2.0.0");
document.querySelector("head").appendChild(scriptElement);
```

The module is now loaded in a variable.

```javascript
typeof git-flush.default
```

## Documentation

* [git-flush](#module_git-flush)
    * [module.exports([message], [options])](#exp_module_git-flush--module.exports) ⇒ <code>Promise.&lt;(null\|number)&gt;</code> ⏏
        * [~normalizedOptions](#module_git-flush--module.exports..normalizedOptions) : <code>Options</code>
        * [~Options](#module_git-flush--module.exports..Options) : <code>Object</code>

If repository is dirty, the changes will be stashed, committed and optionally pushed. If repository is clean, does nothing.

**Kind**: Exported function  
**Returns**: <code>Promise.&lt;(null\|number)&gt;</code> - `null` if directory is not a git repository, `number` of commit changes if directory is a git repository  

| Param | Type | Default |
| --- | --- | --- |
| [message] | <code>string</code> | <code>&quot;\&quot;Commit from script\&quot;&quot;</code> | 
| [options] | <code>Options</code> | <code>{}</code> | 

**Example**  
```javascript
import gitFlush from "git-flush"
const result = await gitFlush("Commit message")
```
**Kind**: inner constant of [<code>module.exports</code>](#exp_module_git-flush--module.exports)  
**Kind**: inner typedef of [<code>module.exports</code>](#exp_module_git-flush--module.exports)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | Path to the git repository |
| push | <code>boolean</code> | If `true`, pushes after committing |
| pull | <code>boolean</code> | If `true`, pulls before committing |



## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
