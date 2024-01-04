# docs
Documentation for [Shadow](https://github.com/shadow/shadow).

Automatically builds documentation and publishes it to
https://shadow.github.io/docs/.

Maintenance note: To clear past builds, run `git -c "merge.renamelimit=5000"
rebase -i --root` and `:g/Generated docs for shadow\/shadow/ s/pick/drop/` if
your editor is vim.
