import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import { toMatchDiffSnapshot } from 'snapshot-diff'
import * as emotion from 'emotion'
import { createSerializer } from 'jest-emotion'

expect.extend({ toMatchDiffSnapshot })
expect.addSnapshotSerializer(createSerializer(emotion))
