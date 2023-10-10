/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.patternfly.showcase.client.component;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.patternfly.component.brand.Brand.brand;
import static org.patternfly.showcase.client.Code.code;

public class BrandComponent extends ComponentPage {

    public BrandComponent() {
        super("Brand",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/brand/Brand.html",
                "https://www.patternfly.org/components/brand/design-guidelines",
                p().textContent("A brand is used to place a product logotype on a screen.").element());

        addSnippet(new Snippet("brand-simple", "Simple brand",
                code.get("brand-simple"),
                () -> div()
                        .add(brand("https://www.patternfly.org/assets/images/pf_logo.svg"))
                        .element()));
    }
}
