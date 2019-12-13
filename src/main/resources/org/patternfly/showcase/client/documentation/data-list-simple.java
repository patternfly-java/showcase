import static org.jboss.gwt.elemento.core.Elements.span;
import static org.patternfly.components.DataList.dataList
import static org.patternfly.components.DataList.itemCell;
import static org.patternfly.components.DataList.itemContent;
import static org.patternfly.components.DataList.itemRow;
import static org.patternfly.resources.CSS.modifier;
import static org.patternfly.resources.Constants.alignRight;
import static org.patternfly.resources.Constants.noFill;

DisplayData[] items = {
        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemContent()
                        .add(itemCell()
                                .add(span().id(item.id()).textContent("Primary Content")))
                        .add(itemCell()
                                .textContent("Secondary Content"))))),

        new DisplayData((li, provider, item) -> li.add(itemRow()
                .add(itemContent()
                        .add(itemCell().css(modifier(noFill))
                                .add(span().id(item.id()).textContent("Primary content (pf-m-no-fill)")))
                        .add(itemCell().css(modifier(noFill), modifier(alignRight))
                                .textContent("Secondary content (pf-m-align-right pf-m-no-fill)")))))
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