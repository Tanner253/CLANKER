import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { tiktokEmbedSrc, tiktokVideoId } from './tiktok.js'

describe('tiktokVideoId', () => {
  it('pulls the numeric id from a full TikTok URL', () => {
    assert.equal(
      tiktokVideoId('https://www.tiktok.com/@nicoholm13/video/7521234567890123456'),
      '7521234567890123456',
    )
  })

  it('accepts a bare video id', () => {
    assert.equal(tiktokVideoId('7521234567890123456'), '7521234567890123456')
  })

  it('returns null for junk', () => {
    assert.equal(tiktokVideoId('https://www.tiktok.com/@someone'), null)
  })
})

describe('tiktokEmbedSrc', () => {
  it('builds the official embed player URL', () => {
    assert.equal(
      tiktokEmbedSrc('7521234567890123456'),
      'https://www.tiktok.com/embed/v2/7521234567890123456',
    )
  })
})
