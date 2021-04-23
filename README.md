# LASA Schedules 3

by Cameron Kleiman for LASA 2019.

## About

LASA Schedules allows you to track today's bell schedule for students of [LASA High School](https://www.lasahighschool.org). It's developed and mantained by Cameron Kleiman, an alumni of LASA 2019. This repo contains the [Angular](https://angular.io) application, which uses the [Ionic Framework](https://ionicframework.com/).

The app revolves around two tabs:

- **Current Schedule**: Shows today's current schedule (if there is one), the time, and how much time is left in the current period.
- **All Schedules**: Shows the full tabbed list of schedules, defaulting to the today's current one (if one applies).

## See Also

- [camtheman256/lasa-schedules-data](https://github.com/camtheman256/lasa-schedules-data): The raw schedules data that powers the LASA Schedules application, hosted at https://schedules-data.lasa2019.com
- [camtheman256/lasa-schedules-editor](https://github.com/camtheman256/lasa-schedules-editor): A graphical editor which you can use for editing the array of schedules that powers the LASA Schedules application, hosted at https://schedules-editor.lasa2019.com

## Local Development

To develop the application locally, run

```bash
npm install   # Install dependencies
npm run serve  # Start local web server
```

## Building for production

To build the application for production, run

```bash
npm run build -- --prod
```

The production build will end up in a `www` directory.

## Building the Chrome Extension

When building for the Chrome extension, you'll want to make a production build into a directory called `www-chrome`, and copy in `manifest.json`. Make sure you modify the `manifest.json` to your liking before zipping up the Chrome Extension.

```bash
npm run build -- --prod --output-path www-chrome
cp manifest.json www-chrome/
```

Then, you'll want to insert this script into the `<head>` tag of the generated `www-chrome/index.html` file to have the extension display properly.

```html
<style type="text/css">
    html {
        min-width: 350px;
        min-height: 650px;
    }
</style>
```

Finally, you can load this extension "unpacked" into Chrome for development or zip it up for deployment to the Chrome Web Store.