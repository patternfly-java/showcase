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
package org.patternfly.showcase.client;

import java.util.function.Supplier;

class Place {

    public final String id;
    public final String place;
    public final String title;
    public final Supplier<Page> page;

    Place(String id, String title, Supplier<Page> page) {
        this.id = id;
        this.place = "#" + id;
        this.title = title;
        this.page = page;
    }
}
