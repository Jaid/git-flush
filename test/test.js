import path from "path"
import os from "os"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: gitFlush} = indexModule

it("should run for a non-repository", async () => {
  const result = await gitFlush(os.homedir())
  expect(result).toBe(null)
})

it("should run for this project", async () => {
  const result = await gitFlush(path.join(__dirname, ".."))
  expect(typeof result).toBe("boolean")
})