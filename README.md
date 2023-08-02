# Pre-work

This demo application was built using [Angular](https://angular.io/guide/setup-local). Please, make sure you have it installed in your local machine.

Before the training session you are required to follow the bellow steps to setup your local environment.

First, [fork this repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and [clone it](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local machine.

Then, you will need to execute some commands to make it runs locally, as follows.

```
npm install
```
This command will download and install every project dependencies. Finally, execute:

```
ng serve --open
```

The ```ng serve``` command launches the server, watches your files, and rebuilds the app as you make changes to those files.

The ```--open``` (or just ```-o```) option automatically opens your browser to <http://localhost:4200/>.

If your installation and setup was successful, you should see a page similar to the following.

![Home Page](/images/home-page.png)

Do you have any issues setting up this application? Please, reach out the trainers.

---
# Deployment to AWS

**During the training session** we will share with you some additional information regarding your temporary AWS account. To make it possible to perform a deployment to that cloud service.

You have to create two secrets ```AWS_ACCESS_KEY_ID``` and ```AWS_SECRET_ACCESS_KEY``` in the ```Settings / Secrets and variables / Actions / Secrets``` section. As shown in the following image.

![Repository settings](/images/repo-settings.png)

