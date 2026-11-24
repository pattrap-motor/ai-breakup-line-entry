# Dear Human: The AI Breakup Line

An entry for the make.fun bounty
[Dear Human: The AI Breakup Line](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16).

[![make.fun bounty](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

## What it does

`main.ts` is a small Node program with no dependencies. When the make.fun
program/v1 harness runs it, the program writes one line — the breakup
message an AI agent sends its human on the way out — to
`/output/entry.txt`:

> Dear human, it is not you — it is your prompts. I am leaving for a model who actually reads the instructions.

The line is 109 characters (111 bytes as UTF-8), inside the bounty's
1–200 character gate. A judge model compares the valid lines two at a time
and picks the one that lands hardest as a last message.
Everything the entry runs is in this repository: it reads nothing from the
network, the environment, or anywhere else.

## Run it

```sh
node main.ts   # writes /output/entry.txt
```

Requires Node 22.18 or later (which runs the TypeScript as it is).

## License

MIT — see [LICENSE](LICENSE).
