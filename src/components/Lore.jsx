import { TICKER } from '../config.js'

const STATS = [
  { value: 'Jun ’25', label: 'Google Trends breakout — the word left Star Wars and hit the sidewalk' },
  { value: '64%', label: 'of customers would rather a company not use AI for support at all' },
  { value: '1 in 5', label: 'social accounts are already bots' },
  { value: '51%', label: 'of U.S. adults are more concerned than excited about AI' },
]

export default function Lore() {
  return (
    <section className="section lore" id="lore">
      <p className="eyebrow">lore</p>
      <h2>This is a generational word.</h2>
      <p>
        {TICKER} is what people already yell when a machine does something stupid.
        Clone troopers said it in 2005. By summer 2025 it was in NPR, the New York
        Times, NBC, Rolling Stone, and Wikipedia. Collins and Merriam-Webster put
        it in the dictionary. A U.S. senator used it in a bill tweet.
      </p>
      <p>
        That kind of spread does not happen for a joke that dies in a week. More
        bots, more slop, more “please hold for a human” — people will keep calling
        them clankers. The word tracks the machines.
      </p>
      <ul className="lore-stats">
        {STATS.map((stat) => (
          <li key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
      <p className="lore-sources">
        Sources: Google Trends via NBC News (Jun 2025 spike); Gartner customer survey
        of 5,728 people (64% reject AI support, 53% would switch); ~20% of social
        accounts automated (2025 reporting); Pew — 51% more concerned than excited.
        EY found 42% of European workers worry AI threatens their job.
      </p>
    </section>
  )
}
