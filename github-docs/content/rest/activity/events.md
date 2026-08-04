# REST API endpoints for events

## About GitHub events

GitHub events power the various activity streams on the site.

You can use the REST API to return different types of events triggered by activity on GitHub. For more information about the specific events that you can receive, see [GitHub Event Types](https://docs.github.com/en/rest/using-the-rest-api/github-event-types). Endpoints for repository issues are also available. For more information, see [Events](https://docs.github.com/en/rest/issues/events).

Events are optimized for polling with the "ETag" header. If no new events have been triggered, you will see a "304 Not Modified" response, and your current rate limit will be untouched. There is also an "X-Poll-Interval" header that specifies how often (in seconds) you are allowed to poll. In times of high server load, the time may increase. Please obey the header.

``` shell
$ curl -I https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/users/tater/events
> HTTP/2 200
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I https://api.github.com{% elsif ghes %}http(s)://HOSTNAME/api/v3/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/2 304
> X-Poll-Interval: 60
```

The timeline will include up to 300 events. Only events created within the past 30 days will be included. Events older than 30 days will not be included (even if the total number of events in the timeline is less than 300).
