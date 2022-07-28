```
To use this template to create a new Ghost instance:

- Clone repository locally

- Globally replace:

  - theme_name with one word theme name

  - github_team with GitHub team name

  - theme_description with one line description

- Inspect everything

- Delete this code block

- Check in

- Delete the local repository

- Follow Development / Setup instructions below

- Make magic happen

```

# theme_name

theme_description

## Development

### Setup

You'll need [Node](https://nodejs.org/) and [Yarn](https://classic.yarnpkg.com/) installed globally.

After that, install Ghost locally, clone the theme repository, and start a development instance:

```bash
$ yarn global add ghost-cli@latest
$ yarn global add gscan@latest
$ mkdir /src/theme_name && cd /src/theme_name
$ ghost install local
$ git clone git@github.com:github_team/theme_name.git
$ ln -s ../../theme_name content/themes/theme_name
$ cd theme_name
$ yarn install
$ yarn build
$ ghost start -D
```

**NOTE:** If you make any changes to the above, be sure /content/themes/theme_name is a symbolic link to your development directory rather than your development directory itself. It's easy to accidently upload a theme zip file to your local Ghost Editor, where it will cheerfully copy over your development directory, along with any stashed or uncommitted changes you might have.

Follow the link provided by the server to launch the Ghost admin interface. Under _Settings_, click _Design_. Find the _Installed Themes_ list. If you've installed things correctly, you'll see `theme_name` in the list. Click _Activate_. When you _View site_, you should now see this theme instead of Casper, Ghost's default theme. You should only need to do this once.

### Develop

To begin development work, start Ghost in dev mode, move to the theme directory, and start the dev processes:

```bash
$ ghost start -D
$ cd content/themes/theme_name
$ yarn dev
```

### Code Guidelines

- Use [Prettier](https://prettier.io) with **no options** to keep code formatting consistent.

- Specify **all** color, font, and elevation effects with [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) on the :root pseudo-class. Always [specify color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) using rgba() functional syntax.

- Specify **all** values that change to provide responsiveness as CSS custom properties on the :root pseudo-class. **Only** CSS custom property rulesets should be added to [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries). This is more work up front, but substantially simplifies future development. Keep simple values and font declarations separate.

## Deployment

### Setup

### Deploying a new version

The safest way to obtain the latest theme bundle is from [the Assets list of the latest release](https://github.com/TEAM/PROJECT/releases).

You can also create zip bundles from your development instance. First [Update Ghost](https://ghost.org/update/), then in `content/themes/theme_name` run:

```bash
$ yarn install
$ yarn build
$ yarn test
$ yarn bundle
```

This will

- install any new module dependencies
- create javascript and css bundles
- run `gscan` to test that the theme is compatible with the installed version of Ghost
- build a production zip bundle

Before uploading any theme file to production, be sure you've tested thoroughly!

## Reference

- [Ghost API Docs](https://api.ghost.org/)
- [Ghost API Docs, Filtering](https://ghost.org/docs/content-api/#filtering)
- [Ghost Themes Docs](https://themes.ghost.org)
- [Ghost Partials](https://ghost.org/docs/api/v3/handlebars-themes/helpers/partials/)
- [Ghost Tutorials](https://ghost.org/tutorials/)
