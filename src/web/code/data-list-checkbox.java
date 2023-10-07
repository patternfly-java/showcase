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
import static org.elemento.Elements.div;
import static org.elemento.Elements.span;
import static org.patternfly.component.DataList.dataList;
import static org.patternfly.component.DataList.itemCell;
import static org.patternfly.component.DataList.itemContent;
import static org.patternfly.component.DataList.itemRow;
import static org.patternfly.resources.CSS.component;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.action;
import static org.patternfly.resources.Constants.alignRight;
import static org.patternfly.resources.Constants.hidden;

DisplayData[] items = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("Tertiary content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("More content. " + LoremIpsum.paragraph()))
                        .add(itemCell().textContent("More content. " + LoremIpsum.paragraph())))
                .add(itemAction()
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action")))))),
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                .add(itemAction().css(modifier("hidden-on-lg"))
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))
                .add(itemAction().css(modifier(hidden), modifier("visible-on-lg"))
                        .add(Button.button("Primary").primary())
                        .add(Button.button("Secondary").secondary())))),
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemControl().checkbox())
                .add(itemContent()
                        .add(itemCell().add(span().id(item.id()).textContent("Primary Content. " + LoremIpsum.paragraph())))
                        .add(itemCell().textContent("Secondary content. " + LoremIpsum.paragraph())))
                .add(itemAction().css(modifier("hidden-on-xl"))
                        .add(div().css(component(dataList, action))
                                .add(Dropdown.<String> kebab().right()
                                        .add("Action One")
                                        .add("Action Two")
                                        .add("Disabled Action", true)
                                        .addSeparator()
                                        .add("Final Action"))))
                .add(itemAction().css(modifier(hidden), modifier("visible-on-xl"))
                        .add(Button.button("Primary").primary())
                        .add(Button.button("Secondary").secondary())
                        .add(Button.button("Secondary").secondary())
                        .add(Button.button("Secondary").secondary()))))
};

DataProvider<DisplayData> dp = new DataProvider<>(DisplayData::id);
DataList<DisplayData> dl = dataList(dp, (li, provider, item) -> item.display.render(li, provider, item));
dp.addDisplay(dl);
dp.update(items);

// Just a fake item data w/ a display delegate. See demos for a real example
static class DisplayData {

    final DataList.Display<HTMLLIElement, DisplayData> display;

    DisplayData(DataList.Display<HTMLLIElement, DisplayData> display) {
        this.display = display;
    }

    String id() {
        return Elements.uniqueId();
    }
}