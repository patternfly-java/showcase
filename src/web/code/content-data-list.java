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
import static org.elemento.Elements.dd;
import static org.elemento.Elements.dl;
import static org.elemento.Elements.dt;

Content content = Content.content()
        .add(dl()
                .add(dt().textContent("Web"))
                .add(dd().textContent("The part of the Internet that contains " +
                        "websites and web pages"))
                .add(dt().textContent("HTML"))
                .add(dd().textContent("A markup language for creating web pages"))
                .add(dt().textContent("CSS"))
                .add(dd().textContent("A technology to make HTML look better")));