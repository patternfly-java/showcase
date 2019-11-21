package org.patternfly.showcase.client;

import com.github.nalukit.nalu.plugin.elemento.client.NaluPluginElemento;
import com.google.gwt.core.client.EntryPoint;

public class Showcase implements EntryPoint {

    @Override
    public void onModuleLoad() {
        ShowcaseApplication application = new org.patternfly.showcase.client.ShowcaseApplicationImpl();
        application.run(new NaluPluginElemento());
    }
}
