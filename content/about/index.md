---
title: "About"
date: 2023-03-09T17:03:18+10:00
draft: false
---

> :deciduous_tree: Slogan: *[E]xtremely [B]oring, [B]e [C]oncise*, or *EB;BC*

[:star: Star on GitHub](https://github.com/command-line-interface-pages/cli-pages)

# Introduction :information_source:

Want to learn [command syntax][cli-pages],
[hierarchy structure][directory-pages]
and command configs? Don't want to read long man pages like `git` has?

{{< image src="git-man.jpg" alt="git man" position="center"
    style="border-radius: 4px;" >}}

Then this project is for you! Don't just copy-paste things, learn them through
provided examples! Just look how our page is simpler:

{{< image src="git-clip.jpg" alt="git man" position="center"
    style="border-radius: 4px; width:420px; height: auto" >}}

> Note for programmers: all pages are written in a parsable way, so it's possible
> automatically extract some data from them to handle it.

## Installation :smile:

Via the following commands you can install our page
[render][render]:

{{< code language="bash" title="Installation commands" id="1" expand="Show"
    collapse="Hide" isCollapsed="true" >}}
temp="$(mktemp)"
wget -O "$temp" https://raw.githubusercontent.com/command-line-interface-pages/v2-tooling/main/clip-view/makefile
make -f "$temp" remote-install
{{< /code >}}

To verify whether if successfully installed to `/home/$USER/.local/bin` type
`clip-view --version`. To view `cat` page just type `clip-view cat`.

> Note for programmers: installation also can be done via cloning
> [tools][tools] repo, moving to `clip-view` directory and issuing
> `make install` command.

## Uninstallation :disappointed:

All tools are being installed in `/home/$USER/.local/bin` directory. So to remove
them just run `rm` command like `rm /home/$USER/.local/bin/clip-view`.

> Note for programmers: uninstallation also can be done via moving to
> `clip-view` directory and issuing `make uninstall` command.

## Why to use this project? :question:

- Write less, gain more
- Permit users to use their preferences
- Write in the parsable format
- Customize page look as you want
- Add page for any project you want

> :information_source: Note: projects with less than 5 stars considered as
> untrusted. It doesn't characterize them negatively, it just means
> they are not popular now.

## Expectations from the end user :books:

We assume that the end user is already familiar with some programming stuff. To
be more precise we expect all page syntax to be understandable by default no
matter it what. When we encounter some repetitive problem we standardize a way
to solve it. We don't handle each page specifically.

## Contributions :hammer_and_wrench:

Each repository contains link to it's contributing guide (named **CONTRIBUTING.md**)
where you can learn how to get started with writing your own pages,
[themes][themes]
or [tools][tools].

Basically, to write themes you should know YAML while for writing pages
Markdown is required. If you wanna more than it's possible to develop project
tools like render, parser and other stuff which are written mainly in Bash.

## Supported by :heart_eyes:

[TlDr](https://github.com/tldr-pages/tldr/pull/9845)
[Cheat](https://github.com/cheat/cheatsheets/pull/226)
[Cheatsheets](https://github.com/rstacruz/cheatsheets/pull/1953)
[Eg](https://github.com/srsudar/eg/pull/97)

[cli-pages]: https://github.com/command-line-interface-pages/cli-pages
[directory-pages]: https://github.com/command-line-interface-pages/directory-pages
[render]: https://github.com/command-line-interface-pages/v2-tooling/tree/main/clip-view
[themes]: https://github.com/command-line-interface-pages/themes
[tools]: https://github.com/command-line-interface-pages/v2-tooling
