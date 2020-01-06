# git-flush


<a href="https://actions-badge.atrox.dev/Jaid/git-flush/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fgit-flush%2Fbadge" alt="Build status"/></a> <a href="https://raw.githubusercontent.com/Jaid/git-flush/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/git-flush?style=flat-square" alt="License"/></a>  
<a href="https://github.com/Jaid/git-flush/commits"><img src="https://img.shields.io/github/commits-since/Jaid/git-flush/v2.0.1?style=flat-square&logo=github" alt="Commits since v2.0.1"/></a> <a href="https://github.com/Jaid/git-flush/commits"><img src="https://img.shields.io/github/last-commit/Jaid/git-flush?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/git-flush/issues"><img src="https://img.shields.io/github/issues/Jaid/git-flush?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/git-flush"><img src="https://img.shields.io/npm/v/git-flush?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/git-flush/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/git-flush?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/git-flush"><img src="https://img.shields.io/npm/dm/git-flush?style=flat-square&logo=npm" alt="Downloads"/></a>

**Commits and pushes if repository is dirty. Does nothing otherwise.**












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
    * [~_default([message], [options])](#module_git-flush.._default) ⇒ <code>Promise.&lt;(null\|number)&gt;</code>
        * [~normalizedOptions](#module_git-flush.._default..normalizedOptions) : <code>Options</code>
    * [~Options](#module_git-flush..Options) : <code>Object</code>

<a name="module_git-flush.._default"></a>

### git-flush~\_default([message], [options]) ⇒ <code>Promise.&lt;(null\|number)&gt;</code>
If repository is dirty, the changes will be stashed, committed and optionally pushed. If repository is clean, does nothing.

**Kind**: inner method of [<code>git-flush</code>](#module_git-flush)  
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
<a name="module_git-flush.._default..normalizedOptions"></a>

#### _default~normalizedOptions : <code>Options</code>
**Kind**: inner constant of [<code>\_default</code>](#module_git-flush.._default)  
<a name="module_git-flush..Options"></a>

### git-flush~Options : <code>Object</code>
**Kind**: inner typedef of [<code>git-flush</code>](#module_git-flush)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | Path to the git repository |
| push | <code>boolean</code> | If `true`, pushes after committing |
| pull | <code>boolean</code> | If `true`, pulls before committing |




## Development



Setting up:
```bash
git clone git@github.com:Jaid/git-flush.git
cd git-flush
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
