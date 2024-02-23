package org.patternfly.showcase.router;

import java.util.Objects;

public class Place {

    public final String route;

    public Place(String route) {
        this.route = route;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {return true;}
        if (o == null || getClass() != o.getClass()) {return false;}
        Place place = (Place) o;
        return Objects.equals(route, place.route);
    }

    @Override
    public int hashCode() {
        return Objects.hash(route);
    }

    @Override
    public String toString() {
        return "Place(" + route + ')';
    }
}
