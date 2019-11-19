# ionic4-menu-tabs-example
![Example](ionic4-menu-tabs-example.gif)

## Install the Ionic CLI ##
Before proceeding, make sure the latest version of Node.js and npm are installed. See Environment Setup for details. Install the Ionic CLI globally with npm:

`npm install -g ionic`

For more information see https://ionicframework.com/docs/

## Start this example ##
1. Install all dependencies `npm install`
2. Run Ionic `ionic serve`
3. npm rebuild node-sass //if got error
2. Run Ionic `ionic serve`
 

https://ionicframework.com/docs/v3/intro/deploying/



<h2 id="android-devices">Android Devices</h2>

<p>Deploying to an Android device is a fairly straightforward process. If you have a working Android development environment, you’re ready to go.</p>

<h3 id="requirements">Requirements</h3>

<ul>
  <li><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">Java JDK 8</a></li>
  <li><a href="https://developer.android.com/studio/index.html">Android Studio</a></li>
  <li>Updated Android SDK tools, platform and component dependencies. Available through Android Studio’s <a href="https://developer.android.com/studio/intro/update.html">SDK Manager</a></li>
</ul>

<h3 id="running-your-app">Running Your App</h3>

<p>To run your app, all you have to do is enable USB debugging and Developer Mode on your Android device, then run <code class="highlighter-rouge">ionic cordova run android --device</code> from the command line.</p>

<p>This will produce a debug build of your app, both in terms of Android and Ionic’s code</p>

<p>Enabling USB debugging and Developer Mode can vary between devices, but is easy to look up with a Google search. You can also check out <a href="https://developer.android.com/studio/run/device.html#developer-device-options">Enabling On-device Developer Options</a> in the Android docs.</p>

<h3 id="production-builds">Production Builds</h3>

<p>To run or build your app for production, run</p>

<div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code class="hljs bash">ionic cordova run android <span class="nt">--prod</span> <span class="nt">--release</span>
<span class="c"><span class="hljs-comment"># or</span></span>
ionic cordova build android <span class="nt">--prod</span> <span class="nt">--release</span>
</code></pre></div></div>

<p>This will minify your app’s code as Ionic’s source and also remove any debugging capabilities from the APK. This is generally used when deploying an app to the Google Play Store.</p>
