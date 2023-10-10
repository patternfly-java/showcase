button("Click to stop loading").primary().inProgress(true)
        .onAction((event, button) -> {
            button.toggleProgress();
            if (button.isInProgress()) {
                button.text("Click to stop loading");
            } else {
                button.text("Click to start loading");
            }
        });

button("Click to stop loading").secondary().inProgress(true)
        .onAction((event, button) -> {
            button.toggleProgress();
            if (button.isInProgress()) {
                button.text("Click to stop loading");
            } else {
                button.text("Click to start loading");
            }
        }));

button(upload).plain()
            .onAction((event, button) -> button.toggleProgress()));

button("Pause loading logs").link().inline().inProgress(true)
                .onAction((event, button) -> {
                    button.toggleProgress();
                    if (button.isInProgress()) {
                        button.text("Pause loading logs");
                    } else {
                        button.text("Resume loading logs");
                    }
                }));