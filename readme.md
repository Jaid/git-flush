# git-flush


Commits and pushes if repository is dirty. Does nothing otherwise.



## API Reference

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


