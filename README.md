# phanteks-p500a-snatcher

[FAQ](#FAQ) | [Issues](https://github.com/texlnghorn/phanteks-p500a-snatcher/issues) | [Wiki](https://github.com/texlnghorn/phanteks-p500a-snatcher/wiki)

The purpose of this bot is to get a Phanteks P500A D-RGB Case. It tries multiple things to do that.

- Currently, `phanteks-p500a-snatcher` is not capable of purchasing a case for you
- Scrapes multiple websites for patterns of being stocked
- Opens browser when stock is available
- Sends an email to you when stock is avaiable (must have Gmail)
- Sends an sms to you when stock is available (must have Gmail)

<details>
<summary>What you may see if you're lucky</summary>

```sh
2020-09-18T07:06:28.535Z info :: ✖ [phanteks] still out of stock: phanteks p500a white
2020-09-18T07:06:31.241Z info :: ✖ [newegg] still out of stock: phanteks p500a black
2020-09-18T07:06:34.212Z info :: ✖ [amazon] still out of stock: phanteks p500a black
2020-09-18T07:06:39.878Z info :: ✖ [newegg] still out of stock: phanteks p500a white
2020-09-18T07:06:43.236Z info :: ✖ [phanteks] still out of stock: phanteks p500a black
2020-09-18T07:06:43.318Z info :: 🚀🚀🚀 [amazon] phanteks p500a white IN STOCK 🚀🚀🚀
2020-09-18T07:06:43.318Z info :: https://www.amazon.com/dp/B088T78MJT
```

</details>

> You may get false positives from time to time. The library currently waits for all calls to be completed before parsing, but sometimes this can have unknown behavior. Patience is a virtue :)

| | **Amazon** | **Newegg** | **Phanteks USA** |
|:---:|:---:|:---:|:---:|
| **P500A D-RGB Black**| `✔` | `✔` | `✔` |
| **P500A D-RGB White** | `✔` | `✔` | `✔` |

## Installation and prerequisites

Linux, macOS, and Windows are all capable operating systems.

You do not need any computer skills, smarts, or anything of that nature. You are very capable as you have made it this far. Some basic understanding how a terminal, git, and or Node.js is a bonus, but that does not limit you to getting `phanteks-p500a-snatcher` running!

### Quick overview

