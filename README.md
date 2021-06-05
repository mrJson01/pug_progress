# Pug Docs

## Attributes

Tag attributes look similar to HTML (with optional commas), but their values are just regular JavaScript. 

```pug

- var autheticated = true
body(class=autheticated ? 'auth' 'anon')

```

## Multiline Attributes

If you have many attributes, you can also spread them across many lines: 

```pug

input(
    type="checkbox"
    name="checks"
    data-json=`{
        "very-long":"piece of data"
    }`
)

```

## Quoted Attributes

If your attribute name contains odd characters that might interfere with JavaScript syntax, <br/>
either quote it using "" or '', or use commas to separate different attributes. Examples of such <br/>
characters include [] and () (frequently used in Angular 2).

```pug

div(class='div-class', (click)='play()')
div(class='div-class' '(click)'='play()')

```

## Attribute Interpolation

Ways to include variables in attributes

* Write the atribute in JavaScript :

```pug

- var url ='index.html';
a(href="/"+url) Link

```

* If your JavaScript runtime supports ES2015 template strings  you can also use its syntax to simplify your attributes:

```pug

- var url = 'index.html';
a(href=`/root/${url}`) Link
```

## Unescaped Attributes

By default, all attributes are escaped—that is,special characters are replaced with escape sequences—to prevent attacks. 

```pug

div(escpaed="<code>")
div(unescpaed!="<code>")

```


## Boolean Attributes

Boolean attributes are mirrored by Pug. Boolean values (true and false) are accepted. <br/>
When no value is specified true is assumed.


## Style Attributes

The **style** attribute can be a string, like any normal attribute; but it can also be an object, <br/>
which is handy when styles are generated by JavaScript.

```pug

div(style={color:'red',background:'green'})

```

## Class Attributes

The **class** attribute can be a string, like any normal attribute; but it can also be <br/>
an array of class names, which is handy when generated from JavaScript.


```pug

- var classes = ['foo','btn','btn-log']
button(class=classes class=['bingo']) Bingo
        
```
It can also be an object which maps class names to **true** or **false** values. <br/>
This is useful for applying conditional classes

```pug
- var currentUrl = '/about'
a(class={active:currentUrl ==='/'} href="/") Home
a(class={active:currentUrl ==='/about'} href="/about") About

```

## Class Literal

Classes may be defined using a **.classname** syntax. Since div's are such a common choice of tag, <br/>
it is the default if you omit the tag name:

```pug
a.button
.content

```

## ID Literal

ID's may be defined by using a **#idname** syntax:

```pug

a#main-ling
#content
```

## &attributes

the **&attributes** syntax can be used to explode an object into attributes of an element.

```pug

- var attributes = {};
- attributes.class = 'baz';
div#foo(data-bar="foo")&attributes(attributes)

```


