import static org.patternfly.client.components.Components.contextSelector;

ContextSelector<String> contextSelector = contextSelector("Stage")
        .add(asList("Development", "Staging", "QA", "Production"));