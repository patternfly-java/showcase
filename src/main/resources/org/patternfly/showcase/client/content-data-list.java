import static org.elemento.Elements.dd;
import static org.elemento.Elements.dl;
import static org.elemento.Elements.dt;

Content content = Content.content()
        .add(dl()
                .add(dt().textContent("Web"))
                .add(dd().textContent("The part of the Internet that contains " +
                        "websites and web pages"))
                .add(dt().textContent("HTML"))
                .add(dd().textContent("A markup language for creating web pages"))
                .add(dt().textContent("CSS"))
                .add(dd().textContent("A technology to make HTML look better")));