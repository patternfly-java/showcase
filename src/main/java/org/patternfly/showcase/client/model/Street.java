package org.patternfly.showcase.client.model;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Street {

    public int number;
    public String name;
}
