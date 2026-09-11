# Elicitation Interview Guide

A thirty-minute script for the one conversation Milestone 3 requires. Print it,
fill it in by hand, then transcribe the notes into your repository the same day.
Memory decays faster than you think it does.

---

## Before you sit down

- **Pick a real human** who has the problem. Not a classmate being polite. Not you.
- **Say the boundary out loud:** "I am not going to build everything you say. I am
  trying to understand what actually happens today." This buys you honest answers
  instead of a wish list.
- **Bring nothing to show.** A prototype turns an interview into a review. Later.
- **Record the date.** A requirement without a date is a rumor.

**Interviewee:** Austin  **Role:** Audio Extractor
**Date:** 9-8-2026  **Duration:** 1 hour and 30 minutes  **Consent to quote (y/n):** Y

---

## The eight questions

Ask them in this order. The order matters: present tense before future tense,
behavior before opinion.

1. **"Walk me through the last time you did this. Start from the beginning."**
   You want the *episode*, not the summary. Interrupt only to ask "and then what?"

2. **"What did you use to do it?"**
   A spreadsheet, a whiteboard, a group chat, a paper list, nothing. Whatever it
   is, that is your competition and your data model.

3. **"Where did that go wrong the last time?"**
   Failures are specific; satisfaction is vague. This question produces requirements.

4. **"What did you do when it went wrong?"**
   The workaround is a feature request wearing a disguise.

5. **"How often does this happen? How long does it take?"**
   Numbers. Push for a number even if it is a guess, then write "estimated."

6. **"Who else touches this?"**
   You have just found a stakeholder you had not listed.

7. **"If this problem disappeared tomorrow, what would change about your day?"**
   The answer is the rationale line for half your requirements.

8. **"What is the part I have not asked about?"**
   Ask it. Then be quiet for a full ten seconds. The silence does the work.

---

## Questions to avoid, and why

| Do not ask | Why | Ask instead |
|---|---|---|
| "Would you use an app that…?" | Everyone says yes to a hypothetical. | "What do you do today?" |
| "Do you want feature X?" | You have handed them your design to rubber-stamp. | "Where does it go wrong?" |
| "How should this work?" | You are outsourcing the job you are being graded on. | "What has to be true for this to be worth opening?" |
| "Is this important?" | Every feature is important in the abstract. | "If you could only have one of these two, which?" |

---

## After the interview — same day, within an hour

- [ ] Transcribe raw notes. Do not clean them up yet; keep the words they used.
- [ ] Mark every sentence as **F** (a fact about today), **W** (a want), or **O** (an opinion).
      Facts become requirements first. Wants get triaged. Opinions get a rationale line.
- [ ] Circle every noun they used more than twice. Those nouns are your data model.
- [ ] Write down the three things you assumed before the interview that are now wrong.
- [ ] Add one row to the Open Questions table for anything you could not answer.
- [ ] Commit the notes with a dated message.

---

## The observation pass (do this too, if you can)

Twenty minutes of watching beats an hour of asking. Sit with them while they do
the task. Write down only what you see:

| Time | What they did | What they said | What surprised me |
|---|---|---|---|
| | | | | 
The "what surprised me" column is where the requirements nobody would have
thought to ask for come from.
