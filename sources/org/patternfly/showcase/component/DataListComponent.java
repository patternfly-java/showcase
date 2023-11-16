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

import org.jboss.elemento.Id;
import org.patternfly.component.DataList;
import org.patternfly.component.Dropdown;
import org.patternfly.dataprovider.DataProvider;
import org.patternfly.showcase.LoremIpsum;

import static org.jboss.elemento.Elements.b;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.i;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.span;
import static org.patternfly.component.DataList.Display;
import static org.patternfly.component.DataList.dataList;
import static org.patternfly.component.DataList.expandableBody;
import static org.patternfly.component.DataList.expandableContent;
import static org.patternfly.component.DataList.itemAction;
import static org.patternfly.component.DataList.itemCell;
import static org.patternfly.component.DataList.itemContent;
import static org.patternfly.component.DataList.itemControl;
import static org.patternfly.component.DataList.itemRow;
import static org.patternfly.component.button.Button.button;
import static org.patternfly.layout.Classes.action;
import static org.patternfly.layout.Classes.alignRight;
import static org.patternfly.layout.Classes.component;
import static org.patternfly.layout.Classes.dataList;
import static org.patternfly.layout.Classes.icon;
import static org.patternfly.layout.Classes.modifier;
import static org.patternfly.layout.Classes.noFill;
import static org.patternfly.layout.Classes.noPadding;
import static org.patternfly.layout.PredefinedIcon.fas;

@Deprecated
public class DataListComponent extends ComponentPage {

    // Pull display data items to top-level to have less code indent
    private static final DisplayData[] SIMPLE = { new DisplayData((li, provider,
            item) -> li.add(
                    itemRow().add(itemContent().add(itemCell().add(span().id(item.id()).textContent("Primary Content")))
                            .add(itemCell().textContent("Secondary Content"))))),

            new DisplayData((li, provider,
                    item) -> li.add(itemRow().add(itemContent()
                            .add(itemCell().css(modifier(noFill))
                                    .add(span().id(item.id()).textContent("Primary content (pf-m-no-fill)")))
                            .add(itemCell().css(modifier(noFill), modifier(alignRight))
                                    .textContent("Secondary content (pf-m-align-right pf-m-no-fill)"))))) };

