package org.patternfly.showcase.documentation.demos.user;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Location {

    public Street street;
    public String city;
    public String state;
    public String postcode;
    public Coordinates coordinates;
    public Timezone timezone;
}
