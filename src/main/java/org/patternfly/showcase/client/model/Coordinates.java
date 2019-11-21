package org.patternfly.showcase.client.model;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Coordinates {

    public String latitude;
    public String longitude;
}
