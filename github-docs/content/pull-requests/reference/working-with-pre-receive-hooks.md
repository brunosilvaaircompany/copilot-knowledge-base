# Working with pre-receive hooks

Pre-receive hooks are scripts that run on GitHub Enterprise Server before Git accepts pushed commits. They enforce repository, organization, or enterprise policy at the point where code enters a repository.

A pre-receive hook can check whether a push follows required rules. For example, a hook might block pushes that include secrets, use nonstandard commit messages, or change protected files. If the push passes the checks, Git accepts it. If the push fails, Git rejects it and shows an error message.

If your push isn't accepted, you'll see an error message for the failed pre-receive hook.

```shell
$ git push
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 916 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
remote: always_reject.sh: failed with exit status 1
remote: error: rejecting all pushes
To https://54.204.174.51/hodor/nope.git
 ! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://54.204.174.51/hodor/nope.git'
```

Pre-receive hooks matter because they apply rules consistently before changes reach the repository. This can reduce manual review burden and prevent policy violations from being stored in Git history.

Your GitHub Enterprise Server site administrator creates and removes pre-receive hooks. They may also allow organization or repository administrators to enable or disable hooks for specific scopes. See [Enforcing Policy With Pre Receive Hooks](https://docs.github.com/en/admin/enforcing-policies/enforcing-policy-with-pre-receive-hooks).
