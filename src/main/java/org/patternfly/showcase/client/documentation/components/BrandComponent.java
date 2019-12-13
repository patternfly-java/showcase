package org.patternfly.showcase.client.documentation.components;

import org.patternfly.showcase.client.documentation.Code;
import org.patternfly.showcase.client.documentation.Snippet;

import static java.util.Collections.singletonList;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.patternfly.components.Brand.brand;

public class BrandComponent extends BaseComponent {

    public BrandComponent() {
        super("Brand", p().textContent("Brand is used to place a product logotype on a screen.").element(),
                singletonList(new Snippet("Simple brand", Code.get().brand().getText(),
                        () -> div().add(brand("https://www.patternfly.org/assets/images/pf_logo.svg")).element())));
    }
}
