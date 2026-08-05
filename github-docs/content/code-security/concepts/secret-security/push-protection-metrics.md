# Secret scanning push protection metrics

## Overview

The metrics overview for secret scanning push protection on security overview helps you understand how well you are preventing secret leaks in your organization or across organizations in your enterprise. You can view the entire dataset or filter for specific criteria, making it easy to identify repositories where you may need to take action to prevent future leaks.

## Available metrics

The overview shows you a summary of how many pushes containing secrets have been successfully blocked by push protection, as well as how many times push protection was bypassed.

You can also find more granular metrics, such as:
* The secret types that have been blocked or bypassed the most
* The repositories that have had the most pushes blocked
* The repositories that are bypassing push protection the most
* The percentage distribution of reasons that users give when they bypass the protection

## Visibility

You can see secret scanning metrics for a repository if you have:

* The `admin` role for the repository
* A custom repository role with the "View secret scanning alerts" fine-grained permissions for the repository
* Access to alerts for the repository
