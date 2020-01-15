package org.patternfly.showcase.client.components;

import org.patternfly.showcase.client.Resources;
import org.patternfly.showcase.client.Snippet;

import static java.util.Collections.singletonList;
import static org.elemento.Elements.div;
import static org.elemento.Elements.p;
import static org.patternfly.components.Brand.brand;

public class BrandComponent extends BaseComponent {

    public BrandComponent() {
        super("Brand", p().textContent("Brand is used to place a product logotype on a screen.").element(),
                singletonList(new Snippet("Simple brand", Resources.get().brand().getText(),
                        () -> div().add(brand("https://www.patternfly.org/assets/images/pf_logo.svg")).element())));
    }
}
