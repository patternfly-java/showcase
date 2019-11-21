package org.patternfly.showcase.client.model;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Name {

    public String title;
    public String first;
    public String last;
}
