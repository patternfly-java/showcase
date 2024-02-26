package org.patternfly.showcase.router;

@FunctionalInterface
public interface BeforePlaceHandler {

    /** Default implementation returns {@code true} */
    default boolean shouldGoTo(PlaceManager placeManager, Place place) {
        return true;
    }

    /** Called if {@link #shouldGoTo(PlaceManager, Place)} returned {@code true} */
    void beforePlace(PlaceManager placeManager, Place place);
}
