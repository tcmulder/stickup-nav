# Stickup Sticky Navigation
_a jQuery plugin_


## Description
Here's a script that adds a sticky nav with a twist:
* The nav disappears as you scroll down.
* As you scroll up, it reappears, no matter how far down you're scrolled.

## Demo
Have a look at the [demo](http://tcmulder.github.io/stickup-nav/demo/index.html) or play around with the code on [codepen](http://codepen.io/tcmulder/pen/blzrc).

## Usage

### 1. Set up your JavaScript
Load jQuery and include Stickup Sticky Navigation plugin files.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="stickup.min.js"></script>
```
### 2. Set up your HTML
Just choose a wrapper element for your navigation and make sure all your links are inside of it.

```html
<nav class="nav">
    <ul>
        <li><a href="javascript(void:0);">Home</a></li>
        <li><a href="javascript(void:0);">About</a></li>
        <li><a href="javascript(void:0);">Store</a></li>
        <li><a href="javascript(void:0);">Contact</a></li>
    </ul>
</nav>
```
### 3. Call the plugin
Now just call the plugin on the selector you created.

```js
jQuery(function($){
    $('.nav').stickup();
});
```
