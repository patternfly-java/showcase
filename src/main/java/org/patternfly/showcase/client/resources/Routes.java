package org.patternfly.showcase.client.resources;

public interface Routes {

    String SHELL = "showcase";
    String SHELL_PATH = "/" + SHELL;

    String CONTRIBUTE = SHELL_PATH + "/contribute";
    String DOCUMENTATION = SHELL_PATH + "/documentation/:id";
    String GET_IN_TOUCH = SHELL_PATH + "/get-in-touch";
    String GET_STARTED = SHELL_PATH + "/get-started";
    String HOME = SHELL_PATH + "/home";

    static String hash(String route) {
        return "#" + route;
    }

    static String documentation(String id) {
        return "#" + DOCUMENTATION.replace(":id", id);
    }

    static String[] split(String route) {
        return route.replace(SHELL_PATH + "/", "").split("/");
    }
}
