# REST API endpoints for Git blobs

## About Git blobs

A Git blob (binary large object) is the object type used to store the contents of each file in a repository. The file's SHA-1 hash is computed and stored in the blob object. These endpoints allow you to read and write [blob objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)
to your Git database on GitHub. Blobs leverage custom media types. For more information about the use of media types in the API, see [Getting Started With The Rest API](https://docs.github.com/en/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types).
