TextInputGroup textInputGroup = textInputGroup();
textInputGroup
        .addMain(textInputGroupMain("tig-utilities-and-icon-0")
                .addIcon(search)
                .placeholder("Placeholder")
                .withInputElement(inputElement -> inputElement.on(keyup, e -> {
                    String value = ((HTMLInputElement) e.target).value;
                    textInputGroup.showUtilities(!value.isEmpty());
                })))
        .addUtilities(textInputGroupUtilities()
                .apply(e -> setVisible(e, false))
                .add(button(times).plain()
                        .on(click, e -> {
                            textInputGroup.clear();
                            textInputGroup.showUtilities(false);
                        })));