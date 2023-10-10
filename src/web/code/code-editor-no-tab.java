codeEditor()
        .addHeader(codeEditorHeader()
                .addActions(codeEditorActions()
                        .addAction(codeEditorCopyToClipboardAction())
                        .addAction(codeEditorAction(download))
                        .addAction(codeEditorAction(upload)))
        .code(CODE);