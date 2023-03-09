---
title: "About"
date: 2023-03-09T13:26:26+10:00
draft: false
---

# Introduction

Want to learn [command syntax](https://github.com/command-line-interface-pages/cli-pages),
[hierichy structure](https://github.com/command-line-interface-pages/directory-pages)
and command configs? Don't wanna read long man pages like `git` has?

{{< image src="/git.jpg" alt="git man" position="center" style="border-radius: 4px;" >}}

Then this project is for you! Don't just
copy-paste things, learn them through provided examples!

## Installation

Via the following commands you can install our page
[render](https://github.com/command-line-interface-pages/v2-tooling/tree/main/clip-view):

{{< code language="bash" title="Installation commands" id="1" expand="Show" collapse="Hide" isCollapsed="true" >}}
temp="$(mktemp)"
wget -O "$temp" https://raw.githubusercontent.com/command-line-interface-pages/v2-tooling/main/clip-view/makefile
make -f "$temp" remote-install
{{< /code >}}

To virefy whether if successfully installed to `/home/$USER/.local/bin` type
`clip-view --version`. To view `cat` page just type `clip-view cat`.

## Uninstallation

All tools are being installed in `/home/$USER/.local/bin` directory. So to remove
them just run `rm` command like `rm /home/$USER/.local/bin/clip-view`.

## Expectations from the end user

We assume that the end user is already familiar with some programming stuff. To
be more precise we expect all page syntax to be understandable by default no
matter it what. When we encounter some repetetive problem we standardize a way
to solve it. We don't handle each page specificly.

## Contributions

Each repository contains link to it's contributing guide (named CONTRIBUTING.md)
where you can learn how to get started with writing your own pages,
[themes](https://github.com/command-line-interface-pages/themes)
or [tools](https://github.com/command-line-interface-pages/v2-tooling).

## Supported by

[TlDr](https://github.com/tldr-pages/tldr/pull/9845)
[Cheat](https://github.com/cheat/cheatsheets/pull/226)
[Cheatsheets](https://github.com/rstacruz/cheatsheets/pull/1953)
[Eg](hhttps://github.com/srsudar/eg/pull/97)
