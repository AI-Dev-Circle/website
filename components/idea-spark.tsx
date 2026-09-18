"use client";
import { useState } from "react";
import { ArrowUpRight, Shuffle, Sparkles, Copy, Check } from "lucide-react";
import { COMMUNITY_URL } from "@/lib/data";
const ideas = {
  "AI on the web": [
    [
      "Your tabs, with a memory.",
      "Build a browser companion that turns your open tabs into a searchable, personal knowledge map.",
    ],
    [
      "A website that speaks your language.",
      "Create a reading companion that explains unfamiliar concepts with examples from your own interests.",
    ],
    [
      "Make the web a little easier to use.",
      "Prototype an assistant that turns a complex webpage into a clear, accessible reading view.",
    ],
  ],
  Agents: [
    [
      "A teammate for your side project.",
      "Build an agent that turns a project idea into a small, achievable weekend plan—and helps you get started.",
    ],
    [
      "From meeting notes to momentum.",
      "Prototype an agent that extracts decisions and suggests follow-up tasks, with a human approving every action.",
    ],
    [
      "A research partner with receipts.",
      "Create an agent that compares documentation and links every recommendation back to its source.",
    ],
  ],
  "Open source": [
    [
      "Your first contribution, demystified.",
      "Build a guide that matches a developer’s interests to beginner-friendly issues and explains the project.",
    ],
    [
      "Less time searching. More time building.",
      "Make an open-source tool that answers questions about a repository using its own documentation.",
    ],
    [
      "Give a good project a better README.",
      "Create a tool that spots missing setup steps and suggests clearer documentation for maintainers to review.",
    ],
  ],
};
type Topic = keyof typeof ideas;
export default function IdeaSpark() {
  const [topic, setTopic] = useState<Topic>("AI on the web");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const idea = ideas[topic][index];
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${idea[0]} ${idea[1]}`);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <div className="idea-spark">
      <div className="spark-topline">
        <span>
          <Sparkles size={16} /> A LITTLE SPARK
        </span>
        <span>HUMAN-CURATED IDEAS</span>
      </div>
      <div className="spark-tabs" aria-label="Project idea topic">
        {(Object.keys(ideas) as Topic[]).map((t) => (
          <button
            key={t}
            aria-pressed={t === topic}
            onClick={() => {
              setTopic(t);
              setIndex(0);
              setCopied(false);
              setCopyError(false);
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="spark-content" aria-live="polite">
        <span className="spark-number">0{index + 1} / 03</span>
        <h3 key={`${topic}-${index}`}>{idea[0]}</h3>
        <p>{idea[1]}</p>
      </div>
      <div className="spark-actions">
        <button
          className="button button-blue"
          onClick={() => {
            setIndex((index + 1) % 3);
            setCopied(false);
            setCopyError(false);
          }}
        >
          <Shuffle size={17} /> Another idea
        </button>
        <button
          className="icon-button"
          onClick={copy}
          aria-label={copied ? "Idea copied" : "Copy this idea"}
        >
          {copied ? <Check size={19} /> : <Copy size={19} />}
        </button>
      </div>
      {copyError && (
        <p className="copy-note" role="status">
          You can select the idea above to copy it.
        </p>
      )}
      {copied && (
        <span className="sr-only" role="status">
          Idea copied to clipboard.
        </span>
      )}
      <a
        className="spark-footnote"
        href={COMMUNITY_URL}
        target="_blank"
        rel="noreferrer"
      >
        Bring an idea. Find someone to build it with. <ArrowUpRight size={15} />
      </a>
    </div>
  );
}
