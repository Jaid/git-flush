import path from "path"

import simpleGit from "simple-git/promise"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: gitFlush} = indexModule

it("should run", async () => {
  const directory = path.join(__dirname, "..", "dist", "test", "repo")
  const gitRepository = simpleGit(simpleGit)
  const result = await gitFlush(path.join(__dirname, ".."))
})