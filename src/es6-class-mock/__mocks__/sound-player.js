// __mocks__/sound-player.js

export const mockPlaySoundFile = jest.fn()

const mock = jest.fn(() => {
  return {
    playSoundFile: mockPlaySoundFile
  }
})

export default mock
