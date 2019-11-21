enum Color {

    Success("#92D400", "#151515"),
    Information("#73BCF7", "#151515"),
    Warning("#f0AB00", "#151515"),
    Danger("#C9190B", "#eeeeee");

    final String bg;
    final String fg;

    Color(String bg, String fg) {
        this.bg = bg;
        this.fg = fg;
    }
}

Dropdown<Color> dropdown = Dropdown.text("Dropdown")
    .display((html, color) -> html.style("background-color:" + color.bg + ";color:" + color.fg)
            .textContent(color.name()))
    .add(Color.values());