const Level = Object.freeze({
  None: Symbol("none"),
  Warning: Symbol("warning"),
  Error: Symbol("error")
})

function RuleOptions(level, invert, parameters) {
  if (typeof invert !== 'boolean')
    throw Error("'invert' should be boolean")

  let levelNumber = 0

  switch (level) {
    case Level.None:
      levelNumber = 0
      break;

    case Level.Warning:
      levelNumber = 1
      break;

    case Level.Error:
      levelNumber = 2
      break;

    default:
      throw Error("'level' should be None, Warning or Error")
  }

  return [levelNumber, invert ? "never" : "always", parameters]
}

module.exports = {
  extends: [
    "@commitlint/config-conventional"
  ],
  rules: {
    "body-full-stop": RuleOptions(Level.Error, false, "."),
    "body-leading-blank": RuleOptions(Level.Error, false),
    "body-max-length": RuleOptions(Level.Error, false, 400),
    "body-max-line-length": RuleOptions(Level.Error, false, 80),
    "body-min-length": RuleOptions(Level.Error, false, 10),
    "body-case": RuleOptions(Level.Warning, false, "lower-case"),
    "footer-leading-blank": RuleOptions(Level.Error, false),
    "footer-max-length": RuleOptions(Level.Error, false, 200),
    "footer-max-line-length": RuleOptions(Level.Error, false, 80),
    "footer-min-length": RuleOptions(Level.Error, false, 27),
    "header-max-length": RuleOptions(Level.Error, false, 80),
    "header-min-length": RuleOptions(Level.Error, false, 16),
    "scope-max-length": RuleOptions(Level.Error, false, 10),
    "scope-min-length": RuleOptions(Level.Error, false, 2),
    "subject-full-stop": RuleOptions(Level.Error, true, "."),
    "type-case": RuleOptions(Level.Error, false, "lower-case"),
    "type-empty": RuleOptions(Level.Error, true),
    "type-enum": RuleOptions(Level.Error, false, [
      "feat",
      "fix",
      "refactor",
      "revert"
    ])
  }
}
