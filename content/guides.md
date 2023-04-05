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

![ci-status](https://img.shields.io/github/actions/workflow/status/command-line-interface-pages/<Repository>/ci.yaml?style=flat-square)
[![help-wanted-issues](https://img.shields.io/github/issues/command-line-interface-pages/<Repository>/help%20wanted?color=orange&style=flat-square)][help-wanted-issues]
[![goals](https://img.shields.io/badge/Current-goals-a32236?labelColor=ed425c&style=flat-square)][goals]

<Repository-description>.

[goals]: https://command-line-interface-pages.github.io/site.github.io/goals/#
[help-wanted-issues]: https://github.com/command-line-interface-pages/site.github.io/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22

## Quick introduction :rocket:

<Text>.

## Writing pages :hammer_and_wrench:

Read [this](./CONTRIBUTING.md) guide for details.
{{< /code >}}

- If continuous integration is not set up then CI badge can be omitted.
- If there are no goals listed in [this]({{< ref "goals" >}}) page then the last
  badge can be omitted.
- The middle badge can never be omitted.

For the sake of clear understanding please view [this][readme] **README.md** in
this repository.

[readme]: https://github.com/command-line-interface-pages/site.github.io/blob/main/README.md?plain=1

## CONTRIBUTING

Contributing guides must exist just as top-level **CONTRIBUTING.md** files and
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

- <Extension-category>
  - [<Extension> <Used-for>](<url>)

## How to get started?

Before writing your own <something> try to explore existing ones with
preinstalled prerequisites. Start with the [simplest][simplest] one.

## See also

- <Tutorial>

[simplest]: https://url-to-simplest-example
{{< /code >}}

For the sake of clear understanding please view [this][contributing]
**CONTRIBUTING.md** in this repository.

Instead of `<Used-for>` write this list in braces with some items omitted:
`(linter, formatter, intellisence, snippets, highlighting, unit test executor,
debugger)`.

Note that it's possible to add nested headers for `How to get started?`. They
can be used to show how to work with some custom things, like our own Hugo data
files, but also pay attention what we need for now. Such headers should be
written as questions, like `How to add a similar project to the project page?`
or `How else can I help?`. The last one has to be used to explain what kind of
professionals we lack now to attract their attention.

[contributing]: https://github.com/command-line-interface-pages/site.github.io/blob/main/CONTRIBUTING.md?plain=1

## Commands and files

All terminal commands should be surrounded with `backticks`, while all file
names have a **bold font**. If a file is a part of absolute or relative path,
then the whole path has to be put inside double asterisks. It must be done
across all site pages and in all other Markdown files.

## CLI

CLI should have readable and memorable options at the first place, and short
ones just at the second. It means that not having short options is fine.

But some general options always must have both forms:

- `--help`/`-h`
- `--version`/`-v`
- `--author`/`-a`
- `--email`/`-e`

When custom options (which are not one of these 4 above) consist on multiple
words they always have to be hyphen-delimited, like `--output-directory`. Short
options for such long ones should begin with a single dash and have all first
word letters then, like `-spc` for `--special-placeholder-config` long
equivalent. Technically such short options are named as old options.

If it's not enough, it's possible to make add even shorter variations by
picking just the first letter of the short option. Note that more concise
option is more name collisions can occur. That's why long variants are better.

Never make options which differentiate just by a case, like `-a` and `-A`. It's
hard to remember what the difference between them. Don't make users to be
confused.

If you prefer to type as few as it's possible then provide shell completions for
commands.

## Help system

Tools always have to invoke some sort of generally used help system instead of
writing their of equivalents when `--help`/`-h` is passed. To make it clear here
is a list of things must be used for different languages:

- shell scripts: man page

## Bash

### Help system functions

Interactive Bash scripts must define the following functions:

- `help`
- `version`
- `author`
- `email`

While non-interactive ones (which we call libraries here) these functions:

- `<file>__help`
- `<file>__version`
- `<file>__author`
- `<file>__email`

`<file>` must contain the library name without extension and dashes replaced
with underscores. For instance for `clip-parse.sh` help function would be
`clip_parse__help`.

As a sidenote `*version`, `*author`, `*email` (glob syntax is used here)
functions must output what they print without trailing new line.

### Prefixes

When writing scripts you as a programmer are free to chose how to name variables
and functions, but when library is being created more restrictions apply as
this code is gonna to be reusable. For the sake of clarity all library functions
and global variables must have some prefix, like `clip_parse__`.

### Constants

Variables which are set just once and used as constants must be capitalized,
even they don't have `-r` flag. We don't recommend using `-r` as it's
impossible to define function-local constants with the same name as global ones
have:

{{< code language="bash" title="Sticky -r flag example" id="3" expand="Show"
    collapse="Hide" isCollapsed="true" >}}
declare -r SOME_CONSTANT="global constant"

some_function() {
  declare -r SOME_CONSTANT="oops, can't redefine global constant"
}

some_function
{{< /code >}}

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
names. Such variables always have to begin with `in_` prefix like `in_file`.

Output variables present things those will be returned or echo-ed and used via
command substitution. Such variables always have to begin with `out_` prefix
like `out_color`.

Everything else is named as temporary variables.

### Declaring and changing variables

Always declare variables with `declare`, even inside functions. It should be
clear where variables are defined at the first place and where reassigned.

Use `-i` flag when variable indented to hold an integer. Don't use `((...))`,
prefer modifying variables directly.

### Names and values

By default, we assume that variable or constant contains some name. In other
words `file` must be a file name, not it's content or anything else. To
indicate that some value like timestamp is stored add `_value` suffix to
a variable like `timestamp_value`.

Note that we don't tell what can be considered as name and what like value.
Technically everything can be treated like a some value, but to be more precise
we differentiate between these two cases. It's like naming everything as a
`System.Object` in C# while there are many subtypes of it.

Names can be considered as some identifiers, or dictionary keys, something that
is used to retrieve any data.

## JSON schema

Requirements are based on the way Visual Studio Code YAML works.

### Keys

Always include `title` key for `object` keys as they are shown in errors when
not legitimate value is passed. But constantly include `description` key for any
kind of key. Everything should have its description no matter it is.

Always add constraining keywords like `minLength`, `minItems` unless such
constraint is not valid according to the data format.

### Titles and descriptions

Titles have to be written in lowercase by default without a trailing dot, just
names can be capitalized like `C# compiler`. At the same time descriptions
must start with a capital letter. Both things should be short, but descriptions
can be longer and should contain articles like `A C# compiler`.

When documentation exist include its link directly at the end of description
prepended with `\n` character like
`A C# compiler\nhttps://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/`.

### Additional properties

Deny additional properties by default, unless it contradicts data format. For
instance Hugo site config can contain theme-specific options and as there are
numerous themes it's nearly impossible to present them all in a JSON schema.
As a result it's more efficient just to leave ability to add not mentioned keys
while providing IntelliSence for the common Hugo settings.

### Pattern properties

Always use pattern properties to signify some names or identifiers. The reason
for that is simple: YAML Red Hat extension currently can't check whether
`object`-s are identical or not in arrays and such check happens just for
simple types like `string`. In other words, extension doesn't detect such cases:

{{< code language="yaml" title="Identical objects example" id="4" expand="Show"
    collapse="Hide" isCollapsed="true" >}}
- name: Emily
  github: https://github.com/EmilySeville7cfg
- name: Emily
  github: https://github.com/EmilySeville7cfg
{{< /code >}}

The solution we propose is to rewrite this file to:

{{< code language="yaml" title="Fixed identical objects example" id="5" expand="Show"
    collapse="Hide" isCollapsed="true" >}}
Emily:
  github: https://github.com/EmilySeville7cfg
Emily:
  github: https://github.com/EmilySeville7cfg
{{< /code >}}

which will cause an error (it's what we want) as there are two equal keys
representing usernames. By all means, it also doesn't check whether object
contents are equal, but it looks up whether there are identical keys in the
same level. Here it's enough, as we don't want permit put data about some user
several times.

## Choosing language for scripting

- For continues integration and deployment use Bash (at least 5th).
- For CLIP page parsers/renderers/converters/explainers use Go.

Currently, our toolkit is written in Bash. Even so, it doesn't mean
that rules above can be violated. In other words, we are going to rewrite this
toolkit in Go.

## Choosing language for configs

When there are several choices available and one of them is writing config in
YAML for some tool, prefer this language. The benefit is to have IntelliSence
in such configs enabled by YAML extension and based on provided remote or local
JSON schemas.

Note that JSON schemas are not context aware. It means that they know just what
is written inside them and what they are referencing too (other schemas). It
makes impossible to check URL reachability inside schemas or file/directory
existence. When such things are required write simple Go validator for your
config file. But it's allowed to do such checks via Hugo templates too instead
of standalone Go programs.

Configuration files also can be written in JavaScript, but only if they provide
some benefits over using YAML/JSON. Editor configs like
**.vscode/settings.json** are editor specific and some CLI tool which is
integrated with some editor can not understand custom settings put in a such
config. When it's the case JavaScript can be involved, not in another
situation. For example, `commitlint` [uses][rules] JavaScript as
it can pull custom settings from .js file when invoked in terminal.

[rules]: https://github.com/command-line-interface-pages/site.github.io/blob/main/commitlint.config.js#L37

## Krita

When creating .kra Krita files it's important to remember that they should be
organized in a pretty way like programming code.

### Layers

We prefer to follow these rules while naming and structuring layers:

- There is also just one layer named **Background** which filled with some
  color/gradient/pattern/texture.
- By default, we prefer vector layers for any kind of objects as they easier to
  modify. Paint layers can be used just when any complex thing has to be drawn.
- Any transformations namely changing colors, scaling, modifying transparency
  must be done via mask layers as they provide a non-destructive layer edit
  approach.
- Layer masks should be named using this syntax: `<Type>: <Description>`, e.g.
  `Filter: Decolorize` or `Transform: Upscale`.
- Any layers those add some effects like shadow, reflections, should be named in
  the following manner: `<Effect>: <Base layer>`. To make things clear, let's
  say we created layer with books drawn on it (**Books** layer) and then added a
  new one to add shadow for books with title **Shadow: Books**.
