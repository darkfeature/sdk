module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // A new feature
        'fix', // A bug fix
        'docs', // Documentation changes
        'style', // Code style changes
        'refactor', // Code changes that neither fix bugs nor add features
        'perf', // Performance improvements
        'test', // Adding or fixing tests
        'chore', // Changes to the build process or auxiliary tools
        'ci', // Changes to CI configuration files and scripts
        'build', // Changes that affect the build system or external dependencies
        'revert', // Reverts a previous commit
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
}
