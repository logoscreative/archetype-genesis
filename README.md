# Archetype for Genesis #

<img align="right" src="./assets/dist/img/touch-icon.png" title="Archetype WordPress Theme" alt="Archetype WordPress Theme" /> A Bootstrap-powered child theme for Genesis.

Includes:

1. [Bootstrap 3.0.3](http://getbootstrap.com/)
1. [Font Awesome 4.0.3](http://fortawesome.github.io/Font-Awesome/)

[Grunt](http://gruntjs.com/) lints and compiles LESS and JS files on your behalf. Once you've got the [necessary items](http://gruntjs.com/getting-started) installed, you can start by editing `assets/dev/js/main.js` and `assets/dev/less/main.less`, then run `grunt` in the child theme's directory. Run `grunt watch` to automatically run everything when you save one of the watched files.

## Constants ##

### ARCHETYPE_ENQUEUE ###

By default, Archetype pulls Bootstrap and Font Awesome files from [Bootstrap CDN](http://www.bootstrapcdn.com/). To use local resources, you'll use [Bower](http://bower.io/). Once it's installed (`npm install -g bower`), run `bower install` in Archetype's root directory to automatically install the dependencies. Then, place `define( 'ARCHETYPE_ENQUEUE', 'bower' );` in your `wp-config.php` file to enqueue those files instead.

## Why? ##

I've been using Standard Theme as a base for a while now. Knowing that there won't be any updates, I forked it into what I wanted it to be: a bare-bones starting point for Bootstrap projects. Yes, there are other options out there, but they tend to come with too many "enhancements" for my taste. After using this theme successfully on several projects, I decided to release it.

I usually pair it with a litany of other plugins to add functionality as needed. One thing I love using with more savvy clients are these [Bootstrap shortcodes](https://github.com/logoscreative/bs-wp-shortcodes), which I've put into a plugin that I'm releasing now as well.

I see Archetype helping folks in one or both of two ways: being a base for your child theme, or being a fork-able repo for your theme. **While this isn't a difficult theme to implement, it is certainly not plug-and-play.**

## Hooks ##

### archetype_shortcut_icon (shortcut icon) ###

(string) Pass the URL of your favicon

### archetype_touch_icon (apple-touch-icon-precomposed) ###

(string) Pass the URL of your 144x144 icon

## Troubleshooting ##

Please feel free to file an issue here if you find a bug, and I'll do my best to fix it if it betters the theme for everyone. I'll gladly review pull requests for new features, and will consider merging it—again if it betters the theme for everyone.

**For the most part, this will be unsupported.** I'll do what I can, but don't expect much.