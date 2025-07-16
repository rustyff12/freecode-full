### CSS Specificity,

1. Which CSS specificity is higher?

-   An inline style.

2. In the hierarchy of CSS specificity, which has the lowest priority?

-   Universal selectors.

3. What color will the text be in the following example?

```html
<head>
	<style>
		p {
			color: red;
		}
	</style>
</head>
<body>
	<p style="color: blue;">This text</p>
</body>
```

-   `blue`

### Universal Selector, and What Is Its Specificity

1. What is the specificity value of the universal selector (`*`)?

-   `(0, 0, 0, 0)`

2. What is a common use case for the universal selector?

-   To reset or normalize styles across all elements.

3. Given the following CSS, what will be the color of the text?

```html
<head>
	<style>
		* {
			color: blue;
		}
		p {
			color: red;
		}
		.highlight {
			color: green;
		}
		#unique {
			color: purple;
		}
	</style>
</head>
<body>
	<p id="unique" class="highlight">This text</p>
</body>
```

-   `purple`

### Specificity for Type Selectors

1. What is the specificity value of a type selector (e.g., `div`)?

`(0, 0, 0, 1)`

2. Which of the following has a lower specificity than a type selector?

-   A Universal selector.

3. Given the following CSS, what will be the color of the text?

```html
<head>
	<style>
		* {
			color: blue;
		}
		p {
			color: red;
		}
	</style>
</head>
<body>
	<p>This text</p>
</body>
```

-   `red`

### Specificity for Class Selectors

1. What is the specificity value of a class selector (e.g., `.example`)?

-   `(0, 0, 1, 0)`

2. Which of the following selectors has a higher specificity than a class selector?

-   An ID selector.

3. Given the following CSS, what will be the color of the text?

```html
<head>
	<style>
		.highlight {
			color: green;
		}
		p {
			color: blue;
		}
		p.highlight {
			color: red;
		}
	</style>
</head>
<body>
	<p class="highlight">This text</p>
</body>
```

-   `red`
