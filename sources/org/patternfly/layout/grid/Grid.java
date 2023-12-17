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
package org.patternfly.layout.grid;

import org.patternfly.core.Logger;
import org.patternfly.core.Tuple;
import org.patternfly.core.Tuples;
import org.patternfly.layout.BaseLayout;
import org.patternfly.style.Breakpoint;
import org.patternfly.style.Classes;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.div;
import static org.patternfly.style.Classes.grid;
import static org.patternfly.style.Classes.gutter;
import static org.patternfly.style.Classes.item;
import static org.patternfly.style.Classes.layout;
import static org.patternfly.style.Classes.modifier;
import static org.patternfly.style.Variable.componentVar;
import static org.patternfly.style.Variables.Order;

public class Grid extends BaseLayout<HTMLDivElement, Grid> {

    // ------------------------------------------------------ factory

    public static Grid grid() {
        return new Grid();
    }

    // ------------------------------------------------------ instance

    Grid() {
        super(div().css(layout(grid)).element());
    }

    // ------------------------------------------------------ add

    public Grid addItem(GridItem item) {
        return add(item);
    }

    // ------------------------------------------------------ builder

    /**
     * The number of columns all grid items should span on a specific breakpoint.
     */
    public Grid cols(Tuples<Breakpoint, Integer> columns) {
        if (columns != null) {
            for (Tuple<Breakpoint, Integer> col : columns) {
                internalCols(col);
            }
        }
        return this;
    }

    /** Modifies the flex layout element order property. */
    public Grid order(Tuples<Breakpoint, String> order) {
        if (order != null) {
            for (Tuple<Breakpoint, String> o : order) {
                internalOrder(element(), o);
            }
        }
        return this;
    }

    /**
     * The number of rows a column in the grid should span. Value should be a number 1-12.
     */
    public Grid span(int rows) {
        if (verifyRange("span", rows)) {
            css(modifier("all-" + rows + "-col"));
        }
        return this;
    }

    /** Adds {@linkplain Classes#modifier(String) modifier(gutter)} */
    public Grid gutter() {
        return css(modifier(gutter));
    }

    @Override
    public Grid that() {
        return this;
    }

    // ------------------------------------------------------ internal

    static void internalOrder(HTMLElement element, Tuple<Breakpoint, String> tuple) {
        // Variable examples:
        // --pf-v5-l-grid--item--Order: -1;
        // --pf-v5-l-grid--item--Order-on-md: 1;
        String orderPart = tuple.key == Breakpoint.default_ ? Order : Order + "-on-" + tuple.key.value;
        componentVar(layout(grid), item, orderPart).applyTo(element, tuple.value);
    }

    private void internalCols(Tuple<Breakpoint, Integer> tuple) {
        if (tuple.key != Breakpoint.default_) {
            if (verifyRange("cols", tuple.value)) {
                css(modifier("all-" + tuple.value + "-col-on-" + tuple.key.value));
            }
        }
    }

    private boolean verifyRange(String property, int value) {
        if (value < 1 || value > 12) {
            Logger.unsupported("PF5/Grid", element(), "'" + property + "' out of range. Given: " + value + ", allowed [1,12].");
            return false;
        }
        return true;
    }
}
