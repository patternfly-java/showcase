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
package org.patternfly.showcase;

import java.util.ArrayList;
import java.util.List;

import org.patternfly.showcase.component.Component;
import org.patternfly.showcase.demo.server.Server;
import org.patternfly.showcase.demo.user.User;
import org.patternfly.showcase.layout.Layout;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL, name = "PatternFlyData")
public class Data {

    public static JsPropertyMap<Component> components;
    public static JsPropertyMap<Layout> layouts;
    public static Server[] servers;
    public static User[] users;

    @JsOverlay
    public static List<Component> components() {
        List<Component> result = new ArrayList<>();
        components.forEach(key -> {
            Component component = components.get(key);
            if (component.implemented()) {
                result.add(component);
            }
        });
        return result;
    }

    @JsOverlay
    public static List<Component> topLevelComponents() {
        List<Component> result = new ArrayList<>();
        components.forEach(key -> {
            Component component = components.get(key);
            if (component.implemented() && component.route.equals("/components/" + component.name)) {
                result.add(component);
            }
        });
        return result;
    }

    @JsOverlay
    public static List<Component> groupComponents(String group) {
        List<Component> result = new ArrayList<>();
        components.forEach(key -> {
            Component component = components.get(key);
            if (component.implemented() && component.route.contains(group)) {
                result.add(component);
            }
        });
        return result;
    }

    @JsOverlay
    public static List<Layout> layouts() {
        List<Layout> result = new ArrayList<>();
        layouts.forEach(key -> {
            Layout layout = layouts.get(key);
            if (layout.implemented()) {
                result.add(layout);
            }
        });
        return result;
    }

}
