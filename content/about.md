---
title: "About"
date: 2023-03-09T13:26:26+10:00
draft: false
---

# Introduction :information_source:

Want to learn [command syntax](https://github.com/command-line-interface-pages/cli-pages),
[hierichy structure](https://github.com/command-line-interface-pages/directory-pages)
and command configs? Don't wanna read long man pages like `git` has?

{{< image src="/git.jpg" alt="git man" position="center" style="border-radius: 4px;" >}}

Then this project is for you! Don't just copy-paste things, learn them through
provided examples!

> Note for programmers: all pages are written in a parsable way so it's possible
> automatically extract some data from them to handle it.

## Installation :smile:

Via the following commands you can install our page
[render](https://github.com/command-line-interface-pages/v2-tooling/tree/main/clip-view):

{{< code language="bash" title="Installation commands" id="1" expand="Show" collapse="Hide" isCollapsed="true" >}}
temp="$(mktemp)"
wget -O "$temp" https://raw.githubusercontent.com/command-line-interface-pages/v2-tooling/main/clip-view/makefile
make -f "$temp" remote-install
{{< /code >}}

To virefy whether if successfully installed to `/home/$USER/.local/bin` type
`clip-view --version`. To view `cat` page just type `clip-view cat`.

## Uninstallation :disappointed:

All tools are being installed in `/home/$USER/.local/bin` directory. So to remove
them just run `rm` command like `rm /home/$USER/.local/bin/clip-view`.

## Why to use this project? :question:

There are numerous reasons, we listed some of them down below.

From the page writer's perspective:

- Write less, gain more:
  - Just mention how to get help or a version of some command and get
    automatically generated code examples for these options.
  - Just mention that the command is not intended for direct usage or is
    deprecated and get automatically generated note about it.
- Write using the unambiguous syntax:
  - Define when some command uses some I/O stream and be sure that
    code explanations have just one possible interpretation.
  - Define strict placeholder interpretation and type. Don't guess what some
    file with some extension is, for example, know its meaning directly from
    code.
- Permit users to use their preferences:
  - Don't use the most appropriate option's style from other's opinions. Let
    users choose what style is the best for them while switching between
    GNU-style long and short options.
- Write in the parsable format:
  - To be able to automatically extract information from pages and be sure about
    its semantics.

From the end-user perspective:

- Know how to get software built-in help or version.
- Be aware of when and what commands to use and what not.
- Know when the command uses and what I/O stream.
- Don't google what some not-familiar file is, see its description right here.
- Be yourself, and not the other person. Chose your code option's style.

We mention reasons mostly related to CLI pages, but mostly they are valid for
directory pages too. And, don't forget, that page look can be drasticly
customized via our
[themes](https://github.com/command-line-interface-pages/themes).

## Expectations from the end user :books:

We assume that the end user is already familiar with some programming stuff. To
be more precise we expect all page syntax to be understandable by default no
matter it what. When we encounter some repetetive problem we standardize a way
to solve it. We don't handle each page specificly.

## Contributions :hammer_and_wrench:

Each repository contains link to it's contributing guide (named CONTRIBUTING.md)
where you can learn how to get started with writing your own pages,
[themes](https://github.com/command-line-interface-pages/themes)
or [tools](https://github.com/command-line-interface-pages/v2-tooling).

Basically, to write themes you should know YAML and for writting pages Markdown.

## Supported by :heart_eyes:

[TlDr](https://github.com/tldr-pages/tldr/pull/9845)
[Cheat](https://github.com/cheat/cheatsheets/pull/226)
[Cheatsheets](https://github.com/rstacruz/cheatsheets/pull/1953)
[Eg](hhttps://github.com/srsudar/eg/pull/97)
