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


## Package Installation

Our project uses a number of different packages, and in order to run the project, you'll need to download those packages. 

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


### Angular Packages

There is only one package that you need for the frontend, and it's js-confetti. To download this package you'll need to type the following in your CLI:

```bash
npm install js-confetti
```

## Deployment

You've got the project downloaded, and you've installed all the required packages. You're nearly there! All that's left is to deploy it locally (or online!)



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)