final int[] counter = { 0 };
final double[] intervalHandle = { 0 };

actionList()
        .addItem(actionListItem()
                .add(button("Start async alerts").secondary()
                        .onAction((e, b) -> intervalHandle[0] = setInterval(__ -> {
                            counter[0] = counter[0] + 1;
                            alertGroup(toast)
                                    .addAlert(alert(danger, "Async notification " + counter[0]
                                            + " was added to the queue."));
                        }, 1_000))))
        .addItem(actionListItem()
                .add(button("Stop async alerts").secondary()
                        .onAction((e, b) -> {
                            counter[0] = 0;
                            clearInterval(intervalHandle[0]);
                        })));