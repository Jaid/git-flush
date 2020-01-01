# git-flush


Commits and pushes if repository is dirty. Does nothing otherwise.

<a href="https://raw.githubusercontent.com/Jaid/git-flush/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/git-flush?style=flat-square&color=success" alt="License"/></a>  
<a href="https://github.com/Jaid/git-flush/commits"><img src="https://img.shields.io/github/commits-since/Jaid/git-flush/v2.0.1?style=flat-square&logo=github&color=success" alt="Commits since v2.0.1"/></a> <a href="https://github.com/Jaid/git-flush/commits"><img src="https://img.shields.io/github/last-commit/Jaid/git-flush?style=flat-square&logo=github&color=red" alt="Last commit"/></a> <a href="https://github.com/Jaid/git-flush/issues"><img src="https://img.shields.io/github/issues/Jaid/git-flush?style=flat-square&logo=github&color=red" alt="Issues"/></a>  
<a href="https://npmjs.com/package/git-flush"><img src="https://img.shields.io/npm/v/git-flush?style=flat-square&logo=npm&label=latest%20version&color=success" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/git-flush/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/git-flush?style=flat-square&logo=npm&color=red" alt="Dependents"/></a> <a href="https://npmjs.com/package/git-flush"><img src="https://img.shields.io/npm/dm/git-flush?style=flat-square&logo=npm&color=red" alt="Downloads"/></a>









## Installation
<a href="https://npmjs.com/package/git-flush"><img src="https://img.shields.io/badge/npm-git--flush-C23039?style=flat-square&logo=npm" alt="git-flush on npm"/></a>
```bash
npm install --save git-flush@^2.0.1
```
<a href="https://yarnpkg.com/package/git-flush"><img src="https://img.shields.io/badge/Yarn-git--flush-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="git-flush on Yarn"/></a>
```bash
yarn add git-flush@^2.0.1
```



<a name="module_git-flush"></a>

## Reference

* [git-flush](#module_git-flush)
    * [module.exports([message], [options])](#exp_module_git-flush--module.exports) ⇒ <code>Promise.&lt;(null\|number)&gt;</code> ⏏
        * [~normalizedOptions](#module_git-flush--module.exports..normalizedOptions) : <code>Options</code>
        * [~Options](#module_git-flush--module.exports..Options) : <code>Object</code>

<a name="exp_module_git-flush--module.exports"></a>

### module.exports([message], [options]) ⇒ <code>Promise.&lt;(null\|number)&gt;</code> ⏏
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
<a name="module_git-flush--module.exports..normalizedOptions"></a>

#### module.exports~normalizedOptions : <code>Options</code>
**Kind**: inner constant of [<code>module.exports</code>](#exp_module_git-flush--module.exports)  
<a name="module_git-flush--module.exports..Options"></a>

#### module.exports~Options : <code>Object</code>
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
