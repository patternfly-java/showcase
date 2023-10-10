codeEditor()
        .addHeader(codeEditorHeader()
                .addActions(codeEditorActions()
                        .addAction(codeEditorCopyToClipboardAction())
                        .addAction(codeEditorAction(download))
                        .addAction(codeEditorAction(upload)))
                .addTab(codeEditorTab(PredefinedIcon.code, "Java")))
        .code(CODE);