import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.span;
import static org.patternfly.client.components.Components.dataList;
import static org.patternfly.client.components.DataList.itemCell;
import static org.patternfly.client.components.DataList.itemContent;
import static org.patternfly.client.components.DataList.itemRow;
import static org.patternfly.client.resources.CSS.component;
import static org.patternfly.client.resources.CSS.modifier;
import static org.patternfly.client.resources.Constants.action;
import static org.patternfly.client.resources.Constants.alignRight;
import static org.patternfly.client.resources.Constants.hidden;
import static org.patternfly.client.resources.Constants.noPadding;

DisplayData[] items = {
        new DisplayData((html, provider, item) -> html
                .add(itemRow()
                        .add(itemControl().expandable())
                        .add(itemContent()
                                .add(itemCell().css(modifier(icon))
                                        .add(i().css(component(dataList, icon), fas("code-branch"))))
                                .add(itemCell()
                                        .add(div().id(item.id()).textContent("Primary Content"))
                                        .add(span().textContent(LoremIpsum.paragraph())))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().textContent(LoremIpsum.paragraphs(5))))),
        new DisplayData((html, provider, item) -> html
                .add(itemRow()
                        .add(itemControl().expandable())
                        .add(itemContent()
                                .add(itemCell().css(modifier(icon))
                                        .add(i().css(component(dataList, icon), fas("code-branch"))))
                                .add(itemCell()
                                        .add(div().id(item.id()).textContent("Secondary Content"))
                                        .add(span().textContent(LoremIpsum.paragraph())))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().textContent(LoremIpsum.paragraphs(5))))),
        new DisplayData((html, provider, item) -> html
                .add(itemRow()
                        .add(itemControl().expandable())
                        .add(itemContent()
                                .add(itemCell().css(modifier(icon))
                                        .add(i().css(component(dataList, icon), fas("code-branch"))))
                                .add(itemCell()
                                        .add(div().id(item.id()).textContent("Tertiary Content"))
                                        .add(span().textContent(LoremIpsum.paragraph())))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2)))
                                .add(itemCell().textContent(LoremIpsum.paragraphs(2))))
                        .add(itemAction()
                                .add(div().css(component(dataList, action))
                                        .add(Dropdown.<String> kebab().right()
                                                .add("Action One")
                                                .add("Action Two")
                                                .add("Disabled Action", true)
                                                .addSeparator()
                                                .add("Final Action")))))
                .add(expandableContent()
                        .add(expandableBody().css(modifier(noPadding)).textContent(LoremIpsum.paragraph()))))
};

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