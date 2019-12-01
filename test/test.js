import path from "path"

import simpleGit from "simple-git/promise"
import fsp from "@absolunet/fsp"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: gitFlush} = indexModule

it("should run", async () => {
  const directory = path.join(__dirname, "..", "dist", "test", "repo")
  await fsp.mkdirp(directory)
  const gitRepository = simpleGit(directory)
  const resultBefore = await gitFlush("abc", {directory})
})