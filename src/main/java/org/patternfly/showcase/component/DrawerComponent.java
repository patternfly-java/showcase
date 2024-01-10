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
package org.patternfly.showcase.component;

import org.patternfly.component.drawer.Drawer;
import org.patternfly.showcase.LoremIpsum;
import org.patternfly.showcase.Snippet;
import org.patternfly.showcase.SnippetPage;

import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.component.drawer.Drawer.drawer;
import static org.patternfly.component.drawer.DrawerCloseButton.drawerCloseButton;
import static org.patternfly.component.drawer.DrawerContent.drawerContent;
import static org.patternfly.component.drawer.DrawerContentBody.drawerContentBody;
import static org.patternfly.component.drawer.DrawerPanel.drawerPanel;
import static org.patternfly.component.drawer.DrawerPanelBody.drawerPanelBody;
import static org.patternfly.component.drawer.DrawerPanelHead.drawerPanelHead;
import static org.patternfly.component.drawer.DrawerPanelWidth.width33;
import static org.patternfly.component.drawer.DrawerSection.drawerSection;
import static org.patternfly.component.drawer.Position.bottom;
import static org.patternfly.component.drawer.Position.end;
import static org.patternfly.component.drawer.Position.start;
import static org.patternfly.component.title.Title.title;
import static org.patternfly.showcase.Code.code;
import static org.patternfly.style.Breakpoint.default_;
import static org.patternfly.style.Breakpoints.breakpoints;
import static org.patternfly.style.Classes.util;
import static org.patternfly.style.Size._2xl;

public class DrawerComponent extends SnippetPage {

    public DrawerComponent() {
        super("Drawer",
                "https://patternfly-java.github.io/patternfly-java/org/patternfly/component/drawer/Drawer.html",
                "https://www.patternfly.org/components/drawer/design-guidelines",
                p().textContent(
                                "A drawer is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.")
                        .element());

        addSnippet(new Snippet("drawer-basic", "Basic",
                code.get("drawer-basic"), () -> {
            // @code-start:drawer-basic
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-basic
        }));

        addSnippet(new Snippet("drawer-end", "Panel at end",
                code.get("drawer-end"), () -> {
            // @code-start:drawer-end
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.position(end)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-end
        }));

        addSnippet(new Snippet("drawer-start", "Panel at start",
                code.get("drawer-start"), () -> {
            // @code-start:drawer-start
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.position(start)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-start
        }));

        addSnippet(new Snippet("drawer-bottom", "Panel on bottom",
                code.get("drawer-bottom"), () -> {
            // @code-start:drawer-bottom
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.style("height", "400px").position(bottom)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-bottom
        }));

        addSnippet(new Snippet("drawer-inline", "Basic inline",
                code.get("drawer-inline"), () -> {
            // @code-start:drawer-inline
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.inline()
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-inline
        }));

        addSnippet(new Snippet("drawer-inline-end", "Inline panel at end",
                code.get("drawer-inline-end"), () -> {
            // @code-start:drawer-inline-end
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.inline().position(end)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-inline-end
        }));

        addSnippet(new Snippet("drawer-inline-start", "Inline panel at start",
                code.get("drawer-inline-start"), () -> {
            // @code-start:drawer-inline-start
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.inline().position(start)
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-inline-start
        }));

        addSnippet(new Snippet("drawer-stacked", "Stacked content body elements",
                code.get("drawer-stacked"), () -> {
            // @code-start:drawer-stacked
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent("content-body"))
                                    .addBody(drawerContentBody().padding()
                                            .textContent("content-body with padding"))
                                    .addBody(drawerContentBody()
                                            .textContent("content-body")))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(title(3, _2xl, "drawer title"))
                                            .addCloseButton(drawerCloseButton())
                                            .add("drawer-panel"))
                                    .addBody(drawerPanelBody().noPadding()
                                            .textContent("drawer-panel with no padding"))
                                    .addBody(drawerPanelBody()
                                            .textContent("drawer-panel"))))
                    .element();
            // @code-end:drawer-stacked
        }));

        addSnippet(new Snippet("drawer-content-padding", "Modified content padding",
                code.get("drawer-content-padding"), () -> {
            // @code-start:drawer-content-padding
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody().padding()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-content-padding
        }));

        addSnippet(new Snippet("drawer-panel-padding", "Modified panel padding",
                code.get("drawer-panel-padding"), () -> {
            // @code-start:drawer-panel-padding
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead().noPadding()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-panel-padding
        }));

        addSnippet(new Snippet("drawer-section", "Additional section above drawer content",
                code.get("drawer-section"), () -> {
            // @code-start:drawer-section
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addSection(drawerSection().textContent("drawer-section above"))
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton())))
                            .addSection(drawerSection().textContent("drawer-section below")))
                    .element();
            // @code-end:drawer-section
        }));

        addSnippet(new Snippet("drawer-static", "Static drawer",
                code.get("drawer-static"), () -> {
            // @code-start:drawer-static
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer.static_()
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-static
        }));

        addSnippet(new Snippet("drawer-breakpoint", "Breakpoint",
                code.get("drawer-breakpoint"), () -> {
            // @code-start:drawer-breakpoint
            Drawer drawer = drawer();
            return div()
                    .add(button("Toggle drawer").css(util("mb-lg"))
                            .primary()
                            .onClick((event, btn) -> drawer.toggle()))
                    .add(drawer
                            .addContent(drawerContent()
                                    .addBody(drawerContentBody()
                                            .textContent(LoremIpsum.paragraphs(20))))
                            .addPanel(drawerPanel()
                                    .widths(breakpoints(default_, width33))
                                    .addHead(drawerPanelHead()
                                            .add(span().textContent("drawer-panel"))
                                            .addCloseButton(drawerCloseButton()))))
                    .element();
            // @code-end:drawer-breakpoint
        }));
    }
}
