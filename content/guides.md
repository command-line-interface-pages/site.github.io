---
title: "Guides"
date: 2023-03-12T19:16:53+10:00
draft: false
---

# Introduction

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

To speed up **README.md** creation always use the template below:

{{< code language="markdown" title="Template" id="1" expand="Show"
  collapse="Hide" isCollapsed="true" >}}
# <Human-readable-repository-name>

[![goals](https://img.shields.io/badge/Current-goals-a32236?labelColor=ed425c&style=flat-square)][goals]

<Repository-description>.

[goals]: https://command-line-interface-pages.github.io/site.github.io/goals/#

## Quick introduction :rocket:

<Text>.

## Writing pages :hammer_and_wrench:

Read [this](./CONTRIBUTING.md) guide for details.
{{< /code >}}

For the sake of clear understanding please view [this][readme] **README.md** in
this repository.

[readme]: https://github.com/command-line-interface-pages/site.github.io/blob/main/README.md?plain=1

## CONTRIBUTING

Contributing guides can exist just as top-level **CONTRIBUTING.md** files and
have the following chapters inside them:

- `# Contributing guide`  
  **required**: true
- `## Prerequisites` lists prerequisites required for a comfortable work with a
  repository  
  **required**: true
- `## How to get started?` provides a link to one of the simplest sources to get
  started and an explained example  
  **required**: true
- `## See also` links for tutorials  
  **required**: false

To speed up **CONTRIBUTING.md** creation always use the template below:

{{< code language="markdown" title="Template" id="2" expand="Show"
  collapse="Hide" isCollapsed="true" >}}

# Contributing guide

## Prerequisites

The following Visual Studio Code extensions are required for <something>:

- <Extension>

## How to get started?

Before writing your own <something> try to explore existing ones with preinstalled
prerequisites. Start with the [simplest][simplest] one.

## See also

- <Tutorial>

[simplest]: https://url-to-simplest-example
{{< /code >}}

For the sake of clear understanding please view [this][contributing]
**CONTRIBUTING.md** in CLI page repository.

[contributing]: https://github.com/command-line-interface-pages/cli-pages/blob/main/CONTRIBUTING.md?plain=1

## Bash

### Basic help system

Both interactive tools and library-like scripts (we simply refer to them as
libraries here, even there is no such concept in Bash) must provide some basic
information about how to use them and who created it:

- Interactive scripts should always have the following functions defined:
  - `help`: open a man page
  - `version`: print a version with a trailing `\n` and without `v` prefix, like
    **2.17.1**
  - `author`: print an author name with a trailing `\n`, like
    **Emily Grace Seville**
  - `email`: print an author email with a trailing `\n`, like
    **EmilySeville7cfg@gmail.com**
- Non-interactive have to define almost the same things, but prefix each
  function with some chosen prefix followed by two underscores, like
  `parser__version`

### Prefixes

When writing scripts you as a programmer are free to chose how to name variables
and functions, but when library is being created more restrictions apply as
this code is gonna to be reusable. For the sake of clarity all library functions
and global variables must have some prefix, like `parser__`. It's not required
to make it almost the same as library name. For instance, it's okay not to have
`clip_parse__` prefix when writing clip-parse library.

### Capitalization

Variables which are set just once and used as constants must be capitalized,
even they don't have `-r` flag.

### Input and output parameters for functions

It's important to differentiate between 3 types of variables inside functions:

- input variables
- temporary variables
- output variables

Note that all are temporary technically, but we just want to separate their
semantics here.

First ones are used to store `$1`, `$2` and other parameters.
Always use them, don't write plain references to `$1` or something like that.
Other programmers have to know variables intend which is depicted via their
names. Such variables always have to begin with `in_` prefix.

Output variables present things those will be returned or echo-ed and used via
command substitution. Such variables always have to begin with `out_` prefix.

Everything else is named as temporary variables.

### Declaring and changing variables

Always declare variables with `declare`, even inside functions. It should be
clear where variables are defined at the first place and where reassigned.

Use `-i` flag when variable indented to hold an integer. Don't use `((...))`,
prefer modifying variables directly.

### CLI

CLI should have readable and memorable options at the first place, and short
ones just at the second. It means that not having short options is fine.

But some general options always must have both forms:

- `--help`/`-h`
- `--version`/`-v`
- `--author`/`-a`
- `--email`/`-e`

When custom options (which are not one of these 4 above) consist on multiple
words they always have to be hyphen-delimited. Short options for such long ones
should begin with a single dash and have all first word letters then, like
`-spc` for `--special-placeholder-config` long equivalent.

If it's not enough, it's possible to make add even shorter variations by
picking just the first letter of the short option. Note that more concise
option is more name collisions can occur. That's why long variants are better.

Never make options which differentiate just by a case, like `-a` and `-A`. It's
hard to remember what the difference between them. Don't make users to be
confused.

If you are a such person who prefers type as few as it's possible then provide
shell completions for commands.
