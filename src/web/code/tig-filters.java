TextInputGroup textInputGroup = textInputGroup();
ChipGroup chipGroup = chipGroup();
CloseHandler<Chip> closeHandler = (event, chip) -> {
    if (chip.mainComponent().values().isEmpty()) {
        failSafeRemoveFromParent(chipGroup);
        textInputGroup.showUtilities(!textInputGroup.inputElement().element().value.isEmpty());
    }
};
chipGroup.addChips(asList("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve"), text -> chip(text).onClose(closeHandler));

textInputGroup
        .addMain(textInputGroupMain("tig-filters-0")
                .addChipGroup(chipGroup)
                .placeholder("Placeholder")
                .withInputElement(inputElement -> inputElement.on(keyup, e -> {
                    String value = ((HTMLInputElement) e.target).value;
                    textInputGroup.showUtilities(!value.isEmpty() || !chipGroup.values().isEmpty());
                    if (Key.Enter.match(e) && !value.isEmpty()) {
                        if (!chipGroup.element().isConnected) {
                            textInputGroup.main().addChipGroup(chipGroup);
                        }
                        chipGroup.addChip(chip(value).onClose(closeHandler));
                        inputElement.value("");
                    }
                })))
        .addUtilities(textInputGroupUtilities()
                .add(button(times).plain()
                        .on(click, e -> {
                            chipGroup.clear();
                            failSafeRemoveFromParent(chipGroup);
                            textInputGroup.clear();
                            textInputGroup.showUtilities(false);
                        })));