# Collaboration with Git Large File Storage

If collaborators on your repository don't have Git LFS installed, they won't have access to the original large file. If they attempt to clone your repository, they will only fetch the pointer files, and won't have access to any of the actual data.

> [!TIP]
> To help users without Git LFS enabled, we recommend you set guidelines for repository contributors that describe how to work with large files. For example, you may ask contributors not to modify large files, or to upload changes to a file sharing service like [Dropbox](http://www.dropbox.com/) or [Google Drive](https://drive.google.com). For more information, see [Setting Guidelines For Repository Contributors](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors).

## Viewing large files in pull requests

GitHub does not render some Git LFS objects in pull requests. Only the pointer file is shown, with contents similar to the following:

```text
+version https://git-lfs.github.com/spec/vi
+id sha256:7194bdd797bde471a6e29b4fa9c8c2278b3c4dadfc5cb2c36d7f4531dc6cb8f
+size 17330
```

For more information about pointer files, see [About Git Large File Storage](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage#pointer-file-format).

To view changes made to large files, check out the pull request locally to review the diff. For more information, see [Checking Out Pull Requests Locally](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/checking-out-pull-requests-locally).



## Pushing large files to forks

Pushing large files to forks of a repository count against the parent repository's bandwidth and storage quotas, rather than the quotas of the fork owner.

You can push Git LFS objects to public forks if the repository network already has Git LFS objects or you have write access to the root of the repository network.



## Further reading

* [Duplicating A Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository-that-contains-git-large-file-storage-objects)
