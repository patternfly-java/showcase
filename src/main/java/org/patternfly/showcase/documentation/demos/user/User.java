package org.patternfly.showcase.documentation.demos.user;

import java.util.Date;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import org.gwtproject.i18n.client.DateTimeFormat;
import org.jboss.elemento.Elements;

import static org.jboss.elemento.Elements.*;
import static org.patternfly.resources.CSS.fas;
import static org.patternfly.resources.CSS.util;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class User {

    @JsOverlay
    private static final DateTimeFormat ISO_8601 = DateTimeFormat.getFormat(DateTimeFormat.PredefinedFormat.ISO_8601);

    public String gender;
    public Name name;
    public Location location;
    public String email;
    public Login login;
    public DateOfBirth dob;
    public DateOfBirth registered;
    public String phone;
    public String cell;
    public Picture picture;
    public String nat;

    @JsOverlay
    public final String fullName() {
        return name.first + " " + name.last;
    }

    @JsOverlay
    public final Date getBirthday() {
        return ISO_8601.parse(dob.date);
    }

    @JsOverlay
    public final Date getRegistered() {
        return ISO_8601.parse(registered.date);
    }

    @JsOverlay
    public final HTMLElement address() {
        return Elements.address()
                .add(location.street.name + " " + location.street.number).add(br())
                .add(location.postcode + " " + location.city).add(br())
                .add(location.state + ", " + nat)
                .add(a(googleMaps()).attr("target", "map").css(util("ml-sm"))
                        .add(i().css(fas("map-marked-alt")))).element();
    }

    @JsOverlay
    public final HTMLElement contact() {
        return ul()
                .add(li().add(a("mailto:" + email)
                        .add(i().css(fas("envelope"), util("mr-sm"))).add(email)))
                .add(li().add(a("tel:" + phone)
                        .add(i().css(fas("phone"), util("mr-sm"))).add(phone)))
                .add(li().add(a("tel:" + cell)
                        .add(i().css(fas("mobile-alt"), util("mr-sm"))).add(cell)))
                .element();
    }

    @JsOverlay
    public final HTMLImageElement nat() {
        return img("https://www.countryflags.io/" + nat + "/flat/32.png")
                .title(nat)
                .style("min-width:32px")
                .element();
    }

    @JsOverlay
    public final HTMLDivElement photo() {
        return div().css("sc-user-photo-75")
                .add(img(picture.medium))
                .element();
    }

    @JsOverlay
    public final String googleMaps() {
        return "https://www.google.com/maps/search/?api=1&query=" +
                location.coordinates.latitude + "," +
                location.coordinates.longitude;
    }

    @JsOverlay
    public final boolean match(String query) {
        return name.first.toLowerCase().contains(query.toLowerCase()) ||
                name.last.toLowerCase().contains(query.toLowerCase()) ||
                email.toLowerCase().contains(query.toLowerCase()) ||
                login.username.toLowerCase().contains(query.toLowerCase());
    }
}
