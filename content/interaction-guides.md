---
title: "Interaction guides"
date: 2023-03-12T19:16:53+10:00
draft: false
---

# Introduction :information_source:

All used things should not just properly work but also be documented.

## README

All top-level **README.md** files should contain the following headers in this
order:

- `# <Human-readable-repository-name>`: contains the same text as a repository
  description does  
  **required**: true
- `## Quick introduction :rocket:` quick get started section with 1-2 examples
  aiming to show how to use what is provided in the explained repository  
  **required**: true
- `## Writing <something> :hammer_and_wrench:` reference to a repository
  contributing guide  
  **required**: true
- `## Benefits :+1:` reasons to use what is provided in the explained repository
  describing benefits for developers and for the end users  
  **required**: true for all repositories except [site][site] one
- `## Similar projects :books:` similar projects which provide almost the
  same things as the explained repository does  
  **required**: false

To speed up **README.md** creation always use the template below:

{{< code language="markdown" title="Template" id="1" expand="Show" collapse="Hide" isCollapsed="true" >}}
# <Human-readable-repository-name>

[![chat](https://img.shields.io/badge/Current-goals-a32236?labelColor=ed425c&style=flat-square)][goals]

<Repository-description>.

## Quick introduction :rocket:

<Text>.

## Writing pages :hammer_and_wrench:

Read [this](./CONTRIBUTING.md) guide for details.

## Similar projects :books:

> :bell: Default render settings and official clients are used.

- <Project> <project-description>:

  <Screenshot>

## Why to use this project :question:

From the page writer's perspective:

- <Text>.

From the end-user perspective:

- <Text>.

[goals]: https://command-line-interface-pages.github.io/site.github.io/goals/#cli-pagescli-pages-
{{< /code >}}

For the sake of clear understanding please view [this][readme] **README.md** in CLI page
repository.

[readme]: https://github.com/command-line-interface-pages/cli-pages/blob/main/README.md?plain=1
