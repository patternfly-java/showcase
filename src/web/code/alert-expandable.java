alert(success, "Success alert title")
        .expandable()
        .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
        .addDescription(
                "Success alert description. This should tell the user more information about the alert.")
        .addActionGroup(alertActionGroup()
                .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore")));

alert(success, "Success alert title").inline()
        .expandable()
        .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
        .addDescription(
                "Success alert description. This should tell the user more information about the alert.")
        .addActionGroup(alertActionGroup()
                .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore")));