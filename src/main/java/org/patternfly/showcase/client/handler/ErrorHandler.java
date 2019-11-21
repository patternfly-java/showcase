package org.patternfly.showcase.client.handler;

import com.github.nalukit.nalu.client.event.NaluErrorEvent;
import com.github.nalukit.nalu.client.handler.AbstractHandler;
import com.github.nalukit.nalu.client.handler.annotation.Handler;
import org.patternfly.showcase.client.ShowcaseContext;
import org.patternfly.showcase.client.resources.Routes;

@Handler
public class ErrorHandler extends AbstractHandler<ShowcaseContext> {

    public ErrorHandler() {
    }

    @Override
    public void bind() {
        this.eventBus.addHandler(NaluErrorEvent.TYPE, this::handleNaluErrorEvent);
    }

    private void handleNaluErrorEvent(NaluErrorEvent e) {
        this.router.route(Routes.HOME);
    }

}
