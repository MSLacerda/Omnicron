# Omnicron
Light and minimal library to organize js of webpages

## Source Code 

 Cloning

``git clone https://github.com/MSLacerda/Omnicron`` 

 Install dependencies

``cd Omnicron`` 

``npm install`` 

Dist folder has a version.

## Usage

import omnicron.min.js into your html project.

`` <script src="dist/omni.min.js"></script> ``

### Create omnicron element
```
  <om-cron om-name="burning">

  </om-cron>
```

### Create new App

```
    (() => {
      new Omnicron({
        app: 'burning',
        run: () => {
          console.log("Hello World")
        }
      });
    })()

``` 


