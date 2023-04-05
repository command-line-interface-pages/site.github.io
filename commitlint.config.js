module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    "body-full-stop": [
      2,
      "always",
      "."
    ],
    "body-leading-blank": [
      2,
      "always"
    ],
    "body-max-length": [
      2,
      "always",
      400
    ],
    "body-max-line-length": [
      2,
      "always",
      80
    ],
    "body-min-length": [
      2,
      "always",
      10
    ],
    "body-case": [
      1,
      "always",
      "lower-case"
    ],
    "footer-leading-blank": [
      2,
      "always"
    ],
    "footer-max-length": [
      2,
      "always",
      200
    ],
    "footer-max-line-length": [
      2,
      "always",
      80
    ],
    "footer-min-length": [
      2,
      "always",
      27
    ],
    "header-max-length": [
      2,
      "always",
      80
    ],
    "header-min-length": [
      2,
      "always",
      16
    ],
    "scope-max-length": [
      2,
      "always",
      10
    ],
    "scope-min-length": [
      2,
      "always",
      2
    ],
    "subject-full-stop": [
      2,
      "never",
      "."
    ],
    "type-case": [
      2,
      "always",
      "lower-case"
    ],
    "type-empty": [
      2,
      "never"
    ],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "revert"
      ]
    ]
  }
}
