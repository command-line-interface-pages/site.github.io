# Contributing guide

## Prerequisites

### Visual Studio Code

- [common extensions](https://command-line-interface-pages.github.io/site.github.io/extensions/)
- YAML:
  - [YAML (linter, formatter, intellisence, snippets)](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)  
    If you prefer [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions) extension over this one, it's possible
    to disable YAML extension for workflow files via:

    ```json
    {
      "yaml.schemas": {
        "schemas/empty.json": ".github/workflows/*.yaml"
      }
    }
    ```

    where **empty.json** is a schema with:

    ```json
    {}
    ```

    content.

- Hugo:
  - [Hugo Language and Syntax Support (snippets, highlighting)](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

## How to get started?

Before writing your own pages try to explore existing ones with preinstalled
prerequisites. Start with the [simplest](./content/goals.md) one.

### How to add a repository to the [home page][home]?

Public repositories are not listed automatically based on our organization.
It's manually chosen what to show and what not. To add a new repository to
the repository list:

- Open [`data/repositories.yaml`](./data/repositories.yaml) file
- Add a new array item like:

  ```yaml
  cli-pages: # A repository
    description: Command Line Interface (CLI) pages
  ```

[home]: https://command-line-interface-pages.github.io/site.github.io/

### How to add a similar project to the [project page][projects]?

To add a new similar project to the project list:

- Open [`data/projects.yaml`](./data/projects.yaml) file
- Add a new array item like:

  ```yaml
  eg: # A similar project
    description: Useful examples at the command line
    url: https://github.com/srsudar/eg
  ```

[projects]: https://command-line-interface-pages.github.io/site.github.io/projects/

### How to add a common extension to the [extension page][extensions]?

To add a new common extension to the extension list:

- Open [`data/extensions.yaml`](./data/extensions.yaml) file
- Add a new object like:

  ```yaml
  Commit messages: # An extension category
    commitlint: # A common extension
      description: A VS Code extension that integrates commitlint
      url: https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint
      type: [linter]
  ```

[extensions]: https://command-line-interface-pages.github.io/site.github.io/extensions/

### How to add a common editor to the [editor page][editors]?

To add a new common editor to the editor list:

- Open [`data/editors.yaml`](./data/editors.yaml) file
- Add a new object like:

  ```yaml
  Krita: # An editor
    description: Free and open-source raster graphics editor.
    url: https://krita.org/en/
  ```

[editors]: https://command-line-interface-pages.github.io/site.github.io/editors/

### How to add a project supporting this one to the [supported by list][support]?

To add a new common editor to the editor list:

- Open [`data/support.yaml`](./data/support.yaml) file
- Add a new object like:

  ```yaml
  Cheatsheets: # A project
    introduction_url: https://github.com/rstacruz/cheatsheets/pull/1953
    mention_url: https://github.com/rstacruz/cheatsheets/pull/1961
  ```

[support]: https://command-line-interface-pages.github.io/site.github.io/about/#supported-by-

### How else can I help?

Now we don't have anybody in organization who understands HTML, CSS and
JavaScript and willing to close [opened issues][issues]
related to these languages. If you are an open-source contributor and want to
help us, go ahead and make PR. 😄

Thanks!

[issues]: https://github.com/command-line-interface-pages/site.github.io/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22

## See also

- [Mike Dane: Hugo tutorials][mike_dane_playlist]

[mike_dane_playlist]: https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3
