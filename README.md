# @coxdev/cox-quiz

## Installation

```bash
npm i lit @coxdev/cox-quiz
```
## Options
The configuration component can contain the following reactive properties:
- `question` (required): An object or a JSON string
    - `name`: An string, The name for question
    - `answers`: An array of string
- `correctAnswer`: An String

**Example:**
```html
<cox-quiz question='{"name": "How old are you ??", "answers": ["15", "18", "24", "25"]}' correctAnswer="24"></cox-quiz>
```
## Usage

### Vanilla Js
index.html

```html
<body>
  ...
  <!-- If you want to add a quiz. -->
  <cox-quiz question='{"name": "How old are you ??", "answers": ["15", "18", "24", "25"]}' correctAnswer="24"></cox-quiz>
  <script type="module">
    import "@coxdev/cox-quiz";
  </script>
</body>
```
Running
```bash
npm run dev
```

### HTTP Server or Live Server
index.html

```html
<body>
  ...
  <!-- If you want to add a quiz. -->
  <cox-quiz question='{"name": "How old are you ??", "answers": ["15", "18", "24", "25"]}' correctAnswer="24"></cox-quiz>
  <script type="module" src="node_modules/@coxdev/cox-quiz/build/cox-quiz.min.js"></script>
</body>
```
http-server Running
```bash
http-server [path] [options]
```
live-server Running

`Right click to index.html file and choose 'Open with live server'`