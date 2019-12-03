package org.patternfly.showcase.client.documentation;

import java.util.function.Supplier;

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.IsElement;
import org.patternfly.client.components.Button;
import org.patternfly.client.components.Icon;

import static org.jboss.gwt.elemento.core.Elements.*;
import static org.patternfly.client.resources.CSS.fas;

public class Snippet implements IsElement<HTMLElement> {

    private final Supplier<HTMLElement> demoSupplier;
    private final HTMLElement code;
    private final HTMLElement root;
    private HTMLElement demo;

    public Snippet(String header, String code, Supplier<HTMLElement> demo) {
        demoSupplier = demo;
        root = section().css("sc-documentation")
                .add(h(3, header).css("sc-documentation__heading"))
                .add(this.demo = demo.get())
                .add(div().css("sc-documentation__toolbar")
                        .add(Button.icon(Icon.icon(fas("code")), "Toggle code").onClick(this::toggleCode))
                        .add(Button.icon(Icon.icon(fas("copy")), "Copy code").onClick(this::copyCode))
                        .add(Button.icon(Icon.icon(fas("undo")), "Undo changes").onClick(this::undo)))
                .add(this.code = div().css("sc-documentation__code")
                        .add(pre().css("prettyprint").textContent(code)).element()).element();
        this.demo.classList.add("sc-documentation__example");
        setVisible(this.code, false);
    }

    private void toggleCode() {
        setVisible(code, !isVisible(code));
    }

    private void copyCode() {
    }

    private void undo() {
        failSafeRemoveFromParent(demo);
        demo = demoSupplier.get();
        demo.classList.add("sc-documentation__example");
        insertBefore(demo, find(root, By.classname(".sc-documentation__toolbar")));
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}
