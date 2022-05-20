# Red Tide Dashboard

The [Red Tide Dashboard](https://master.dqgcmtnr3f2aw.amplifyapp.com) is a project by [Philip Gray](https://github.com/philipgray), [Alex Wills](https://github.com/AlexWills37), and [Ferris Whitney](https://github.com/fwhitney) for our Spring 2022 Software Engineering class. 

The goal of our dashboard is to aggregate numerous sources of information on red tide, and ***hopefully*** present it in a readable and easy to understand format. On our dashboard we combine sensor data from the FWC, recent and historic tweets, YouTube videos, and podcasts on Spotify, which are all about red tide. 

The dashboard was built using a ton of different technologies:
* Angular for the front end.
* Flask being served with Gunicorn, and Nginx. 
* The front end is hosted on AWS Amplify, and the backend on an AWS EC2 instance. 

## Installation
Below are the steps for setting up and running our dashboard locally, or online.

### Project Installation

To get the project onto your computer, we have two suggested methods, downloading it manually, or cloning it with git. 

#### Manual Download

To manually download the project, you'll want to navigate to the project page (which you're on.) Above (or on the page) will be a green button labeled, "Code" which you can click on and it will open up a drop down menu. From there, click on the option that says, "Download Zip" and save it wherever. Afterwards, just unzip the file and you're good to proceed.  

---

#### Git Installation
To download the project using git, on your favorite CLI navigate to the place you'll want to download the project to. Once you've navigated to the place you want to download it to, enter the following:

```bash
git clone https://github.com/philipgray/Project3.git
```
This will copy the latest version of the project onto your system, and in the event we make updates all you have to do is navigate into the Project3 folder, and type: 
```bash
git pull
```
----

### Python Installation

Our backend was made using Flask, which is a Python framework, so first you'll have to install Python. Our server is 

---
### Angular Installation

Before we install Angular, you'll need to have Node.js. The download for Node.js is [here](https://nodejs.org/en/download/). Pick the version depending on your operating system. 

