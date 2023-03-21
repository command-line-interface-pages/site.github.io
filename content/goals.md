---
title: "Goals"
date: 2023-03-09T13:42:34+10:00
draft: false
---

# Introduction :information_source:

The main task now is to make all tools support
[v2.7.0 syntax][syntax]:

- write Bash-based parser to quickly parse pages
- use it in render and some converters

[syntax]: https://github.com/command-line-interface-pages/syntax/blob/main/base.md

## [CLI pages][cli-pages] :books:

Now we are focused on updating and adding missing coreutils pages. We're aiming
to refresh them to make them more user-friendly. For instance:

- provide both GNU-style long and short options to let user chose what they are
  the most comfortable with
- add auto generated examples for help/version options like `--help`/`--version`
  respectively to let people easily access builtin command help when required
- add mnemonics for almost all options to simplify command option's memorization

[cli-pages]: https://github.com/command-line-interface-pages/cli-pages

## [Directory pages][directory-pages] :books:

It's a one of brand-new repos out there. So at the first place we need just to
fill it with useful content based on
[Filesystem Hierarchy Standard][fhs] and detect current syntax issues in the
content of such pages to solve them in the next syntax version.

[directory-pages]: https://github.com/command-line-interface-pages/directory-pages
[fhs]: https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html
