---
title: Tool rewriting in Go
date: 2023-04-11T18:49:17+10:00
draft: false
---

## Introduction

Currently, our toolkit is written in Bash 5. The problem is that it's hard to
maintain it. Sure, Bash can be combined with YAML/JSON parsers to do some cool
stuff, but it just complicates things. It's harder to debug such scripts because
literally several languages are mixed in one place and each of them has its own
unique syntax.

We proved ourselves that it's possible to do exciting stuff in Bash. But the
end goal of this project not to prove ourselves what we can, but make codebase
maintainable. As a result we're going to rewrite it entirely in Go.

### Problems with Bash

We identified these issues with our preferred shell (just the most bothering
are mentioned):

- No readable functions to manipulate strings, just variable expansions.
  While it saves typing, it makes interpreting scripts harder for newbies.
- No strong dynamic typing. By strong term I mean something like in Python.
  Bash allows to interpret the same variable value as a string or number in
  different contexts. While it may seem convenient at the first glance, it's
  error-prone. Also, undefined variables are treated as zeros in arithmetic
  expressions which may hide typos.
- No way to actually return some structured data, even just one-dimensional
  arrays. While structuring is possible: you can output YAML/JSON and then
  interpret it via `yq`/`jq`, the way it's done is not efficient and
  inconvenient.
- LSP server for Bash is not ideal, now it's impossible to perform variable or
  function renaming via RMB in VS Code. It means that the only way to rename
  something is to change all occurrences of it and check whether just right
  identifiers are affected by this change.
- Bats plugin for Visual Studio Code doesn't provide intellisence for .bats
  files, just snippets and syntax highlighting. While it's not a big issue for
  small unit test files, it still makes test writing more error-prone as no one
  tells feedback about what you wrote instantly and no one suggests what can
  be used in a specific scope.

### What does it mean?

We don't reject Bash completely, we acknowledge that it's a good shell. But for
the tasks we mostly perform it's not the right tool. We're going to still use it
for CI/CD pipelines, but constrain shell scripts to short ones and require
rewrite them if they are too long.

Note that we don't deprecate Bash tooling right now, we are going to close some
opened issues in its repo (especially, fix bugs), but that's all. Today we are
closing some issues marking them as `invalid` to implement this stuff in Go
later.