Packaged along with the installation of Node.js, is [npm](https://www.npmjs.com/). You can verify this by typing the following in your terminal / powershell:

```bash
npm -v
```

Now you're ready to get Angular. In your terminal, type the following:
```bash
npm install -g @angular/cli
```
You're almost done! Now you just need to get the confetti package (see below for package installation instructions.)

```bash
npm install js-confetti
```

Once the confetti package you're good to serve the front end locally!

---

## The mysterious Config.ini file

If you've taken a look at the backend related code, you probably have seen the following lines of code:

```python
config = configparser.ConfigParser()
config.read('config.ini')
```

And subsequently throughout the code the following references:

```python
config['twitter']['bearer']
```
or
```python
config['sensorData']['url']
```

What we're doing here is referencing our config file, and we use this to protect our API keys, and various other secrets from just sitting in our code when we upload to GitHub. This is a really important practice, and I personally recommend [this article](https://towardsdatascience.com/from-novice-to-expert-how-to-write-a-configuration-file-in-python-273e171a8eb3). Anyways, our config file looks like the following:

```config
[youtube]
api_key = xyz

[spotify]
id = xyz
secret = xyz

[twitter]
bearer = xyz
api_key = xyz
api_secret = xyz

[mongoDB]
username = xyz
pw = xyz
api = xyz
server = xyz
url = https://data.mongodb-api.com/app/data-ijcxi/endpoint/data/beta/action/find

[sensorData]
url = https://atoll.floridamarine.org/arcgis/rest/services/Projects_FWC/HAB_Current/MapServer/0/query?where=0%%3D0&outFields=%%2A&f=json
```

And this file is called, "config.ini" and will be saved in the Project3 directory. Now you might be wondering what some of these things are, such as  `bearer` or `api_secret`. These are all things that are provided to us, and allow us to query the various APIs. You will need to register your own, and you can go to the following places for that:
* [Twitter API](https://developer.twitter.com/en/docs/twitter-api)
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)
* [Spotify API](https://developer.spotify.com/documentation/web-api/)
* [MongoDB](https://www.mongodb.com/)

Once you've gotten your various keys, you'll want to replace the xyz with the subsequent codes that  got from registering for these APIs. One thing to note is in the Twitter bearer token, you might have a `%` sign, and it will not properly read. To fix this all you need to do is add another `%` right before or after it and it will work properly. 

## Package Installation

Our project uses a number of different packages, and in order to run the project, you'll need to download those packages. We've separated how to do this below: 

### Python Packages

Installing the Python packages is pretty simple! We suggest using a [virtual environment](https://docs.python.org/3/tutorial/venv.html). This will allow you to download the specific packages, and it won't interfere with other projects you have. 

To create a virtual environment, first navigate into the Project3 folder using your favorite CLI. Once inside the folder, type the following: 

```bash
python3 -m venv env
```

This will create the virtual environment, and all the requirements for it inside of the folder labeled "env" that was just created (unless it was already present!) Now you'll want to activate your virtual environment. There are two ways of doing this depending on your operating system. For Windows, you'll want to type the following:
```bash
env\Scripts\activate.bat
```

If you're on a MacOS or Linux machine, you'll want to type the following:

```bash
source tutorial-env/bin/activate
```

Congratulations, you've activated your virtual environment! Now we'll start getting the packages required for the project. Python makes this relatively easy by using a file called, "requirements.txt" which lists all the packages you'll need in order to run the project. 

---

### Angular Packages

There is only one package that you need for the frontend, and it's js-confetti. To download this package you'll need to type the following in your CLI:

```bash
npm install js-confetti
```

## Deployment

You've got the project downloaded, and you've installed all the required packages. You're nearly there! All that's left is to deploy it locally (or online!)

### Local Deployment: Frontend

Local deployment is a breeze! We'll have things up real quick! What you'll want to do is navigate into the folder called, "florida-dashboard" and from here you'll enter the following:

```bash
ng serve -o
```
Tad-ah! Your front end will be shortly, and since you added an ``-o`` to ``ng serve`` it'll open in a window for you as well! On the off-chance it doesn't though, we've got you covered. Navigate to the following page in your web browser:

```bash
http://localhost:4200
```

Congratulations! You've managed to successfully host your frontend on your computer! Now keep in mind, your frontend is going to be looking at ***our*** backend, and not your own unless you make some slight modifications to the code. To do this, you'll navigate into the following folder:
```
Project3/florida-dashboard/src/app/services
```

Here you're going to open up the file called, ```database-api.service.ts``` and here is where you'll make the modifications. Inside of the class, ```DatabaseApiService``` you'll want to find the following line:

```typescript
private backendApiEndpoint = 'https://votesrq.com'
```

You'll probably want to modify this to the local URL that your backend is running on:

```bash
http://127.0.0.1:3000
```

If you haven't gotten the backend up just yet your front end might be missing some things, but don't  fret. You can read about getting your backend up and running right below this. 

---

### Local Deployment: Backend

Deploying your backend will be a pain at first, but once you've got everything setup it'll be up quicker than the frontend! You need to setup the dreaded config file! But once you've done that you just need to navigate into the folder labeled, "backend" and you've got two options, if you're doing debugging or something of the sort, you can simply type:

```bash
python3 api.py
```

In your terminal it will give you a few urls you can go to visit your locally hosted api! For example, check out the following url:

```bash
http://127.0.0.1:3000
```

You might be wondering what the 3000 is, and that means the server is running on Port 3000, so you won't be able to access it without specifying that port. 

However, running this will display a message saying something along the lines of, "This is a development server Do not use it in a production environment." and that might sound slightly concerning if you're trying to deploy it to the whole world. Don't fret though, we've got you covered. We use the gunicorn package for this very reason, and you can test it out by entering the following:

```bash
gunicorn --bind 0.0.0.0:5000 wsgi:app
```

You're now ready for the big leagues, and by that I mean trying to deploy this with AWS!  

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)