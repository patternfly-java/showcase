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
package org.patternfly.showcase.layout;

import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.ul;
import static org.patternfly.core.Tuple.tuple;
import static org.patternfly.layout.gallery.Gallery.gallery;
import static org.patternfly.layout.gallery.GalleryItem.galleryItem;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Breakpoint._2xl;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoint.lg;
import static org.patternfly.style.Breakpoint.md;
import static org.patternfly.style.Breakpoint.xl;

public class GalleryLayout extends SnippetPage {

    public GalleryLayout() {
        super("Gallery",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/layout/gallery/Gallery.html",
                "https://www.patternfly.org/layouts/gallery/design-guidelines",
                p().textContent(
                        "The gallery layout is used to arrange content in a responsive grid. Content will wrap responsively to create uniform rows and columns.")
                        .element());

        addSnippet(new Snippet("gallery-basic", "Basic",
                code.get("gallery-basic"), () ->
                // @code-start:gallery-basic
                div().css("ws-core-l-gallery")
                        .add(gallery()
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item")))
                        .element()
        // @code-end:gallery-basic
        ));

        addSnippet(new Snippet("gallery-gutter", "With gutters",
                code.get("gallery-gutter"), () ->
                // @code-start:gallery-gutter
                div().css("ws-core-l-gallery")
                        .add(gallery().gutter()
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item")))
                        .element()
        // @code-end:gallery-gutter
        ));

        addSnippet(new Snippet("gallery-min-width", "Adjusting min widths",
                code.get("gallery-min-width"), () ->
                // @code-start:gallery-min-width
                div().css("ws-core-l-gallery")
                        .add(gallery().gutter()
                                .minWidths(tuple(md, "100px"),
                                        tuple(lg, "150px"),
                                        tuple(xl, "200px"),
                                        tuple(_2xl, "300px"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item")))
                        .element()
        // @code-end:gallery-min-width
        ));

        addSnippet(new Snippet("gallery-max-width", "Adjusting max widths",
                code.get("gallery-max-width"), () ->
                // @code-start:gallery-max-width
                div().css("ws-core-l-gallery")
                        .add(gallery().gutter()
                                .minWidths(tuple(md, "280px"),
                                        tuple(lg, "320px"),
                                        tuple(_2xl, "400px"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item")))
                        .element()
        // @code-end:gallery-max-width
        ));

        addSnippet(new Snippet("gallery-min-max-width", "Adjusting min and max widths",
                code.get("gallery-min-max-width"), () ->
                // @code-start:gallery-min-max-width
                div().css("ws-core-l-gallery")
                        .add(gallery().gutter()
                                .minWidths(tuple(default_, "100%"),
                                        tuple(md, "100px"),
                                        tuple(xl, "300px"))
                                .maxWidths(tuple(md, "200px"),
                                        tuple(xl, "1fr"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item"))
                                .addItem(galleryItem().textContent("Gallery item")))
                        .element()
        // @code-end:gallery-min-max-width
        ));

        addSnippet(new Snippet("gallery-alternative-components", "Alternative components",
                code.get("gallery-alternative-components"), () ->
                // @code-start:gallery-alternative-components
                div()
                        .add(gallery(ul())
                                .addItem(galleryItem(li()).textContent("Gallery item"))
                                .addItem(galleryItem(li()).textContent("Gallery item"))
                                .addItem(galleryItem(li()).textContent("Gallery item"))
                                .addItem(galleryItem(li()).textContent("Gallery item"))
                                .addItem(galleryItem(li()).textContent("Gallery item")))
                        .element()
        // @code-end:gallery-alternative-components
        ));
    }
}
