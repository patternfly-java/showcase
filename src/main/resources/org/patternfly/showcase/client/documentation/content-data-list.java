import org.patternfly.showcase.client.resources.LoremIpsum;

import static org.jboss.gwt.elemento.core.Elements.dd;
import static org.jboss.gwt.elemento.core.Elements.dl;
import static org.jboss.gwt.elemento.core.Elements.dt;

Content content = Content.content()
        .add(dl()
                .add(dt().textContent("Web"))
                .add(dd().textContent("The part of the Internet that contains " +
                        "websites and web pages"))
                .add(dt().textContent("HTML"))
                .add(dd().textContent("A markup language for creating web pages"))
                .add(dt().textContent("CSS"))
                .add(dd().textContent("A technology to make HTML look better")));