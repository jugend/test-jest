import fs from 'fs'

export default function readDirectory(dir) {
  return fs.readdirSync(dir)
}
