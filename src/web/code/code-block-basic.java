codeBlock()
        .addAction(codeBlockCopyToClipboardAction())
        .addAction(codeBlockAction(play)
                .ariaLabel("Play")
                .onAction((action, codeBlock) -> console.log("Play not yet implemented")))
        .code(CODE);