/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import static java.util.Arrays.asList;
import static org.patternfly.resources.CSS.util;

static class Stage {

    final String name;
    final String url;
    final int nodes;

    Stage(String name, String url, int nodes) {
        this.name = name;
        this.url = url;
        this.nodes = nodes;
    }

    @Override
    public String toString() {
        return name;
    }
}

List<Stage> stages = asList(
        new Stage("Development", "http://localhost:8080", 2),
        new Stage("Staging", "https://staging.acme.org", 5),
        new Stage("QA", "https://qa.acme.org", 3),
        new Stage("Production", "https://acme.org", 12));

ContextSelector<Stage> contextSelector = ContextSelector.contextSelector("Stage")
        .display((html, stage) -> html.css(util("justify-content-space-between"))
                .title(stage.url)
                .add(stage.name)
                .add(Badge.read(stage.nodes)))
        .add(stages);