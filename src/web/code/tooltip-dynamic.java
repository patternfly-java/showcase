Tooltip tooltip = tooltip(By.id("tooltip-dynamic-button"), "Copy to clipboard")
        .onHidden((e, t) -> t.text("Copy to clipboard"));
button(copy, "Copy").plain()
        .id("tooltip-dynamic-button")
        .onClick((e, b) -> tooltip.text("Successfully copied to clipboard!"));