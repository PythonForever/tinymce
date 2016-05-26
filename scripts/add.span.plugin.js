tinymce.PluginManager.add('markupcode', function (editor, url) {


	// config this button to show under "Edit" menu
	editor.addMenuItem('markupcode', {
		icon: 'image',
		text: 'Insert markupcode',
		onclick: function () {
            var $txt = tinyMCE.activeEditor.getContent({format : 'raw'});
            $txt = add_spans_to_sections($txt);
            editor.setContent($txt);

        },
		context: 'edit',
		prependToContext: true
	});


});



function add_spans_to_sections(html_output) {
    var replacement_pre = '<span class="r_entity r_codesection" typeof="tae:CodeSection"><span class="r_prop r_name" property="schema:name">';
    var replacement_post = '</span></span>';
    var txt = html_output.replace(/\d+\S*(\([\w\(\)]+\))/mg,replacement_pre+"\$&"+replacement_post); // $& means the whole matched string
    return txt;
}



