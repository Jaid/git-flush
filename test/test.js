import path from "path"

import simpleGit from "simple-git/promise"
import fsp from "@absolunet/fsp"
import ms from "ms.macro"
import execa from "execa"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: gitFlush} = indexModule

it("should run", async () => {
  for (const [key, value] of Object.entries(process.env)) {
    process.stdout.write(`process.env.${key} = ${value}\n`)
  }
  const commitMessage = "abc"
  const directory = path.join(__dirname, "..", "dist", "test", "repo")
  await fsp.mkdirp(directory)
  await fsp.emptyDir(directory)
  const gitRepository = simpleGit(directory)
  await gitRepository.init()
  if (process.env.CI) { // GitHub Action fails if user.name and user.email are not set
    const gitConfig = {
      "user.name": "GitHub Action",
      "user.email": "action@github.com",
    }
    for (const [key, value] of Object.entries(gitConfig)) {
      await execa("git", ["config", "--local", key, value])
    }
  }
  const resultBefore = await gitFlush(commitMessage, {directory})
  expect(resultBefore).toBe(0)
  await fsp.outputFile(path.join(directory, "test.txt"), "hi")
  const resultAfter = await gitFlush(commitMessage, {directory})
  expect(resultAfter).toBe(1)
  const resultFinal = await gitFlush(commitMessage, {directory})
  expect(resultFinal).toBe(0)
}, ms`20 seconds`)