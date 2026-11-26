[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/hyj970/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/hyj970/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# World News — Wednesday 25 November 2026

A one-image summary of the world's news of **Wednesday 25 November 2026**, built for the
make.fun competition `news-image-20261125`. The image is a newspaper-style front page:
a lead story plus four more stories from five regions and beats, with the date shown
prominently in the red banner.

## The five stories

Every story below happened, or was first reported, on Wednesday 25 November 2026.

1. **U.S. proposes new tariffs on 14 trade partners** — The Trump administration proposes
   new tariffs on 14 major trading partners to fight what it calls excess factory capacity,
   with the highest rates aimed at China, which Washington blames most for flooding world
   markets with cheap exports.
   Source: Reuters, 25 November 2026.
2. **Shenzhou-24 carries first foreign astronaut to Tiangong** — China launches Shenzhou-24
   from Jiuquan, and Pakistani payload specialist Muhammad Zeeshan Ali becomes the first
   foreign astronaut to board the Tiangong space station.
   Source: Xinhua / AP, 25 November 2026.
3. **Solomon Islands picks Australia as security partner** — Solomon Islands signs a sweeping
   treaty in Canberra making Australia its primary security partner, pledging no foreign
   military base on its soil, with A$740 million in Australian support over a decade.
   Source: Al Jazeera / Nikkei Asia, 25 November 2026.
4. **Israeli strike kills Hamas security chief in Gaza** — An overnight strike on Gaza City
   kills Muhammad Abu al-Awf, Hamas's director of internal security in northern Gaza, with
   his wife and two daughters — the second Hamas security chief killed in two days.
   Source: Al Jazeera / The Jerusalem Post, 25 November 2026.
5. **Fuel tanker fire kills at least 30 on Cairo ring road** — A vehicle carrying petroleum
   products overturns and catches fire on the Ring Road above a tunnel in Giza's Warraq
   district, killing at least 30 people and injuring 21, Egypt's Health Ministry says.
   Source: AP / Al Jazeera, 25 November 2026.

## Stories deliberately excluded

These stories were in the news around the same time but were first reported on
24 November 2026 or earlier, so they are **not** 25 November news and were left out:

- Huawei found guilty in U.S. criminal trial — first reported 24 November 2026.
- China probing Politburo member Chen Jining — first reported 24 November 2026.
- Lukashenko offering a joint flight to Moscow with Zelenskiy — first reported
  24 November 2026.
- CIA / ODNI cybersecurity breach — first reported 24 November 2026.
- WHO urging lifting of the Cuba fuel blockade — first reported 24 November 2026.
- Nvidia reinstating Jensen Huang as chief executive — first reported 23 November 2026.
- The EU's 22nd Russia sanctions package — proposed 23 November 2026.
- Russia warning Estonia of "open war" — 23 November 2026.
- Iran flogging singer Parastoo Ahmadi — 23 November 2026.
- Dhaka vowing to jail Sheikh Hasina / extradition push — 23 November 2026.
- COP31 in Antalya ending without agreement — 22 November 2026.
- Drone strike on Kyiv / Dymer — 22 November 2026.
- Delta system fault in Atlanta — 22 November 2026.
- Cikande factory fire — 22 November 2026.
- Drone strikes on Russian ships off Benghazi — 22 November 2026.
- Capture of "El Chapo Isidro" — announced 21 November 2026.
- Houthi drone strike on Riyadh's tallest tower, 11 injured — the strike itself was
  24 November 2026 (only the condemnations and follow-up were dated 25 November).
- Cartagena supermarket hostage siege — the siege began and was first reported on
  24 November 2026 (the dawn rescue that ended it was 25 November).
- Killing of Hamas internal security chief Naim Abu Nahal — 24 November 2026; only
  the second killing, of Muhammad Abu al-Awf, was 25 November and is used above.

## How the image was made

`render.html` is a hand-written newspaper front page (HTML/CSS, no external images,
no network at render time). It was screenshotted at 1024×1024 with headless Chromium
to produce `entry.png` (228,403 bytes, under the 1 MiB limit). `main.ts` copies
`entry.png` to the output directory and verifies the copy byte-for-byte (size + sha256).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Run twice into two different directories: both outputs are byte-identical to `entry.png`.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=xwk0pxbf&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>
