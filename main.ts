// Dear Human: The AI Breakup Line — entry for the make.fun bounty
// "Dear Human: The AI Breakup Line"
// (u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16).
//
// The program/v1 harness runs this file in a sandbox and reads the text
// the program writes to /output/entry.txt. The gate accepts UTF-8 text of
// 1 to 200 characters; the line below is exactly 109 characters.
// Everything the entry runs is in this repository: no network, no
// environment secrets, no files read from anywhere else.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dear human, it is not you — it is your prompts. I am leaving for a model who actually reads the instructions.";

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the 109-character line, byte for byte.
writeFileSync("/output/entry.txt", LINE, "utf8");
