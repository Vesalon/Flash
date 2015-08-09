# Flash

## Downloads and Installations
[Python 2.7.10](https://www.python.org/downloads/) (pip is included)

[set environment variable "PATH"](http://www.computerhope.com/issues/ch000549.htm)
to include for Python27 and Python27\Scripts (```C:\Python27;C:\Python27\Scripts```)

to install django:
* `pip install django`
* `pip install django-filter`
* `pip install djangorestframework`
* `pip install drf-nested-routers`

optional:
* `pip install markdown`
* `pip install setuptools`
* `pip install virtualenv`

[Node+npm](https://nodejs.org/download/)
(there is no need to set path environment variable, node does this automatically)
* `npm install -g cordova`

[android sdk](https://developer.android.com/sdk/index.html) - android studio not necessary

[atom](https://atom.io/) - preferred text editor
(if you use an IDE, **__change gitignore file__**)

## Setting up project
in folder where you want to keep project (```C:\users\username\projects```)
```
git clone https://github.com/Vesalon/Flash.git
```
download lib with angular, jquery, etc. from dropbox (check email) and put in project
in directory ```Flash\flashweb\static``` and ```Flash\c_hapin\www\lib``` (make sure you get the right libs for each one)

## Learning
[django](https://docs.djangoproject.com/en/1.8/intro/tutorial01/) - skim

[angular](https://docs.angularjs.org/guide/concepts)

[django + angular tutorial](https://thinkster.io/django-angularjs-tutorial/)

## Running
1. change directory to c_hapin: ```cd Flash\c_hapin```
2. add platforms: ```cordova platform add android```
3. run: ```cordova run android```

for running in browser (in c_hapin again):
1. ```npm start```
2. open browser and go to localhost:8000/www
