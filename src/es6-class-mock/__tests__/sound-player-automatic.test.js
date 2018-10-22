import SoundPlayer from '../sound-player'
import SoundPlayerConsumer from '../sound-player-consumer'

jest.mock('../sound-player')

beforeEach(() => {
  SoundPlayer.mockClear()
})

test('if consumer called the SoundPlayer constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer()
  expect(SoundPlayer).toHaveBeenCalled()
})

// Just for reference, because manual mock exists
test.skip('if consumer called a method of SoundPlayer instance', () => {
  expect(SoundPlayer).not.toHaveBeenCalled()

  const soundPlayerConsumer = new SoundPlayerConsumer()
  soundPlayerConsumer.playSomethingCool()

  const mockSoundPlayer = SoundPlayer.mock.instances[0]
  const mockPlaySoundFile = mockSoundPlayer.playSoundFile

  const coolSoundFilename = 'song.mp3'
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFilename)
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFilename)
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1)
})
