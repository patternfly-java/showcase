package org.patternfly.showcase.documentation.demos.server;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "Object")
public class Server {

    public String name;
    public int threads;
    public int applications;
    public int workspaces;
    public String status;
    public String location;

    @JsOverlay
    public final Status status() {
        try {
            return Status.valueOf(this.status);
        } catch (IllegalArgumentException ignore) {
            return Status.UNKNOWN;
        }
    }

    enum Status {
        STOPPED, DOWN, DEGRADED, NEEDS_MAINTENANCE, RUNNING, UNKNOWN
    }
}
