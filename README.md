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

        },
        render: {
          url: 'tests/files/file.html',
          onSuccess: () => {
            console.log("rendered!")
          }
        }
      });
    })()

``` 

## Methods and Attributes

app: "Name of APP, Types": <String>
___

run: "Will run if app exists", Types: <Function>
___

before: <Will run before run executes>, Types: <Function>
___

render: "Render a template file in app", Types: <Object>, {url: "URL to Template" <String>, onSuccess: "Call to run on success of rendering" <Function> }>
___



