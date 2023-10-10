codeEditor()
        .readonly()
        .addHeader(codeEditorHeader()
                .addActions(codeEditorActions()
                        .addAction(codeEditorCopyToClipboardAction())
                        .addAction(codeEditorAction(download))
                        .addAction(codeEditorAction(button(upload).control().disabled())))
                .addTab(codeEditorTab(PredefinedIcon.code, "Java")))
        .code(CODE);