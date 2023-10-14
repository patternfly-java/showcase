Icon icon = icon(checkCircle);
checkbox("in-progress-custom-cb", "Toggle in progress state")
        .onChange((checkBox, value) -> icon.progress(value,
                spinner -> spinner.diameter("2em")));