Icon icon = icon(checkCircle);
checkbox("in-progress-cb", "Toggle in progress state")
        .onChange((checkBox, value) -> icon.inProgress(value));