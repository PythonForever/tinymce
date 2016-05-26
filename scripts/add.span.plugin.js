tinymce.PluginManager.add('figure', function (editor, url) {
    // Add a button that opens a window

    editor.addButton('figure', {
        text: 'Add Markup to Code Section',
        icon: false,
        onclick: function () {
            $txt = tinyMCE.activeEditor.getContent({format : 'raw'});
            $txt = add_spans_to_sections($txt);
            editor.setContent($txt);

        }
    });




});



function add_spans_to_sections(html_output) {
    var replacement_pre = '<span class="r_entity r_codesection" typeof="tae:CodeSection"><span class="r_prop r_name" property="schema:name">';
    var replacement_post = '</span></span>';
    txt = html_output.replace(/\d+\S*(\([\w\(\)]+\))/mg,replacement_pre+"\$&"+replacement_post); // $& means the whole matched string
    return txt;
}



