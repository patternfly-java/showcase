package org.patternfly.showcase.client.model;

import org.gwtproject.resources.client.ClientBundle;
import org.gwtproject.resources.client.Resource;
import org.gwtproject.resources.client.TextResource;

import static elemental2.core.Global.JSON;
import static jsinterop.base.Js.cast;

@Resource
public interface Users extends ClientBundle {

    Users INSTANCE = new UsersImpl();

    static User[] get() {
        return cast(JSON.parse(INSTANCE.json().getText()));
    }

    @Source("users.json")
    TextResource json();
}
