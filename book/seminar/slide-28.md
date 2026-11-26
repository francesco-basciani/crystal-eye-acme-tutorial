# Crystal Eye mission profile

## Mission concept and alerts

~~~{figure} ../figures/seminar/figure-28-1.webp
:alt: Mission diagram showing the burst, onboard localization, alert distribution and follow-up
:figclass: ce-seminar-figure

Mission diagram showing the burst, onboard localization, alert distribution and follow-up.
~~~

The mission diagram follows a burst from its onboard direction estimate through rapid alert distribution to automated follow-up. The slide quotes localization on the order of a degree and processing on the order of milliseconds as objectives for the mission concept.

The seminar describes the mission as under consideration for the Italian Space Agency’s Piccola Missione Scientifica Italiana program, with **2032** as the proposed launch year. The table below records the planning assumptions shown in the source.

## Mission parameters

| Parameter | Value shown in the seminar |
| --- | --- |
| Orbit | 550 km, 5° preferred, 0–20° acceptable |
| Spacecraft | NIMBUS |
| Payload mass | Detector: 48 kg. Electronics box tray and harness: 35 kg. |
| Payload power | 86 W, including 25% inefficiency of the power boards |
| Data budget | Burst data: 60 Mb per burst event*. Continuous monitoring data sampling: 93 Gb/dd. Payload housekeeping data: 16 Gb/dd. |
| Spacecraft wet mass | Approximately 320 kg |
| Communications | Intersatellite link (ISL) or L-band transponder for fast alerts. X-band for scientific data. S-band for housekeeping, telemetry and telecommand. |
| Pointing accuracy | The instrument looks at the zenith. Raw data are tagged with the spacecraft position to localize the event. |
| Lifetime | At least 2 years |
| Ground stations | Malindi, with X- and S-band compatibility |
| Thermal control | Passive thermal control expected. The thermal interface for the SiPM is under definition. |
| AOCS requirements | Three-axis knowledge below 0.1° is sufficient for localization. Attitude control helps optimize power and thermal conditions. |
| Radiation environment | Equatorial LEO. Standard shielding is expected to suffice. |
| Mission operations | Regular TM/TC via S- and X-band, real-time alerts via ISL/EDRS and bulk science data via scheduled X-band passes |
| Launch compatibility | VEGA-C in PLAT1, PLAT2, FLEXI-3/$ and Vespa Extended |

*Sarkar R. · CE-simulation · Slide 28 of 29*
