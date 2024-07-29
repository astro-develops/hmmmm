require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@latest/min/vs' } });
require(['vs/editor/editor.main'], function () {
    var editor = monaco.editor.create(document.getElementById('container'), {
        value: [
            'const greeting = "Hello, world!";',
            'console.log(greeting);'
        ].join('\n'),
        language: 'javascript',
        theme: 'vs-dark'
    });
});