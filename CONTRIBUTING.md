# Contributing guide

## Prerequisites

The following Visual Studio Code extensions are required for IntelliSense in a
site config file:

- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

## How to get started?

Before writing your own pages try to explore existing ones with preinstalled
prerequisites. Start with the [simplest](./content/goals.md) one.

### How to add a repository to the home page?

Public repositories are not listed automatically based on our organization.
It's manually chosen what to show and what not. To add a new repository to
the repository list:

- Open `data/repositories.yaml` file
- Add a new array item like:

    ```yaml
    - name: cli-pages
    description: Command Line Interface (CLI) pages
    ```

## See also

- [Mike Dane: Hugo tutorials][mike_dane_playlist]

[mike_dane_playlist]: https://www.youtube.com/watch?v=qtIqKaDlqXo&list=PLLAZ4kZ9dFpOnyRlyS-liKL5ReHDcj4G3
