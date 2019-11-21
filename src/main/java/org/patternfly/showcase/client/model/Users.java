package org.patternfly.showcase.client.model;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;

import static elemental2.core.Global.JSON;
import static jsinterop.base.Js.cast;

public interface Users extends ClientBundle {

    Users INSTANCE = GWT.create(Users.class);

    static User[] get() {
        return cast(JSON.parse(INSTANCE.json().getText()));
    }

    @Source("users.json")
    TextResource json();
}
