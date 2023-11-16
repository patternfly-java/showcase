/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class KeyboardEvent extends UIEvent {
  public static int DOM_KEY_LOCATION_LEFT;
  public static int DOM_KEY_LOCATION_NUMPAD;
  public static int DOM_KEY_LOCATION_RIGHT;
  public static int DOM_KEY_LOCATION_STANDARD;
  public boolean altKey;

  @JsProperty(name = "char")
  public String char_;

  public String code;
  public boolean ctrlKey;
  public String key;
  public String keyIdentifier;
  public String locale;
  public int location;
  public boolean metaKey;
  public boolean repeat;
  public boolean shiftKey;

  public KeyboardEvent(String type, KeyboardEventInit eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (UIEventInit) null);
  }

  public KeyboardEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (UIEventInit) null);
  }

  public native boolean getModifierState(String keyIdentifierArg);

  public native void initKeyboardEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      Window viewArg,
      String keyArg,
      int locationArg,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey,
      boolean metaKey);

  public native void initKeyboardEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      Window viewArg,
      String keyArg,
      int locationArg,
      boolean ctrlKey,
      boolean altKey,
      boolean shiftKey);

  public native void initKeyboardEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      Window viewArg,
      String keyArg,
      int locationArg,
      boolean ctrlKey,
      boolean altKey);

  public native void initKeyboardEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      Window viewArg,
      String keyArg,
      int locationArg,
      boolean ctrlKey);

  public native void initKeyboardEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      Window viewArg,
      String keyArg,
      int locationArg);

  public native void initKeyboardEvent(
      String typeArg, boolean canBubbleArg, boolean cancelableArg, Window viewArg, String keyArg);

  public native void initKeyboardEvent(
      String typeArg, boolean canBubbleArg, boolean cancelableArg, Window viewArg);

  public native void initKeyboardEvent(String typeArg, boolean canBubbleArg, boolean cancelableArg);

  public native void initKeyboardEvent(String typeArg, boolean canBubbleArg);

  public native void initKeyboardEvent(String typeArg);
}
