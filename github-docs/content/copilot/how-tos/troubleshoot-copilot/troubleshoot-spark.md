# Troubleshooting common issues with GitHub Spark

> [!NOTE]
> Beginning August 4, 2026, GitHub Spark will no longer accept new users or allow the creation of new apps. Existing users can continue to access and use apps they have already created. Open Spark workbench for your app, select "..." and "Create repository" to save your app code before August 31, 2026.

## Error: "Live preview is interrupted. Try refreshing the page to reconnect."

There is a known compatibility issue between Apple's Safari browser and the way Spark renders its live preview.

To resolve the issue, switch to a different browser such as Google Chrome, Microsoft Edge or Mozilla Firefox.

## Error: "HTTP 413 status code ("Payload Too Large")"

Spark uses a key-value store for app data. The combined size of the key (the label) and payload (the actual data) must be less than 512kB. If you save data over this limit, you'll get a HTTP 413 status code ("Payload Too Large") error.

To resolve the error, reduce the size of data you're trying to save, or split the data into smaller records.

## App fails to build after adding an external library

Spark uses an opinionated stack (React, TypeScript) for reliability. You can add external libraries to your spark, but compatibility isn’t guaranteed and you should test additions thoroughly. For best results, you should work within Spark's SDK and core framework.
