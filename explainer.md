# Audio Output Devices API explained

The Audio Output Devices API allows JavaScript applications to direct the audio
output of a media element to authorized devices other than the system or user
agent default. This can be helpful in a variety of real-time communication
scenarios as well as general media applications. For example, an application
can use this API to programmatically direct output to a device such as a
Bluetooth headset or speakerphone.

The Audio Output Devices API adds a setSinkId method and a sinkId field to
HTML media elements. The setSinkId() method allows changing the audio output
device on which the element renders audio, and the sinkId attribute is a string
that contains the ID of the device where the element is currently rendering
audio.

By default, the sinkId field is the empty string, which means that audio will be
rendered on the default audio output device in the system.

The set of valid device IDs that can be used as argument to setSinkId() can be
obtained from a call to [enumerateDevices](https://w3c.github.io/mediacapture-main/#dom-mediadevices-enumeratedevices).
For example:

```js
var audioElement = new Audio('sound.ogg');
audioElement.play();
navigator.mediaDevices.enumerateDevices().then(devices => {
  var lastOutputDeviceId = '';
  for (i in devices) {
    if (devices[i].kind == 'audiooutput') {
      lastOutputDeviceId = devices[i].deviceId;
    }
  }
  audioElement.setSinkId(lastOutputDeviceId).then(() => {
    console.log('Audio output device set to ' + audioElement.sinkId);
  }).catch(err => {
    console.log('setSinkId() failed', err);
  });
}).catch(err => {
  console.log('enumerateDevices() failed :(', err);
});

```

In this example, the script creates an audio element that starts to play the
'sound.ogg' file on the default audio output device. Then the output device
is changed to the last audio output device listed in the result of a call to
enumerateDevices.

SetSinkId requires the user to provide authorization if a device other than
the system default is to be used. A programmatic way to get this authorization
is to use the [getUserMedia](https://w3c.github.io/mediacapture-main/#dom-mediadevices-getusermedia()) function.
getUserMedia can be used to produce audio streams from a microphone and it
is required to authorize any corresponding output devices.
If the application does not require the audio track produced by getUserMedia,
it can be closed. For example, one standard way to ensure that all output
devices are authorized (provided there is a corresponding microphone) is:

```js
navigator.mediaDevices.enumerateDevices().then(async devices => {
   for (i in devices) {
     if (devices[i].kind == 'audiooutput') {
       var stream = await navigator.mediaDevices.getUserMedia({audio: {groupId: {exact: devices[i].groupId}}});
       stream.getAudioTracks()[0].stop();
       console.log('Authorization succeeded for device ' + devices[i].deviceId);
     }
   }
 }).catch(err => {
   console.log('An error occurred :(', err);
 });
```

Note that implementations are not required to use a per-device authorization
model. For example, an implementation may use a model based on authorization
per device class. In this case a single getUserMedia call would suffice to
authorize all devices. The [permissions API](https://w3c.github.io/permissions/)
can be used to determine if it is necessary to request permissions.

## Demo

[WebRTC samples](https://webrtc.github.io/samples) has a
[demo](https://webrtc.github.io/samples/src/content/devices/multi/) that shows
how to use the Audio OutputDevices API to change the output device used by media
elements that render static files and sound coming from a microphone.

