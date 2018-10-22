'use strict';

import readDirectory from '../readDirectory'
import fs from 'fs'

// Overriding node module we need to call explicit .mock
// Not required for the other modules, like 'lodash'
jest.mock('fs')

describe('listFilesInDirectorySync', function () {
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };

  beforeEach(() => {
    fs.__setMockFiles(MOCK_FILE_INFO)
  })

  it('should include all files in the directory', () => {
    expect(readDirectory('/path/to')).toEqual(['file1.js', 'file2.txt'])
  })
})
