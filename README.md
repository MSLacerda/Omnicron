# Omnicron
Light and minimal library to organize js of webpages

***Obs. This project is a old-study and have a lot of bugs and anti-patterns use at your own risk.***

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

| Method/Attr   | Information                   | Types    |
| ------------- |:-----------------------------:| --------:|
| run           | Will execute if the app exists| Function |
| app           |Name of the app, need be the same on app Tag | String |
| before           | Will execute before the run executes| Function |
| render           | Render a element inside the app | Object |
| render.url           | Path of the template | String |
| render.onSuccess           | Will execute when rendering is complete | Function |






