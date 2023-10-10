TextInput readOnlyTextInput = textInput("readonly-text-input-0")
        .value("read only text input example")
        .readonly();
checkbox("plain-toggle", "Plain read only variant")
        .onChange((component, value) -> readOnlyTextInput.plain(value));