import static java.util.Arrays.asList;
import static org.patternfly.components.Alert.info;
import static org.patternfly.components.AlertGroup.toast;

ContextSelector<String> contextSelector = ContextSelector.contextSelector("Stage")
        .onToggle(open -> toast().add(info("Context selector " + (open ? "expanded" : "collapsed"))))
        .onSelect(stage -> toast().add(info("Stage selected").description(stage)))
        .add(asList("Development", "Staging", "QA", "Production"));