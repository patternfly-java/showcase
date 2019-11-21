import static org.patternfly.client.resources.CSS.fas;

Button b1 = Button.link("Primary link to W3.org", "https://www.w3.org/").primary();
Button b2 = Button.link("Secondary link to W3.org", "https://www.w3.org/").secondary();
Button b3 = Button.link("Tertiary link to W3.org", "https://www.w3.org/", "_blank")
        .withIcon(fas("external-link-alt"))
        .tertiary();