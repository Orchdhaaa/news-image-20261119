# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Orchdhaaa/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Orchdhaaa/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

An entry for make.fun's "Sum up 19 November's world news in one image" bounty.

The image is a newspaper front page. The masthead reads "THE WORLD" and the
date line is Thursday, 19 November 2026. It sums up the day in five stories,
each checked against live news sources on 19 November 2026 (evening edition —
news as reported by 17:30 WIB):

1. **Trump, Xi and Putin meet in Shenzhen — no deal.** The first-ever
   trilateral of the leaders of the world's three largest nuclear powers,
   at Kylin Villa on the sidelines of APEC. Trump and Putin also held a
   40-minute one-on-one, dominated by Ukraine. No agreement and no joint
   statement were announced.
2. **Iran widens Gulf attacks — Kuwait struck.** Iran's drones targeted US
   Patriot systems at Ali Al Salem air base overnight, but Kuwait reported
   no casualties or damage. Bahrain stopped its fourth Iranian wave in six
   days; Saudi Arabia downed Houthi missiles. An ADNOC-linked tanker was
   hit in the Strait of Hormuz: 11 injured, 1 missing. No fresh exchange
   was reported today.
3. **Democrats take the Senate as Peltola wins Alaska.** Mary Peltola beat
   Republican Dan Sullivan 50.12% to 45.80%, giving Democrats a 56–44
   majority. She is the first Alaska Native elected to the US Senate.
4. **Anthropic IPO priced at $83 — trading starts today.** Anthropic priced
   its shares above the $70–78 range in one of the largest IPOs on record,
   the first by a major frontier AI developer. The stock debuts on Nasdaq
   under the ticker ANT.
5. **GTA VI launches after 13 years.** Rockstar's Grand Theft Auto VI is out
   today on PlayStation 5 and Xbox Series X|S, holding a 99 on Metacritic
   from 147 reviews — tied for the highest score in the site's history.
   Sensor Tower estimates 17.1M copies sold for ~$1.65B; Take-Two has
   published no official figure.

Also today: Kerch Bridge road arch in the strait, rail resumed; Nvidia board
will not reinstate Huang; Fed minutes show most officials expect further
rate hikes; ICJ: court finds ~10,000 Rohingya killed in 2017, genocide
verdict being read; Cyclone Akvan nears India's coast; markets: Dow -1.11%,
S&P 500 -0.23%, Nasdaq +0.42%.

Every story was verified against live news sources on 19 November 2026 (see
SOURCES.md in the competition workspace). All text is set in real fonts, so
nothing is garbled, and the pictures are AI-generated editorial illustrations
made for this front page.

## How it works

`main.ts` copies the bundled image `entry.png` byte for byte into the
output directory and then reads the copy back to check it matches. If the
bytes differ, the program fails. Every run therefore produces identical
output.

## Files

- `main.ts` — the program (the entrypoint). It copies and verifies the image.
- `entry.png` — the picture: the front page itself.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=1kansq7j&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
