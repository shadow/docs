# docs

[Rendered documentation](https://shadow.github.io/docs/) for Shadow.

GitHub Actions builds and publishes Shadow's documentation nightly.

Maintenance note: To clear past builds, run `git -c "merge.renamelimit=5000"
rebase -i --root` and `:g/Generated docs for shadow\/shadow/ s/pick/drop/` if
your editor is vim.
