---
title: "Pull request guides"
date: 2023-03-23T09:52:15+10:00
draft: false
---

# Introduction

The way _[p]ull [r]equests_ or _PRs_ are handled should be beneficial for both
project maintainers and it's contributors.

## General rules

- Be polite and respect other's opinion, but it doesn't mean that you should
  always agree with it.
- Help contributors with resolving their issues related to this project. Be
  concise and refer to this site guidelines when they exist for some situation.
- Use inclusive language and pronouns people prefer. Prefer like
  "deny list"/"allow list" instead of "blacklist"/"whitelist", for instance.
  When it's unknown how to refer to person "they" pronoun can be used.
- Never make exceptions to any formal rules.

## Review

- Always request odd number of reviewers, by default just one. Having several
  reviewers beneficial for suspicious situations when another maintainer
  or contributor has a different opinion about what should be done in PR.
- PRs are not a place for discussing quality of syntax or guides. If you see a
  problem and some PR demonstrates it clearly, please create an issue in the
  right repository.
- Never block PRs merge just because you personally don't like something in it.
  There are just two valid reasons to do it: invalid syntax and page examples
  not sorted by increasing complexity. By complexity, we mean here simply number
  of options/subcommands and commands required for some example. Code examples
  with an equal complexity can be ordered as you want.
- Almost the same rule applies for closing PRs: they can't be closed by
  maintainers until such kind of PR currently is not accepted. Note that what
  sort of PRs is not valid for now must be explicitly
  [listed]({{< ref "goals/#introduction-%E2%84%B9" >}}) on this site. For
  instance:

  > Currently, we are not planning to support <something>.

  is not a valid reason to reject proposals. At the first place, because doing
  so you deny others work and spent time. At the second place as proposed
  changes can be useful.
- When it's better (on your opinion) to send PR to another repository, suggest
  contributor to do so, not deny their work. It's legitimate to create new
  repositories for any contributors if it doesn't violate the current
  organization.
- Test CI and automation scripts, relying on them. People can make errors
  and introduce them in code, but even so automation is an important part of
  our workflow. More automation is done, fewer reviewers are required, PRs
  are being merged faster.
- Always thanks for contributions no matter they are. People invested their time
  and effort to help our project, respect it.

## Resolving conflicts

CLI/directory pages, their themes already existing in repositories can't be
simply replaced by completely unrelated ones. It means that when there are
exactly named commands, for instance, it's impossible to create a page for a new
one without changing the way repository is organized.

Breaking changes can be made while such repository restructuring, but should be
announced before at least one month they are incorporated.