- [Node.js 14](https://nodejs.org/en/)
- [git](https://git-scm.com/)
- Clone this project `git clone https://github.com/texlnghorn/phanteks-p500a-snatcher.git`
- Run `npm install`
- Copy `.env.example` to a new file `.env` and edit the `.env` file to your liking using your [favorite text editor](https://code.visualstudio.com/)
    - More on this in [customization](#Customization)
- Run `npm run start` to start

At any point you want the program to stop, use <kbd>Ctrl</kbd> + <kbd>C</kbd>.

### Customization

To customize `phanteks-p500a-snatcher`, make a copy of `.env-example` as `.env` and make any changes to your liking. _Note that all environment variables are **optional**._

Here is a list of variables that you can use to customize your newly copied `.env` file:

| **Environment variable** | **Description** | **Notes** |
|:---:|---|---|
| `DESKTOP_NOTIFICATIONS` | Display desktop notifications using [node-notifier](https://www.npmjs.com/package/node-notifier); optional | Default: `false` |
| `DISCORD_NOTIFY_GROUP` | Discord group you would like to notify; optional | E.g.: @here |
| `DISCORD_WEB_HOOK` | Discord Web Hook URL |
| `EMAIL_USERNAME` | Gmail address | E.g.: `jensen.robbed.us@gmail.com` |
| `EMAIL_PASSWORD` | Gmail password | See below if you have MFA |
| `HEADLESS` | Puppeteer to run headless or not | Debugging related, default: `true` |
| `IN_STOCK_WAIT_TIME` | Time to wait between requests to the same store if it has cards in stock | In seconds, default: `0` |
| `LOG_LEVEL` | [Logging levels](https://github.com/winstonjs/winston#logging-levels) | Debugging related, default: `info` |
| `OPEN_BROWSER` | Toggle for whether or not the browser should open when item is found | Default: `true` |
| `PAGE_TIMEOUT` | Navigation Timeout in milliseconds | `0` for infinite, default: `30000` |
| `PHONE_NUMBER` | 10 digit phone number | E.g.: `1234567890`, email configuration required |
| `PHONE_CARRIER` | [Supported carriers](#supported-carriers) for SMS | Email configuration required |
| `PLAY_SOUND` | Play this sound notification if a case is found | E.g.: `path/to/notification.wav`, relative path accepted, valid formats: wav, mp3, flac, [free sounds available](https://notificationsounds.com/) |
| `PUSHOVER_TOKEN` | Pushover access token | Generate at https://pushover.net/apps/build |
| `PUSHOVER_USER` | Pushover username |
| `PAGE_SLEEP_MIN` | Minimum sleep time between queries of the same store | Default: `5000` |
| `PAGE_SLEEP_MAX` | Maximum sleep time between queries of the same store | Default: `10000` |
| `SCREENSHOT` | Capture screenshot of page if a case is found | Default: `true` |
| `SHOW_ONLY_BRANDS` | Filter to show specified brands | Comma separated, E.g.: `phanteks` |
| `SHOW_ONLY_SERIES` | Filter to show specified series | Comma separated, E.g.: `black,white` |
| `SLACK_CHANNEL` | Slack channel for posting | E.g., `update`, no need for `#` |
| `SLACK_TOKEN` | Slack API token |
| `STORES` | [Supported stores](#supported-stores) you want to be scraped | Comma separated, default: `amazon,newegg,phanteks` |
| `COUNTRY` | [Supported country](#supported-countries)  you want to be scraped, currently only used by Nvidia | default: `usa` |
| `SCREENSHOT` | Capture screenshot of page if a case is found | Default: `true` |
| `TELEGRAM_ACCESS_TOKEN` | Telegram access token |
| `TELEGRAM_CHAT_ID` | Telegram chat ID |
| `USER_AGENT` | Custom User-Agent header for HTTP requests | Default: `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36` |
| `TWITTER_CONSUMER_KEY` | Twitter Consumer Key | Generate all Twitter keys at: https://developer.twitter.com/ |
| `TWITTER_CONSUMER_SECRET` | Twitter Consumer Secret |
| `TWITTER_ACCESS_TOKEN_KEY` | Twitter Token Key |
| `TWITTER_ACCESS_TOKEN_SECRET` | Twitter Token Secret |
| `TWITTER_TWEET_TAGS` | Optional list of hashtags to append to the tweet message | Eg: "`#P500A` `#P500AINSTOCK`" |

> :point_right: If you have multi-factor authentication (MFA), you will need to create an [app password](https://myaccount.google.com/apppasswords) and use this instead of your Gmail password.

> :point_right: You can find your computer's user agent by [searching google for "my user agent"](http://google.com/search?q=my+user+agent)

> :point_right: You can test your notification configuration by running `npm run test:notification`.

#### Supported stores

| **Stores** | **Environment variable** |
|:---:|:---:|
| Amazon | `amazon`|
| Newegg | `newegg`|
| Phanteks USA | `phanteks`|

#### Supported carriers

| **Carrier** | **Environment variable** | **Notes** |
|:---:|:---:|:---:|
| AT&T | `att`| |
| Google | `google`| |
| Mint | `mint`| |
| Sprint | `sprint`| |
| Telus | `telus`| |
| T-Mobile | `tmobile`| |
| Verizon | `verizon`| Works with Visible |

## FAQ

**Q: What's Node.js and how do I install it?** Visit [their website](https://nodejs.org/en/) and download and install it. Very straight forward. Otherwise, Google more information related to your system needs.

**Q: Will this harm my computer?** No.

**Q: Have you gotten a case yet?** Yes. A P500A D-RGB white from Amazon.

**Q: Will I get banned from of the stores?** Perhaps, but getting a case is a nice outcome.

### Acknowledgements

This project was only possible because of the pioneering work done to obtain an Nvidia 30x series graphics card by nvidia-snatcher

- [nvidia-snatcher](https://github.com/jef/nvidia-snatcher)
