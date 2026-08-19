import { TICKER } from '../config.js'

const STATS = [
  { value: 'Jun ’25', label: 'Google Trends breakout — the word left Star Wars and hit the sidewalk' },
  { value: '64%', label: 'of customers would rather a company not use AI for support at all' },
  { value: '1 in 5', label: 'social accounts are already bots. the timeline is half clanker' },
  { value: '51%', label: 'of U.S. adults are more concerned than excited about AI' },
]

export default function Lore() {
  return (
    <section className="section lore" id="lore">
      <p className="eyebrow">lore · mindshare</p>
      <h2>This is a generational word.</h2>
      <p>
        {TICKER} is not a private grudge. It is what normal people already yell when
        a machine does something stupid — the ChatGPT that hallucinates, the
        sidewalk delivery bot, the call-center voice that will not transfer you.
        Clone troopers said it in 2005. NPR, the New York Times, NBC, Rolling Stone,
        and Wikipedia were writing it down by summer 2025. Collins and Merriam-Webster
        put it in the dictionary. A U.S. senator used it in a bill tweet.
      </p>
      <p>
        That is mindshare. Slang moves faster than the models, and this one stuck
        because it is intuitive: if it clanks, if it replaces you, if it answers
        without a soul, it is a clanker. As the world gets more dystopian — more
        bots on the timeline, more slop in the search bar, more “please hold for a
        human” — people will keep saying it. The word scales with the machines.
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
