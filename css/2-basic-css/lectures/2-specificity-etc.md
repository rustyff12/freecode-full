### Specificity for ID Selectors

1. What is the specificity value of an ID selector (e.g., `#example`)?

-   `(0, 1, 0, 0)`

2. Which of the following selectors has a lower specificity than an ID selector?

A class selector.

3. Given the following CSS, what will be the color of the text?

```html
<head>
	<style>
		#unique {
			color: purple;
		}
		.highlight {
			color: green;
		}
		p {
			color: blue;
		}
	</style>
</head>
<body>
	<p id="unique" class="highlight">This text</p>
</body>
```

-   `purple`

### important Keyword

1. What does the `!important` keyword do in CSS?

-   It applies a style regardless of other rules' specificity.

2. When should the `!important` keyword be used?

-   To override third-party styles or as a temporary fix.

3. Given the following CSS, what will be the color of the text?

```html
<head>
	<style>
		p {
			color: blue;
		}
		.highlight {
			color: green !important;
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

-   `green`

### Cascade Algorithm

1. What is the first step the Cascade Algorithm takes when determining which styles to apply?

-   It filters the rules by relevance.

2. What will happen if you try to apply a conflicting set of styles to two paragraph rules?

-   The last styles will be applied.

3. Which of the following factors does not influence the Cascade Algorithm's decision on which CSS rule to apply?

-   The `color` property of the CSS rule.

### Inheritance

1. Which of the following CSS properties is typically inherited by default?

-   `color`

2. What keyword can be used to force a child element to inherit a property from its parent?

-   `inherit`

3. Given the following CSS, what will be the color of the `span` text inside the `p`?

```html
<head>
	<style>
		p {
			color: blue;
		}
	</style>
</head>
<body>
	<p>This is a <span>test</span>.</p>
</body>
```

-   `blue`
