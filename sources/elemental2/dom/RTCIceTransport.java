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

import elemental2.core.JsArray;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCIceTransport extends EventTarget {
  @JsFunction
  public interface OngatheringstatechangeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnselectedcandidatepairchangeFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnstatechangeFn {
    Object onInvoke(Event p0);
  }

  @JsProperty
  String getComponent();

  @JsProperty
  String getGatheringState();

  JsArray<RTCIceCandidate> getLocalCandidates();

  RTCIceParameters getLocalParameters();

  @JsProperty
  RTCIceTransport.OngatheringstatechangeFn getOngatheringstatechange();

  @JsProperty
  RTCIceTransport.OnselectedcandidatepairchangeFn getOnselectedcandidatepairchange();

  @JsProperty
  RTCIceTransport.OnstatechangeFn getOnstatechange();

  JsArray<RTCIceCandidate> getRemoteCandidates();

  RTCIceParameters getRemoteParameters();

  @JsProperty
  String getRole();

  RTCIceCandidatePair getSelectedCandidatePair();

  @JsProperty
  String getState();

  @JsProperty
  void setOngatheringstatechange(RTCIceTransport.OngatheringstatechangeFn ongatheringstatechange);

  @JsProperty
  void setOnselectedcandidatepairchange(
      RTCIceTransport.OnselectedcandidatepairchangeFn onselectedcandidatepairchange);

  @JsProperty
  void setOnstatechange(RTCIceTransport.OnstatechangeFn onstatechange);
}
