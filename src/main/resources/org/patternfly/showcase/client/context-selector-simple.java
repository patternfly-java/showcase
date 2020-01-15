import static java.util.Arrays.asList;

ContextSelector<String> contextSelector = ContextSelector.contextSelector("Stage")
        .add(asList("Development", "Staging", "QA", "Production"));