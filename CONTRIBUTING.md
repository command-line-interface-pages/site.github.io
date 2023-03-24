# Contributing guide

## Prerequisites

### Visual Studio Code

- YAML:
  - [YAML (IntelliSence)](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
- commit messages:
  - [commitlint (Linter)](https://marketplace.visualstudio.com/items?itemName=joshbolduc.commitlint)

## How to get started?

Before writing your own pages try to explore existing ones with preinstalled
prerequisites. Start with the [simplest](./content/goals.md) one.

### How to add a repository to the home page?

Public repositories are not listed automatically based on our organization.
It's manually chosen what to show and what not. To add a new repository to
the repository list:

- Open [`data/repositories.yaml`](./data/repositories.yaml) file
- Add a new array item like:

    ```yaml
    - name: cli-pages
      description: Command Line Interface (CLI) pages
    ```

### How to add a similar project to the project page?

To add a new similar project to the project list:

- Open [`data/projects.yaml`](./data/projects.yaml) file
- Add a new array item like:

    ```yaml
    - name: eg
      description: Useful examples at the command line
      url: https://github.com/srsudar/eg
    ```

## See also

- [Mike Dane: Hugo tutorials][mike_dane_playlist]

[mike_dane_playlist]: https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3
