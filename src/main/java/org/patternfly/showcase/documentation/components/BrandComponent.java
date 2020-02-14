package org.patternfly.showcase.documentation.components;

import org.patternfly.showcase.Resources;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.components.Brand.brand;

public class BrandComponent extends BaseComponent {

    public BrandComponent() {
        super("Brand", p().textContent("Brand is used to place a product logotype on a screen.").element(),
                singletonList(new Snippet("Simple brand", Resources.get().brand().getText(),
                        () -> div().add(brand("https://www.patternfly.org/assets/images/pf_logo.svg")).element())));
    }
}
