button("Click to stop loading").primary().progress(true)
        .onAction((event, button) -> {
            button.toggleProgress();
            if (button.inProgress()) {
                button.text("Click to stop loading");
            } else {
                button.text("Click to start loading");
            }
        });

button("Click to stop loading").secondary().progress(true)
        .onAction((event, button) -> {
            button.toggleProgress();
            if (button.inProgress()) {
                button.text("Click to stop loading");
            } else {
                button.text("Click to start loading");
            }
        }));

button(upload).plain()
            .onAction((event, button) -> button.toggleProgress()));

button("Pause loading logs").link().inline().progress(true)
                .onAction((event, button) -> {
                    button.toggleProgress();
                    if (button.inProgress()) {
                        button.text("Pause loading logs");
                    } else {
                        button.text("Resume loading logs");
                    }
                }));