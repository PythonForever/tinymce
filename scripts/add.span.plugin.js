tinymce.PluginManager.add('example2', function (editor, url) {
    // Add a button that opens a window

    editor.addButton('example2', {
        text: 'Add span',
        icon: false,
        onclick: function () {
            $txt = tinyMCE.activeEditor.getContent({format : 'raw'});
            $txt = add_spans_to_sections($txt);
            editor.setContent($txt);

        }
    });




});




function add_spans_to_sections($txt){
    return $txt;
}



function highlight_tags() {
    var html_output = tinyMCE.activeEditor.getContent();
    html_output = highlight_remove(html_output);
    var regex = new RegExp(/\[start\](((?!\[(?:end|start)\]).)+)\[end\]/ig);

    html_output = html_output.replace(regex,'<span style="background-color:> yellow;">[start]$1[end]</span>');
    tinyMCE.activeEditor.setContent(html_output);
}

function highlight_remove(html_output) {
    var regex_fix = new RegExp(/<span\sstyle="background-color:\syellow;">(.+?)<\/span>/ig);
    return html_output.replace(regex_fix,'$1');
}