    private static final DisplayData[] CHECKBOXES = {
            new DisplayData((li, provider,
                    item) -> li.add(itemRow().add(itemControl().checkbox()).add(itemContent()
                            .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                            .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph()))
                            .add(itemCell().textContent("Tertiary content. " + LoremIpsum.paragraph()))
                            .add(itemCell().textContent("More content. " + LoremIpsum.paragraph()))
                            .add(itemCell().textContent("More content. " + LoremIpsum.paragraph())))
                            .add(itemAction().add(div().css(component(dataList, action))
                                    .add(Dropdown.<String> kebab().right().add("Action One").add("Action Two").addSeparator()
                                            .add("Final Action")))))),
            new DisplayData((li, provider,
                    item) -> li.add(itemRow().add(itemControl().checkbox()).add(itemContent()
                            .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                            .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                            .add(itemAction().css(modifier("hidden-on-lg"))
                                    .add(div().css(component(dataList, action))
                                            .add(Dropdown.<String> kebab().right().add("Action One").add("Action Two")
                                                    .addSeparator().add("Final Action"))))
                            .add(itemAction()
                                    .css(modifier("hidden"), modifier("visible-on-lg")).add(button("Primary").primary())
                                    .add(button("Secondary").secondary())))),
            new DisplayData((li, provider,
                    item) -> li.add(itemRow().add(itemControl().checkbox()).add(itemContent()
                            .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                            .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                            .add(itemAction().css(modifier("hidden-on-xl"))
                                    .add(div().css(component(dataList, action))
                                            .add(Dropdown.<String> kebab().right().add("Action One").add("Action Two")
                                                    .addSeparator().add("Final Action"))))
                            .add(itemAction().css(modifier("hidden"), modifier("visible-on-xl"))
                                    .add(button("Primary").primary()).add(button("Secondary").secondary())
                                    .add(button("Secondary").secondary())
                                    .add(button("Secondary").secondary())))) };

    private static final DisplayData[] EXPANDABLE = {
            new DisplayData(
                    (li, provider, item) -> li
                            .add(itemRow().add(itemControl().expandable())
                                    .add(itemContent()
                                            .add(itemCell().css(modifier(icon))
                                                    .add(i().css(component(dataList, icon), fas("code-branch"))))
                                            .add(itemCell().add(div().id(item.id()).textContent("Primary Content"))
                                                    .add(span().textContent(LoremIpsum.paragraph())))
                                            .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                            .add(itemCell().textContent(
                                                    LoremIpsum.paragraphs(2))))
                                    .add(itemAction().add(div().css(component(dataList, action))
                                            .add(Dropdown.<String> kebab().right().add("Action One").add("Action Two")
                                                    .addSeparator().add("Final Action")))))
                            .add(expandableContent().add(expandableBody().textContent(LoremIpsum.paragraphs(5))))),
            new DisplayData(
                    (li, provider,
                            item) -> li
                                    .add(itemRow()
                                            .add(itemControl()
                                                    .expandable())
                                            .add(itemContent()
                                                    .add(itemCell().css(modifier(icon))
                                                            .add(i().css(component(dataList, icon), fas("code-branch"))))
                                                    .add(itemCell().add(div().id(item.id()).textContent("Secondary Content"))
                                                            .add(span().textContent(LoremIpsum.paragraph())))
                                                    .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                                    .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                                            .add(itemAction().add(div().css(component(dataList, action))
                                                    .add(Dropdown.<String> kebab().right().add("Action One").add("Action Two")
                                                            .addSeparator().add("Final Action")))))
                                    .add(expandableContent().add(expandableBody().textContent(LoremIpsum.paragraphs(5))))),
            new DisplayData(
                    (li, provider,
                            item) -> li
                                    .add(itemRow()
                                            .add(itemControl()
                                                    .expandable())
                                            .add(itemContent()
                                                    .add(itemCell().css(modifier(icon))
                                                            .add(i().css(component(dataList, icon), fas("code-branch"))))
                                                    .add(itemCell().add(div().id(item.id()).textContent("Tertiary Content"))
                                                            .add(span().textContent(LoremIpsum.paragraph())))
                                                    .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                                    .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                                            .add(itemAction().add(div().css(component(dataList, action))
                                                    .add(Dropdown.<String> kebab().right().add("Action One").add("Action Two")
                                                            .addSeparator().add("Final Action")))))
                                    .add(expandableContent().add(
                                            expandableBody().css(modifier(noPadding)).textContent(LoremIpsum.paragraph())))) };

    private static final DisplayData[] MODIFIERS_1 = { new DisplayData((li, provider,
            item) -> li.add(itemRow().add(itemControl().checkbox()).add(itemContent()
                    .add(itemCell().add(div().css("sc-data-list__blue-box").add(b().id(item.id()).textContent("default"))
                            .add(p().textContent(LoremIpsum.paragraph()))))
                    .add(itemCell().add(div().css("sc-data-list__blue-box").add(b().textContent("default"))
                            .add(p().textContent(LoremIpsum.paragraphs(2)))))))) };

    private static final DisplayData[] MODIFIERS_2 = {
            new DisplayData((li, provider,
                    item) -> li.add(itemRow().add(itemControl().checkbox()).add(itemContent()
                            .add(itemCell().css(modifier("flex-2"))
                                    .add(div().css("sc-data-list__blue-box").add(b().id(item.id()).textContent("width 2"))
                                            .add(p().textContent(LoremIpsum.paragraph()))))
                            .add(itemCell().css(modifier("flex-4"))
                                    .add(div().css("sc-data-list__blue-box").add(b().textContent("width 4"))
                                            .add(p().textContent(LoremIpsum.paragraphs(2))))))
                            .add(itemAction().add(div().css(component(dataList, action)).add(Dropdown.<String> kebab().right()
                                    .add("Action One").add("Action Two").addSeparator().add("Final Action")))))) };

    private static final DisplayData[] MODIFIERS_3 = { new DisplayData((li, provider, item) -> li
            .add(itemRow().add(itemControl().expandable().checkbox())
                    .add(itemContent()
                            .add(itemCell().css(modifier("flex-5"))
                                    .add(div().css("sc-data-list__blue-box")
                                            .add(b().id(item.id()).textContent("width 5"))
                                            .add(p().textContent(LoremIpsum.paragraphs(2)))))
                            .add(itemCell().css(modifier("flex-2"))
                                    .add(div().css("sc-data-list__blue-box").add(b().textContent("width 2"))
                                            .add(p().textContent(LoremIpsum.paragraph()))))
                            .add(itemCell().add(div().css("sc-data-list__blue-box").add(b().textContent("default"))
                                    .add(p().textContent(LoremIpsum.words(2))))))
                    .add(itemAction().add(div().css(component(dataList, action))
                            .add(Dropdown.<String> kebab().right().add("Action One").add("Action Two").addSeparator()
                                    .add("Final Action")))))
            .add(expandableContent().add(expandableBody().textContent(LoremIpsum.paragraph())))) };

    private static DataList<DisplayData> dl(DisplayData[] items) {
        DataProvider<DisplayData> dataProvider = new DataProvider<>(DisplayData::id);
        DataList<DisplayData> dl = dataList(dataProvider,
                (html, dataList, data) -> data.display.render(html, dataList, data));
        dataProvider.bindDisplay(dl);
        dataProvider.update(items);
        return dl;
    }

    // Just a fake item data w/ a display delegate. See demos for a real example.
    static class DisplayData {

        final Display<DisplayData> display;

        DisplayData(Display<DisplayData> display) {
            this.display = display;
        }

        String id() {
            return Id.unique();
        }
    }

    public DataListComponent() {
        super("Data list",
                "https://patternfly-java.github.io/patternfly-java/",
                "https://www.patternfly.org/components/data-list/design-guidelines",
                p().textContent("A data list is used to display large data sets when you need a flexible layout or "
                        + "need to include interactive content like charts.").element());

        addSnippet(new Snippet("simple", "Simple data list", "Resources.get().dataListSimple().getText()",
                () -> div().add(dl(SIMPLE)).element()));

        addSnippet(new Snippet("check", "Data list checkboxes, actions and additional cells",
                "Resources.get().dataListCheckbox().getText()", () -> div().add(dl(CHECKBOXES)).element()));

        addSnippet(new Snippet("expandable", "Data list expandable", "Resources.get().dataListExpandable().getText()",
                () -> div().add(dl(EXPANDABLE)).element()));

        addSnippet(new Snippet("width-modifiers", "Data list width modifiers",
                "Resources.get().dataListModifiers().getText()",
                () -> div().add(h(2, "Default fitting - example 1")).add(dl(MODIFIERS_1))
                        .add(h(2, "Flex modifiers - example 2").css("pf-u-mt-lg")).add(dl(MODIFIERS_2))
                        .add(h(2, "Flex modifiers - example 3").css("pf-u-mt-lg")).add(dl(MODIFIERS_3))
                        .element()));
    }
}
