alert(success, "Success alert title")
        .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
        .addDescription(
                "Success alert description. This should tell the user more information about the alert.")
        .addActionGroup(alertActionGroup()
                .addAction("View details", (e, a) -> DomGlobal.alert("Clicked on View details"))
                .addAction("Ignore", (e, a) -> DomGlobal.alert("Clicked on Ignore")));

alert(success, "Success alert title")
        .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
        .addDescription(alertDescription()
                .add(p()
                        .add("Success alert description. This should tell the user more information about the alert. ")
                        .add(a("#").textContent("This is a link"))
                        .add(".")));

alert(success, "Success alert title")
        .closable((e, a) -> DomGlobal.alert("Clicked the close button"))
        .addActionGroup(alertActionGroup()
                .addAction(button("View details").inline().link(),
                        (e, a) -> DomGlobal.alert("Clicked on View details"))
                .addAction(button("Ignore").inline().link(),
                        (e, a) -> DomGlobal.alert("Clicked on Ignore")));

alert(success, "Success alert title")
        .closable((e, a) -> DomGlobal.alert("Clicked the close button"));

alert(success, "Success alert title");