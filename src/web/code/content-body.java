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
import static org.elemento.Elements.a;
import static org.elemento.Elements.blockquote;
import static org.elemento.Elements.p;
import static org.elemento.Elements.small;

Content content = Content.content()
        .add(p().textContent(LoremIpsum.paragraphs(5)))
        .add(p().add(LoremIpsum.paragraphs(3) + " ")
                .add(a("#").textContent(LoremIpsum.paragraph()))
                .add(" " + LoremIpsum.paragraphs(2)))
        .add(blockquote().textContent(LoremIpsum.paragraphs(2)))
        .add(small().textContent(LoremIpsum.paragraphs(3)));