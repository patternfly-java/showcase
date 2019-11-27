package org.patternfly.showcase.client;

import com.github.nalukit.nalu.client.application.IsApplication;
import com.github.nalukit.nalu.client.application.annotation.Application;
import com.github.nalukit.nalu.client.application.annotation.Debug;
import com.github.nalukit.nalu.plugin.elemento.client.DefaultElementoLogger;

import static com.github.nalukit.nalu.client.application.annotation.Debug.LogLevel.SIMPLE;
import static org.patternfly.showcase.client.resources.Routes.HOME;

@Application(startRoute = HOME, context = ShowcaseContext.class)
@Debug(logLevel = SIMPLE, logger = DefaultElementoLogger.class)
interface ShowcaseApplication extends IsApplication {
}
