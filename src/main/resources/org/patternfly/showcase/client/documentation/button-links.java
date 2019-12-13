import static org.patternfly.components.Icon.icon;
import static org.patternfly.resources.CSS.fas;

Button b1 = Button.link("Primary link to W3.org", "https://www.w3.org/").primary();
Button b2 = Button.link("Secondary link to W3.org", "https://www.w3.org/").secondary();
Button b3 = Button.link(icon(fas("external-link-alt")), "Tertiary link to W3.org", "https://www.w3.org/", "_blank")
        .tertiary();