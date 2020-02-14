package org.patternfly.showcase;

public interface Places {

    String CONTRIBUTE = "contribute";
    String DOCUMENTATION = "documentation";
    String GET_IN_TOUCH = "get-in-touch";
    String GET_STARTED = "get-started";
    String HOME = "home";

    static String place(String place) {
        return "#" + place;
    }

    static String documentation(String id) {
        return place(DOCUMENTATION + ":" + id);
    }
}
