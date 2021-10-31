const htmlTemplate = ({title, body, scriptTags, preloadedState}) => `<!doctype html>
<html>
<head>
    <meta charset="utf8"></meta>
    <title>${title}</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id="appwrapper">${body}</div>
    <script>${preloadedState}</script>
    ${scriptTags}
</body>
</html>
`;

export default htmlTemplate;
