# Archetype for Genesis #

<img align="right" src="./assets/dist/img/touch-icon.png" title="Archetype WordPress Theme" alt="Archetype WordPress Theme" /> A Bootstrap-powered child theme boilerplate for Genesis. You won't want to run this as-is, but it serves as a great starting point when you like these tools. Consider pairing it with my [Bootstrap shortcodes plugin](https://github.com/logoscreative/bs-wp-shortcodes) for use by more savvy clients.

Includes:

1. [Bootstrap 3.3.4](http://getbootstrap.com/)
1. [Font Awesome 4.3.0](http://fortawesome.github.io/Font-Awesome/)

## Constants ##

### ARCHETYPE_ENQUEUE ###

By default, Archetype pulls Bootstrap and Font Awesome files from [Bootstrap CDN](http://www.bootstrapcdn.com/). To use local resources, you'll use [Bower](http://bower.io/). Once it's installed (`npm install -g bower`), run `bower install` in Archetype's root directory to automatically install the dependencies. Then, place `define( 'ARCHETYPE_ENQUEUE', 'bower' );` in your `wp-config.php` file to enqueue those files instead.

When you use the Bower option, [Grunt](http://gruntjs.com/) lints and compiles LESS and JS files on your behalf. Once you've got the [necessary items](http://gruntjs.com/getting-started) installed, you can start by editing `assets/dev/js/main.js` and `assets/dev/less/main.less`, then run `grunt` in the child theme's directory. Run `grunt watch` to automatically run everything when you save one of the watched files.

## Hooks ##

### archetype_shortcut_icon (shortcut icon) ###

(string) Pass the URL of your favicon

### archetype_touch_icon (apple-touch-icon-precomposed) ###

(string) Pass the URL of your 144x144 icon

## Pro Tip ##

You're probably building a WordPress theme and not an application. As such, you probably don't need 100% of what Bootstrap is offering. Cut down on your file sizes by using the `ARCHETYPE_ENQUEUE` functionality and editing the development files to suit your project.

1. In `Gruntfile.js`, under `uglify->build->src`, delete `bower_components/bootstrap/dist/js/bootstrap.js` as the source and invidually add the files in `bower_components/bootstrap/js` that you need.
1. In `main.less`, delete `@import "../../../bower_components/bootstrap/less/bootstrap.less";` and add the files in `bower_components/bootstrap/less` that you need. You can copy the contents of `bower_components/bootstrap/less/bootstrap.less` and add them to the top of your `main.less` file, removing the imported files you no longer need.

## Troubleshooting ##

Please feel free to file an issue here if you find a bug, and I'll do my best to fix it if it betters the theme for everyone. I'll gladly review pull requests for new features, and will consider merging it—again if it betters the theme for everyone.

**For the most part, this will be unsupported.** I'll do what I can, but don't expect much.
