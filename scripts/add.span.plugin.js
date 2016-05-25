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


function add_spans_to_sections(html_output) {
    var replacement_pre = '<span class="r_entity r_codesection" typeof="tae:CodeSection"><span class="r_prop r_name" property="schema:name">';
    var replacement_post = '</span></span>';
    var regex ='/(\d+\S*)(\([\w\(\)]+\))';

    //var regex_fix = new RegExp(/\d+\S*(\([\w\(\)]+\)));
   txt = html_output.replace(/\d+\S*(\([\w\(\)]+\))/mg,replacement_pre+"\$&"+replacement_post); // $& means the whole matched string

    //txt = html_output.replace(regex_fix,replacement_pre+'$1'+replacement_post);

    return txt;
}



