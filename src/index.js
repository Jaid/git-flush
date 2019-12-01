/** @module git-flush */

import simpleGit from "simple-git/promise"

const debug = require("debug")(_PKG_NAME)

/**
 * @typedef {Object} Options
 * @prop {string} directory Path to the git repository
 * @prop {boolean} push
 */

/**
 * If repository is dirty, the changes will be stashed, commited and optionally pushed. If repository is clean, does nothing.
 * @param {string} [message="Commit from script"]
 * @param {Options} [options={}]
 * @returns {Promise<null|number>} `null` if directory is not a git repository, `number` of commit changes if directory is a git repository
 * @example
 * import gitFlush from "git-flush"
 * const result = await gitFlush("Commit message")
 */
export default async (message = "Commit from script", options = {}) => {
  /**
   * @type {Options}
   */
  const normalizedOptions = {
    directory: "",
    push: false,
    ...options,
  }
  const gitRepository = simpleGit(normalizedOptions.directory)
  debug(`Directory: ${normalizedOptions.directory}`)
  const isGitRepository = await gitRepository.checkIsRepo()
  if (!isGitRepository) {
    return null
  }
  const gitStatus = await gitRepository.status()
  const changes = gitStatus.files?.length || 0
  if (changes === 0) {
    debug("0 changes")
    return 0
  }
  debug(`Changes: ${gitStatus.files.map(file => file.path).join(", ")}`)
  debug("git add --all")
  await gitRepository.raw(["add", "--all"])
  debug(`git commit --all --message ${message}`)
  await gitRepository.raw(["commit", "--all", "--message", message])
  if (normalizedOptions.push) {
    debug("git push")
    await gitRepository.push()
  }
  debug(`Return ${changes}`)
  return changes
}