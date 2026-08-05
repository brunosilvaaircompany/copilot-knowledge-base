# Creating a custom badge for your GitHub App

## About badges

Every GitHub App has a badge. A badge is a square image inside a circular background.

By default, a new GitHub App will use an automatically generated identicon as a badge. An identicon badge looks something like this:

![Screenshot of an identicon, which consists of white pixels in a random pattern on a circular yellow background.](/assets/images/help/apps/identicon.png)

After you register a GitHub App, you can customize your app's badge by uploading a logo and selecting a background color. Your logo should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend an image dimension of 200 pixels by 200 pixels.



For more information about badges for GitHub Apps in GitHub Marketplace, see [Writing A Listing Description For Your App](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app#guidelines-for-logos). You can change a custom badge for a GitHub App that already has an approved Marketplace listing by navigating to https://github.com/marketplace/manage.



## Creating a custom badge

1. In the upper-right corner of any page on GitHub, click your profile picture.
1. Navigate to your account settings.
   * For an app owned by a personal account, click **Settings**.
   * For an app owned by an organization:
     1. Click **Your organizations**.
     1. To the right of the organization, click **Settings**.
   * For an app owned by an enterprise:
     1. If you use Enterprise Managed Users, click **Your enterprise** to go directly to the enterprise account settings.
     1. If you use personal accounts, click **Your enterprises** and then to the right of the enterprise, click **Settings**.{% elsif ghes %}
     1. Click **Enterprise settings**.



1. Navigate to the GitHub App settings.
   * For an app owned by a personal account or organization:
     1. In the left sidebar, click **{% octicon "code" aria-hidden="true" aria-label="code" %} Developer settings**, then click **GitHub Apps**.
   * For an app owned by an enterprise:
     1. In the left sidebar, under "Settings",{% elsif ghes %} click **Settings**, then click **GitHub Apps**.

1. To the right of the GitHub App you want to modify, click **Edit**.

1. Under "Display information", drag and drop an image from a local folder or click **Upload a logo** to select an image from your computer.
1. Optionally, crop your image.
1. Click **Set new avatar**.
1. Under "Badge background color", type the hexadecimal color code of the background color for your badge.



   > [!NOTE]
   > The "Badge background color" input field will only appear after you upload a logo.





## Next steps

For more information about listing your GitHub App in GitHub Marketplace, see [Listing An App On GitHub Marketplace](https://docs.github.com/en/apps/github-marketplace/listing-an-app-on-github-marketplace).
