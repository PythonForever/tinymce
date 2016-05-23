tinymce.PluginManager.add('example2', function (editor, url) {
    // Add a button that opens a window
    editor.addButton('example2', {
        text: 'Kevin button!!!',
        icon: false,
        onclick: function () {
            // Open window
            editor.windowManager.open({
                title: 'Example plugin?',
                body: [
                    {type: 'textbox', name: 'title', label: 'Title'}
                ],
                onsubmit: function (e) {
                    // Insert content when the window form is submitted
                    //editor.insertContent('Title: ' + e.data.title);
                    editor.setContent('<html><body><h1>hey!!!</h1></body></html>');
                }
            });
        }
    });

    // Adds a menu item to the tools menu
    editor.addMenuItem('example2', {
        text: 'Example plugin',
        context: 'tools',
        onclick: function () {
            // Open window with a specific url
            editor.windowManager.open({
                title: 'TinyMCE site',
                url: 'http://www.tinymce.com',
                width: 800,
                height: 600,
                buttons: [{
                    text: 'Close',
                    onclick: 'close'
                }]
            });
        }
    });
});