package org.patternfly.showcase.router;

@FunctionalInterface
public interface AfterPlaceHandler {

    void afterPlace(PlaceManager placeManager, Place place, Page page);
}
